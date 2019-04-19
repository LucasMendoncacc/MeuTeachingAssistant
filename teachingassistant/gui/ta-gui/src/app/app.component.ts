import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private alunoService: AlunoService) {}

   aluno: Aluno = new Aluno();
   alunos: Aluno[] = [];
   cpfLoginduplicado: boolean = false;

   criarAluno(a: Aluno): void {
     if (this.alunoService.criar(a)) {
       this.alunos.push(a);
       this.aluno = new Aluno();
     } else {
       this.cpfLoginduplicado = true;
     }
   }

   removerAluno(a: Aluno):void{
      if(this.alunoService.remover(a)){
        this.alunos = this.alunos.filter(b=>b.cpf != a.cpf);
        this.aluno = new Aluno();
      }                                     
   }
   onMove(): void {
      this.cpfLoginduplicado = false;
   }

}
