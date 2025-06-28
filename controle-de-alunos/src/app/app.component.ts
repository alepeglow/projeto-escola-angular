import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'controle-de-alunos';

  listaAlunos: AlunoInterface [] = [
    {
      matricula: 111,
      nome: 'Harry Potter',
      email: 'harry@proway.com',
      cadastro: false,
      cursos: ['Javascript', 'HTML', 'CSS']
    },
    {
      matricula: 222,
      nome: 'Hermione Granger',
      email: 'hermione@proway.com',
      cadastro: true,
      cursos: ['Java', 'Postgres']
    }
  ];
}
