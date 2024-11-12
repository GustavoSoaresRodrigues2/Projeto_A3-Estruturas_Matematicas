class CriptoPassword {
    constructor(id, senha, data_inclusao) {
        this._id = id;
        this._senha = senha;
        this._data_inclusao = data_inclusao;
    }

    // Getter e Setter para 'id'
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    // Getter e Setter para 'senha'
    get senha() {
        return this._senha;
    }

    set senha(value) {
        this._senha = value;
    }

    // Getter e Setter para 'data_inclusao'
    get data_inclusao() {
        return this._data_inclusao;
    }

    set data_inclusao(value) {
        this._data_inclusao = value;
    }
}
