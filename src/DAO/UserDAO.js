function criarUsuario(user) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO usuario (nome, usuario, senha) VALUES (?, ?, ?)';
        
        connection.query(sql, [user.nome, user.usuario, user.senha], (err, results) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(results.affectedRows); // Retorna o número de linhas afetadas
        });
    });
}