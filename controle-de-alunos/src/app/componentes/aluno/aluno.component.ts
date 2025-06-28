import { Component,Input } from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterface';

@Component({
  selector: 'app-aluno',
  standalone: false,
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {

  @Input()
  aluno!: AlunoInterface;
  

}
