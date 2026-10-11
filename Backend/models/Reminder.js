import { readDb, writeDb } from "../config/db.js";

export const Reminder = {
  async findAll() {
    const db = await readDb();
    return db.reminders || [];
  },

  async create(data) {
    const db = await readDb();
    const newReminder = {
      id: data.id || "rem_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8),
      petId: data.petId || "",
      petName: data.petName || "",
      title: data.title || "",
      category: data.category || "General",
      date: data.date || "",
      time: data.time || "",
      repeat: data.repeat || "None",
      notes: data.notes || "",
      completed: !!data.completed,
      createdAt: new Date().toISOString(),
    };
    db.reminders = db.reminders || [];
    db.reminders.push(newReminder);
    await writeDb(db);
    return newReminder;
  },

  async delete(id) {
    const db = await readDb();
    const initialLen = (db.reminders || []).length;
    db.reminders = (db.reminders || []).filter((r) => String(r.id) !== String(id));
    await writeDb(db);
    return db.reminders.length < initialLen;
  },
};
