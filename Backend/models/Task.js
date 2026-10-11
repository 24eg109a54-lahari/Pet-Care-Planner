import { readDb, writeDb } from "../config/db.js";

export const Task = {
  async findAll() {
    const db = await readDb();
    return db.tasks || [];
  },

  async create(data) {
    const db = await readDb();
    const newTask = {
      id: data.id || "task_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8),
      petId: data.petId || "",
      petName: data.petName || "",
      task: data.task || "",
      type: data.type || "Daily Care",
      date: data.date || new Date().toISOString().split("T")[0],
      time: data.time || "",
      status: data.status || "Pending",
      notes: data.notes || "",
      createdAt: new Date().toISOString(),
    };
    db.tasks = db.tasks || [];
    db.tasks.push(newTask);
    await writeDb(db);
    return newTask;
  },

  async delete(id) {
    const db = await readDb();
    const initialLen = (db.tasks || []).length;
    db.tasks = (db.tasks || []).filter((t) => String(t.id) !== String(id));
    await writeDb(db);
    return db.tasks.length < initialLen;
  },
};
