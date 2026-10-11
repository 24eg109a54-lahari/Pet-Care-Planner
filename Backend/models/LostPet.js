import { readDb, writeDb } from "../config/db.js";

export const LostPet = {
  async findAll() {
    const db = await readDb();
    return db.lostPets || [];
  },

  async create(data) {
    const db = await readDb();
    const newReport = {
      id: data.id || "lost_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8),
      petName: data.petName || data.name || "",
      type: data.type || "Pet",
      breed: data.breed || "",
      lastSeenLocation: data.lastSeenLocation || data.location || "",
      lastSeenDate: data.lastSeenDate || data.date || "",
      contactName: data.contactName || "",
      contactPhone: data.contactPhone || data.phone || "",
      description: data.description || "",
      status: data.status || "Missing",
      createdAt: new Date().toISOString(),
    };
    db.lostPets = db.lostPets || [];
    db.lostPets.push(newReport);
    await writeDb(db);
    return newReport;
  },

  async delete(id) {
    const db = await readDb();
    const initialLen = (db.lostPets || []).length;
    db.lostPets = (db.lostPets || []).filter((lp) => String(lp.id) !== String(id));
    await writeDb(db);
    return db.lostPets.length < initialLen;
  },
};
