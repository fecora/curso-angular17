import { Component } from '@angular/core';

@Component({
  selector: 'app-component17',
  standalone: true,
  imports: [],
  templateUrl: './component17.component.html',
  styleUrl: './component17.component.css'
})
export class Component17Component {

  //Variável Nome
  nome:string = 'Felipe';

  //Variável Média
  media:number = 0;

  //Função para calcular a média
  calculo(n1:number, n2:number){
    return(n1+n2)/2;
  }
}
