import knex from 'knex';

// Configuração do Knex.js
const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URL + "?sslmode=require",
});



export default db