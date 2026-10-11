import { readDb, writeDb } from "../config/db.js";
import crypto from "crypto";

function hashPassword(password) {
  return crypto.createHash("sha256").update(String(password)).digest("hex");
}

export const User = {
  hashPassword,

  verifyPassword(user, plainPassword) {
    if (!user || !user.password) return false;
    const hashed = hashPassword(plainPassword);
    return user.password === hashed || user.password === plainPassword;
  },

  async findByEmail(email) {
    const db = await readDb();
    return (
      (db.users || []).find(
        (u) => String(u.email || "").toLowerCase() === String(email || "").toLowerCase()
      ) || null
    );
  },

  async create(data) {
    const db = await readDb();
    const newUser = {
      id: data.id || "user_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8),
      name: data.name || "",
      email: data.email || "",
      password: hashPassword(data.password || ""),
      createdAt: new Date().toISOString(),
    };
    db.users = db.users || [];
    db.users.push(newUser);
    await writeDb(db);
    return { id: newUser.id, name: newUser.name, email: newUser.email };
  },
};

