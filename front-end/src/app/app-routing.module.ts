import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaContatosComponent} from "./lista-contatos/lista-contatos.component";
import {DetalhesContatoComponent} from "./detalhes-contato/detalhes-contato.component";
import {AdicionarContatoComponent} from "./adicionar-contato/adicionar-contato.component";


const routes: Routes = [
  { path: 'lista-contatos', component: ListaContatosComponent },
  { path: 'detalhes-contato/:id', component: DetalhesContatoComponent },
  { path: 'adicionar-contato', component: AdicionarContatoComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  // { path: '', redirectTo: '/lista-contatos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
