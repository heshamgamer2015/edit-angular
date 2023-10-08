import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './principal/index/index.component';
import { PessoasListComponent } from './pessoas/pessoas-list/pessoas-list.component';
import { CarroComponent } from './carros/carroList/carro.component';
import { LivroComponent } from './livros/livroList/livro.component';

const routes: Routes = [
  {path:"", component: IndexComponent,children:[
    {path:"admin/pessoas/list",component:PessoasListComponent},
    {path:"admin/carros/list",component:CarroComponent},
    {path:"admin/livros/list",component:LivroComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
