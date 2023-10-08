import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-cadastrar',
  templateUrl: './livro-cadastrar.component.html',
  styleUrls: ['./livro-cadastrar.component.scss']
})
export class LivroCadastrarComponent {
  roteador = inject(ActivatedRoute);
  livro: Livro = new Livro();

  @Output() retorno = new EventEmitter<Livro>();


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }


  salvar(){
    this.retorno.emit(this.livro);
  }
}
