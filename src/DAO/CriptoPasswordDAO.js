import { informacoesUsuario } from "./UserDAO.js";
import { client } from "../connection/database.js";

const senhastotalSql = "SELECT * FROM clientpass WHERE id_client = $1"

async function exibirInformacoesUsuario() {
    try {
        const usuario = await informacoesUsuario();
        console.log("Informações do usuário:", usuario);
     } catch (err) {
        console.error("Erro ao exibir informações do usuário:", err.message);
    }
}

async function senhasCadastradas(user) {
    console.log('Iniciando consulta...');
    try {
        const result = await client.query(senhastotalSql, [user.id]);
        console.log('Consulta finalizada.');
        return result.rowCount;
    } catch (err) {
        console.error("Erro ao consultar senhas cadastradas:", err.message);
        throw err;
    } finally {
        client.end();
    }
}

export {exibirInformacoesUsuario, senhasCadastradas}