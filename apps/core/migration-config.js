const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    databaseUrl: process.env.DATABASE_URL,
    migrationsTable: "pgmigrations",
    dir: "migrations",
    direction: "up",
};

// ! Create Migration
// npx node-pg-migrate create <migration_name>
// ! Run Migration
// npx node-pg-migrate up -f migration-config.js
// npx node-pg-migrate down -f migration-config.js