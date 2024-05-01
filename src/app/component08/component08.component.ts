import { Component } from '@angular/core';

@Component({
  selector: 'app-component08',
  standalone: true,
  imports: [],
  templateUrl: './component08.component.html',
  styleUrl: './component08.component.css'
})
export class Component08Component {

  // Variavel de média 
  media:number = 7;

  //Vetor
  nomes:string[] = ['Felipe','Nara','Clara','Maya'];

  // Linguagem
  linguagem:string = "JAVA";
}
