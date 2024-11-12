class User {
    constructor(nome, usuario, senha) {
        this._nome = nome;
        this._usuario = usuario;
        this._senha = senha;
    }

    // Getter e Setter para 'nome'
    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    // Getter e Setter para 'usuario'
    get usuario() {
        return this._usuario;
    }

    set usuario(value) {
        this._usuario = value;
    }

    // Getter e Setter para 'senha'
    get senha() {
        return this._senha;
    }

    set senha(value) {
        this._senha = value;
    }
}
