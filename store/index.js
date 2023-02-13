// Remember to set type: module in package.json or use .mjs extension
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";

// File path
const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();

// If db.json doesn't exist, db.data will be null
// Use the code below to set default data
// db.data = db.data || { posts: [] } // For Node < v15.x
db.data = db.data ||= { requests: [] };

export const createRequest = async (type, name) => {
  db.data.requests.push({ type, name, create_at: new Date().getTime() });
  await db.write();
};
