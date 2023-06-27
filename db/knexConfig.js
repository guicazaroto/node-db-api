
const knexConfig = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/dev.sqlite3'
    }
  },
  production:{
    client: 'pg',
    connection: process.env.POSTGRES_URL + "?sslmode=require",
  }
}

export default knexConfig;
