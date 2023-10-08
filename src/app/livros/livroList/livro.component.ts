import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit{
  livros: Livro[] = [];
  novoLivro: Livro = new Livro();

  @ViewChild('abcEditar') abcEditar: any;

  constructor(private livroService: LivroService) {}

  adicionarLivro() {
    this.livroService.adicionarLivro(this.novoLivro);
    this.novoLivro = new Livro();
  }

  ngOnInit() {
    this.livros = this.livroService.listarLivros();
  }
  modalService = inject(NgbModal);

  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });
  }

  addNaLista(livro: Livro){
    this.livros.push(livro);
    this.modalService.dismissAll();
  }



  livroParaEditar: Livro = new Livro(); 
  
  abrirModalEditar(livro: Livro) {
    this.livroParaEditar = { ...livro };
    this.modalService.open(this.abcEditar, { size: 'lg' });
  }

  salvarEdicao() {
    
    let index = this.livros.findIndex(Livro => Livro.titulo === this.livroParaEditar.titulo);
  
    index = index +1;
  
    if (index !== -1) {
      this.livros[index].titulo = this.livroParaEditar.titulo;
      this.livros[index].autor = this.livroParaEditar.autor;
    }
    this.modalService.dismissAll();
    }
}
