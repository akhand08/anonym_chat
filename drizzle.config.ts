
import { defineConfig } from 'drizzle-kit';
import dotenv from "dotenv"

dotenv.config()

export default defineConfig({
 out: './drizzle',
 schema: './src/utils/schema.ts',
 dialect: 'postgresql',
 dbCredentials: {
 url: process.env.DATABASE_URL!,
 },
});

