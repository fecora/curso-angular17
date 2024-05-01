import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component07.component.html',
  styleUrl: './component07.component.css'
})
export class Component07Component {

  //Variavel lógica 
  condicao:boolean = true;

  //Lista de Aprovados e reprovados
  lista:string[]=['Aprovado','Aprovado','Reprovado'];
}
