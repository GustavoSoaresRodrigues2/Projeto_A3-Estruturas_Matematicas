import { client } from "../connection/database.js";

let usuarioLogado = null;  // Variável para armazenar o usuário logado

const criacaoSql = "INSERT INTO usuario (nome, usuario, senha) VALUES ($1, $2, $3)";
const loginSql = "SELECT * FROM usuario WHERE usuario = $1 AND senha = $2";

function criarUsuario(user) {
    return new Promise((resolve, reject) => {
        client.query(criacaoSql, [user.nome, user.usuario, user.senha], (err, result) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(result.rowCount);
            client.end();
        });
    });
}

function logarUsuario(user) {
    return new Promise((resolve, reject) => {
        client.query(loginSql, [user.usuario, user.senha], (err, result) => {
            if (err) {
                reject(err);
                return;
            }

            if (result.rowCount > 0) {
                usuarioLogado = result.rows[0];  // Salva as informações do usuário logado
                console.log("Usuário logado com sucesso:", usuarioLogado);
                resolve(usuarioLogado); 
            } else {
                reject(new Error("Usuário ou senha inválidos"));
            }
            client.end();  
        });
    });
}

function informacoesUsuario() {
    return new Promise((resolve, reject) => {
        if (usuarioLogado) {
            resolve(usuarioLogado);  // Retorna as informações do usuário logado sem precisar logar novamente
        } else {
            reject(new Error("Nenhum usuário logado"));
        }
    });
}

export { criarUsuario, logarUsuario, informacoesUsuario };