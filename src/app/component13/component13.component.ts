import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './component13.component.html',
  styleUrl: './component13.component.css'
})
export class Component13Component {

  //Vetor 
  vetor:Produto[] = [];

  //Visibbildade dos botões
  btnCadastrar:boolean = true;

  //Objeto de Formulário
  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  });

  //Construtor
  constructor(private servico:ProdutoService){}

  // Inicilialização do Componente
  ngOnInit(){
    this.selecionar();
  }

  //Método para selecionar todos os produtos
  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
  }

  //M´´etodo para cadastrar produtos
  cadastrar(){
    this.servico.cadastrar(this.formulario.value as Produto).subscribe(retorno => {

      this.vetor.push(retorno);

      this.formulario.reset();
    });
  }

  //Métodod para Selecionar um produto expecifico
  selecionarProduto(indice:number){

    this.formulario.setValue({
      id : this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor:this.vetor[indice].valor
    });

    this.btnCadastrar = false;
  }

  //Métrodo de Alterar Produtos
  alterar(){
    this.servico.alterar(this.formulario.value as Produto).subscribe(retorno => {
      
      // Obter o índice do objeto alterado
      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id === obj.id;
      });

      //Alterar o vetor
      this.vetor[indiceAlterado] = retorno;

      //Limpar o Formulário 
      this.formulario.reset();

      //Visibilidade dos botões
      this.btnCadastrar = true;

    });
  }

  //Método para remover produtos
  remover(){

    this.servico.remover(this.formulario.value.id).subscribe(() => {

      //Obter o indice do vetor que será removido
      let indiceRemovido = this.vetor.findIndex(obj => {

        return obj.id === this.formulario.value.id;
      });

      //Removendo objeto do vetor
      this.vetor.splice(indiceRemovido, 1);

      //Limpar Formulário
      this.formulario.reset();

      //Visibilidade dos botões
      this.btnCadastrar = true;
    });
  }

}
