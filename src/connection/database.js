require('dotenv').config({path: 'dbinf.env'});
const { Client } = require('pg');

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

// Configuração do cliente PostgreSQL
const client = new Client({
  user: dbUser,         // Usuário do banco de dados
  host: dbHost, // Host do banco de dados
  database: dbName,     // Nome do banco de dados
  password: dbPassword,        // Senha do banco de dados
  port: 15441,
  ssl: {
    rejectUnauthorized: false
  }                    
});

// Função para conectar e fazer uma consulta
async function conectarEDispararConsulta() {
  try {
    // Conectar ao banco de dados
    await client.connect();
    console.log("Conectado ao banco de dados!");

    // Exemplo de consulta: Seleciona todos os itens da tabela 'users'
    const res = await client.query('SELECT * FROM userdb');
    console.log(res.rows); // Exibe as linhas retornadas da tabela

  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } finally {
    // Encerra a conexão
    await client.end();
    console.log("Conexão encerrada.");
  }
}

// Chama a função
conectarEDispararConsulta();
