const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5433,
    user: 'joselatino',
    password: '3612',
    database: 'my_store'
  });

  await client.connect();
  return client;
}

module.exports = getConnection;
