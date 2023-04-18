const config = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities:
    process.env.NODE_ENV === "local"
      ? ["../entities/*.ts"]
      : ["../../dist/src/app/entities/*.js"],
  cli: {
    migrationsDir: "../database/migrations",
  },
  synchronize: false,
  logging: true,
  timezone: "America/Sao_Paulo",
};

module.exports = config;
