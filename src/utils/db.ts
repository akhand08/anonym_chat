import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import {Pool} from "pg"
import dotenv from "dotenv"


dotenv.config()



const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});



const db = drizzle(pool);

async function main() {
  try {
    await pool.connect();
    console.log('DB is connected properly');

    // Run migrations
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migrations have been applied');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main();

export default db;