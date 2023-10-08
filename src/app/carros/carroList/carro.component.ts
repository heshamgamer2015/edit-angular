import { Component, ViewChild, inject } from '@angular/core';
import { Carro } from '../carro';
import { CarroService } from '../carro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss']
})
export class CarroComponent {
  carros: Carro[] = [];
  novoCarro: Carro = new Carro();

  @ViewChild('abcEditar') abcEditar: any;

  constructor(private carroService: CarroService) {}

  adicionarCarro() {
    this.carroService.adicionarCarro(this.novoCarro);
    this.novoCarro = new Carro();
  }

  ngOnInit() {
    this.carros = this.carroService.listarCarros();
  }

  modalService = inject(NgbModal);

  abrirModal(abc: any){
    this.modalService.open(abc, { size: 'lg' });
  }

  addNaLista(carro: Carro){
    this.carros.push(carro);
    this.modalService.dismissAll();
  }


  carroParaEditar: Carro = new Carro();

  abrirModalEditar(carro: Carro) {
    this.carroParaEditar = { ...carro };
    this.modalService.open(this.abcEditar, { size: 'lg' });
  }

  salvarEdicao() {
    
  let index = this.carros.findIndex(carro => carro.nome === this.carroParaEditar.nome);

  index = index +1;

  if (index !== -1) {
    this.carros[index].nome = this.carroParaEditar.nome;
    this.carros[index].ano = this.carroParaEditar.ano;
  }
  this.modalService.dismissAll();
  }
}
