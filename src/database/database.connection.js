import dotenv from "dotenv";
import pg from "pg";
dotenv.config();

const { Pool } = pg;

const connection = {
  connectionString: process.env.DATABASE_URL,
};

if (process.env.NODE_ENV === "production") connection.ssl = true;

export const db = new Pool(connection);
