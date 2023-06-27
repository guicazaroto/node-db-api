import knex from 'knex';
import { default as knexConfig } from './knexConfig.js'

// Configuração do Knex.js
let db = null;
if(process.env.NODE_ENV === 'production'){
  db = knex(knexConfig.production);
}else{
  db = knex(knexConfig.development);
}

export default db