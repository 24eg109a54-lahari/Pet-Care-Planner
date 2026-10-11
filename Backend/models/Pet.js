import { readDb, writeDb } from "../config/db.js";

export const Pet = {
  async findAll() {
    const db = await readDb();
    return db.pets || [];
  },

  async findById(id) {
    const db = await readDb();
    return (db.pets || []).find((p) => String(p.id) === String(id)) || null;
  },

  async create(data) {
    const db = await readDb();
    const newPet = {
      id: data.id || "pet_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8),
      name: data.name || "",
      type: data.type || "Other",
      breed: data.breed || "",
      age: data.age || "",
      gender: data.gender || "",
      color: data.color || "",
      weight: data.weight || "",
      notes: data.notes || "",
      createdAt: new Date().toISOString(),
    };
    db.pets = db.pets || [];
    db.pets.push(newPet);
    await writeDb(db);
    return newPet;
  },

  async delete(id) {
    const db = await readDb();
    const initialLen = (db.pets || []).length;
    db.pets = (db.pets || []).filter((p) => String(p.id) !== String(id));
    await writeDb(db);
    return db.pets.length < initialLen;
  },
};
