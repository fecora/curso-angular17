import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component15-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component15-formulario.component.html',
  styleUrl: './component15-formulario.component.css'
})
export class Component15FormularioComponent {

  //Variável para armazenar o nome informado
  nome:string = '';

  //Output
  @Output() funcao = new EventEmitter<string>();

  //Função de cadastro do componente de formulário
  cadastrarNome(){
    this.funcao.emit(this.nome);
  }

}
