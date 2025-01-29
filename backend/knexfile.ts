import { Knex } from 'knex';

interface KnexConfig {
  [key: string]: Knex.Config;
}

console.log("process.env", process.env);

const config: KnexConfig = {
  development: {
    client: 'postgres',
    connection: {
      host: process.env.DB_HOST || 'db',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'todoist',
      port: Number(process.env.DB_PORT) || 5432
    },
    migrations: {
      directory: './src/db/migrations'
    },
    seeds: {
      directory: './src/db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};

export default config;
