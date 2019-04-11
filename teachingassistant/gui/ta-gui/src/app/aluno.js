"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aluno {
    constructor() {
        this.clean();
    }
    clean() {
        this.nome = "";
        this.cpf = "";
        this.email = "";
        this.metas = new Map();
    }
    clone() {
        var aluno = new Aluno();
        aluno.nome = this.nome;
        aluno.cpf = this.cpf;
        aluno.email = this.email;
        aluno.metas = this.cloneMetas();
        return aluno;
    }
    cloneMetas() {
        var metas = new Map();
        for (let key in this.metas) {
            metas[key] = this.metas[key];
        }
        return metas;
    }
}
exports.Aluno = Aluno;
//# sourceMappingURL=aluno.js.map