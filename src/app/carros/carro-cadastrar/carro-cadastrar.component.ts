import { Component, EventEmitter, NgModule, Output} from '@angular/core';
import { Carro } from '../carro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carro-cadastrar',
  templateUrl: './carro-cadastrar.component.html',
  styleUrls: ['./carro-cadastrar.component.scss']
})
export class CarroCadastrarComponent {
  @NgModule({
    imports: [FormsModule],
    // ...
  })
  novoCarro: Carro = new Carro();

  @Output() retorno = new EventEmitter<Carro>();

  salvar() {
    // Verifique se os campos foram preenchidos corretamente antes de emitir o evento
    if (this.novoCarro.nome && this.novoCarro.ano) {
      this.retorno.emit(this.novoCarro);
      this.novoCarro = new Carro(); // Limpe o objeto novoCarro após o cadastro
    }
  }
}
