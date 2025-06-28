import { Component } from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterface';

@Component({
  selector: 'app-aluno',
  standalone: false,
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {

  aluno: AlunoInterface = {
    nome: 'Alessandra',
    matricula: 7798,
    email:'peglowalessandra@gmail.com',
    cadastro: false,
    cursos: []
  }
}
