const path = require("path");
const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  // Use Postgres in production if DATABASE_URL is provided
  if (env("DATABASE_URL")) {
    const config = parse(env("DATABASE_URL"));
    return {
      connection: {
        client: "postgres",
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: false, // Needed for Render's TLS
          },
        },
        pool: { min: 2, max: 10 },
      },
    };
  }

  // Fallback: SQLite for local development
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(
          __dirname,
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };
};
