import { readDb, writeDb } from "../config/db.js";

export const HealthRecord = {
  async findAll() {
    const db = await readDb();
    return db.healthRecords || [];
  },

  async create(data) {
    const db = await readDb();
    const newRecord = {
      id: data.id || "health_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8),
      petId: data.petId || "",
      petName: data.petName || "",
      date: data.date || new Date().toISOString().split("T")[0],
      weight: data.weight || "",
      temperature: data.temperature || "",
      symptoms: data.symptoms || "",
      diagnosis: data.diagnosis || "",
      vetNotes: data.vetNotes || data.notes || "",
      createdAt: new Date().toISOString(),
    };
    db.healthRecords = db.healthRecords || [];
    db.healthRecords.push(newRecord);
    await writeDb(db);
    return newRecord;
  },

  async delete(id) {
    const db = await readDb();
    const initialLen = (db.healthRecords || []).length;
    db.healthRecords = (db.healthRecords || []).filter((h) => String(h.id) !== String(id));
    await writeDb(db);
    return db.healthRecords.length < initialLen;
  },
};
