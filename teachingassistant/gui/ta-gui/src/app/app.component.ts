import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "", login: "", cpf: "", email: ""};
}

export class Aluno {
  nome: string;
  login: string;
  cpf: string;
  email: string;
}
