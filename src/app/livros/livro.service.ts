import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private livros: Livro[] = [];

  listarLivros() {
    return this.livros;
  }

  adicionarLivro(livro: Livro) {
    this.livros.push(livro);
  }
}
