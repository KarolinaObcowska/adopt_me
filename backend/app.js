import { connectDB } from "./db.js";
import { start } from "./server.js";

connectDB()
start()