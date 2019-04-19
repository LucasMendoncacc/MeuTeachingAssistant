import { Aluno } from '../../gui/ta-gui/src/app/aluno';

export class CadastroDeAlunos {
  alunos: Aluno[] = [];

  criar(aluno: Aluno): Aluno {
    var result = null;
    if (this.cpfLoginNaoCadastrado(aluno.cpf, aluno.login)) {
      result = new Aluno();
      result.copyFrom(aluno);
      this.alunos.push(result);
    }
    return result;
  }

  remover(aluno:Aluno): boolean {
      this.alunos = this.alunos.filter(a => a.cpf != aluno.cpf);
      return true;
  }

  cpfLoginNaoCadastrado(cpf: string, login: string): boolean {
    if(this.alunos.find(a => a.cpf == cpf) || this.alunos.find(b => b.login == login)){
      return false;
    }else{
      return true;
    }
  }

  atualizar(aluno: Aluno): Aluno {
    var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
    if (result) result.copyFrom(aluno);
    return result;
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }
}
