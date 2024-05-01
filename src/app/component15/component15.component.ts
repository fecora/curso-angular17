import { Component } from '@angular/core';
import { Component15FormularioComponent } from "../component15-formulario/component15-formulario.component";
import { Component15TabelaComponent } from "../component15-tabela/component15-tabela.component";

@Component({
    selector: 'app-component15',
    standalone: true,
    templateUrl: './component15.component.html',
    styleUrl: './component15.component.css',
    imports: [Component15FormularioComponent, Component15TabelaComponent]
})
export class Component15Component {

  //Vetor
  nomes:string[] = ['Felipe','Nara','Clara','Maya'];

  //Função para cadastrar nomes
  cadastrar(nome:string){
    this.nomes.push(nome);
  }

  

}
