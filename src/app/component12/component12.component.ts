import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
    selector: 'app-component12',
    standalone: true,
    templateUrl: './component12.component.html',
    styleUrl: './component12.component.css',
    imports: [CommonModule, MediaPipe]
})
export class Component12Component {
  
  //Texto
  nome:string = 'Felipe';

  //Objeto
  obj:any = {'nome':'Felipe', 'idade':37}

  // Vetor de objetos
 alunos:any = [
  {'nome':'Ana',     'nota1':8, 'nota2':9},
  {'nome':'Julio',   'nota1':7, 'nota2':8},
  {'nome':'Letícia', 'nota1':3, 'nota2':2},
  {'nome':'Enzo', 'nota1':7, 'nota2':7}
];
}
