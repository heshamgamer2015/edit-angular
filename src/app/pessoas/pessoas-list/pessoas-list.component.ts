import { Component ,OnInit, ViewChild, inject} from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss']
})
export class PessoasListComponent implements OnInit{
  pessoas: Pessoa[] = [];
  novoPessoa: Pessoa = new Pessoa();

  @ViewChild('abcEditar') abcEditar: any;

  constructor(private pessosaService: PessoaService ) {}

  adicionarPessoa() {
    this.pessosaService.adicionarPessoa(this.novoPessoa);
    this.novoPessoa = new Pessoa();
  }

  ngOnInit() {
    this.pessoas = this.pessosaService.listarPessoas();
  }
  modalService = inject(NgbModal);

  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });
  }

  addNaLista(pessoa: Pessoa){
    this.pessoas.push(pessoa);
    this.modalService.dismissAll();
  }
  
  pessoaParaEditar: Pessoa = new Pessoa(); 
  
  abrirModalEditar(Pessoa: Pessoa) {
    this.pessoaParaEditar = { ...Pessoa };
    this.modalService.open(this.abcEditar, { size: 'lg' });
  }

  salvarEdicao() {
    
    let index = this.pessoas.findIndex(pessoa => pessoa.nome === this.pessoaParaEditar.nome);
  
    index = index +1;
  
    if (index !== -1) {
      this.pessoas[index].nome = this.pessoaParaEditar.nome;
      this.pessoas[index].idade = this.pessoaParaEditar.idade;
    }
    this.modalService.dismissAll();
    }
}
