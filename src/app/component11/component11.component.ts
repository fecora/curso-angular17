import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './component11.component.html',
  styleUrl: './component11.component.css'
})
export class Component11Component {

  //Objeto Formulario
  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  // Visibilidade dos botões
  btnCadastrar:boolean = true;

  //Vetor
  vetor:Pessoa[] = [];

  //Armazenar Indice da Pessoa selecionada
  indice:number = -1;

  //Função de Cadastro
  cadastrar(){

    //Cadastro no Vetor
    this.vetor.push(this.formulario.value as Pessoa);

    //Limpeza dos inputs
    this.formulario.reset();

    //Visualização via console
    console.table(this.vetor);
  }

  //Função de seleção
  selecionar(indice:number){

    //Atribuir o indice da Pessoa
    this.indice = indice;

    //Atribuir os dadosd da pessoa no formulário
    this.formulario.setValue({
      nome:this.vetor[indice].nome,
      idade:this.vetor[indice].idade,
      cidade:this.vetor[indice].cidade
    });

    //Visibilidade dos botões
    this.btnCadastrar = false;
  }

  //Função de Alteração
  alterar(){

    //Altrerar Vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    //Limpar os inputs
    this.formulario.reset();

    //Visibilidade dos botoões
    this.btnCadastrar = true;
  }

  //Função de Remoção
  remover(){
    //Removendo Pessoa do vetor
    this.vetor.splice(this.indice, 1);

    //Limpeza dos inputs
    this.formulario.reset();

    //Visibilidade dos botoões
    this.btnCadastrar = true;
  }

  //Função de Cancelamento
  cancelar(){
    //Limpeza dos inputs
    this.formulario.reset();

    //Visibilidade dos botoões
    this.btnCadastrar = true;
  }

}
