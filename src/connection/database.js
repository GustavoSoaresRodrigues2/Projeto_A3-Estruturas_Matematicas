require('dotenv').config({path: 'dbinf.env'});
const { Client } = require('pg');

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;


const client = new Client({
  user: dbUser,         
  host: dbHost,
  database: dbName,     
  password: dbPassword,        
  port: 15441,
  ssl: {
    rejectUnauthorized: false
  }                    
});

client.connect((err) => {
  if (err) {
      console.error('Erro ao conectar ao banco de dados: ' + err.stack);
      return;
  }
  console.log('Conectado ao banco de dados como ID ' + connection.threadId);
});

module.exports = connection;