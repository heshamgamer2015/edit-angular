import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  private pessoas: Pessoa[] = [];

  listarPessoas() {
    return this.pessoas;
  }

  adicionarPessoa(pessoa: Pessoa) {
    this.pessoas.push(pessoa);
  }
}