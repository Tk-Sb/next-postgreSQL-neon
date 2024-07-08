import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: './app/_db/schema.js',
    out: './app/_db/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
})