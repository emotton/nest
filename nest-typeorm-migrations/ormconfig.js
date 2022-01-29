module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "numsey",
    database: "AulasNest2",
    entities: ["dist/**/*.entity.js"],
    migrationsTableName: "custom_migration_table",
    migrations: ["dist/migrations/*.js"],
    cli: {
        migrationsDir: "src/migrations"
    }
};