import { Injectable } from '@angular/core';
import { Carro } from './carro';

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  private carros: Carro[] = [];

  listarCarros() {
    return this.carros;
  }

  adicionarCarro(carro: Carro) {
    this.carros.push(carro);
  }
}