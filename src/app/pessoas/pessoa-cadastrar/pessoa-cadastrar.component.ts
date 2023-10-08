import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.component.html',
  styleUrls: ['./pessoa-cadastrar.component.scss']
})
export class PessoaCadastrarComponent {
  roteador = inject(ActivatedRoute);
  pessoa: Pessoa = new Pessoa();

  @Output() retorno = new EventEmitter<Pessoa>();


  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }


  salvar(){
    this.retorno.emit(this.pessoa);
  }
}
