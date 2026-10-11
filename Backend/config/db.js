import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, "..", "data");
const dbFile = join(dataDir, "database.json");

const initialDatabase = {
  pets: [],
  tasks: [],
  vaccinations: [],
  reminders: [],
  medicines: [],
  healthRecords: [],
  lostPets: [],
  users: [],
};

export async function initDb() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    try {
      await fs.access(dbFile);
    } catch {
      await fs.writeFile(dbFile, JSON.stringify(initialDatabase, null, 2), "utf-8");
    }
  } catch (error) {
    console.error("Failed to initialize database:", error);
  }
}

export async function readDb() {
  try {
    await initDb();
    const data = await fs.readFile(dbFile, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading database:", error);
    return { ...initialDatabase };
  }
}

export async function writeDb(data) {
  try {
    await initDb();
    await fs.writeFile(dbFile, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing to database:", error);
    return false;
  }
}
