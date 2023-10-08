import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './principal/header/header.component';
import { FooterComponent } from './principal/footer/footer.component';
import { IndexComponent } from './principal/index/index.component';
import { PessoasListComponent } from './pessoas/pessoas-list/pessoas-list.component';
import { CarroComponent } from './carros/carroList/carro.component';
import { LivroComponent } from './livros/livroList/livro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PessoaCadastrarComponent } from './pessoas/pessoa-cadastrar/pessoa-cadastrar.component';
import { CarroCadastrarComponent } from './carros/carro-cadastrar/carro-cadastrar.component';
import { LivroCadastrarComponent } from './livros/livro-cadastrar/livro-cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    PessoasListComponent,
    CarroComponent,
    LivroComponent,
    PessoaCadastrarComponent,
    CarroCadastrarComponent,
    LivroCadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
