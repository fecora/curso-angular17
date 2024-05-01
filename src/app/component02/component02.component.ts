import { Component } from '@angular/core';

@Component({
  selector: 'app-component02',
  standalone: true,
  imports: [],
  templateUrl: './component02.component.html',
  styleUrl: './component02.component.css'
})
export class Component02Component {
    
  //Função para exibir uma msg
  mensagem(){
    alert('Hello World !!!');
  }
}
