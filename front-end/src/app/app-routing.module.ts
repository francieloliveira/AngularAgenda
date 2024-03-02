import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaContatosComponent} from "./lista-contatos/lista-contatos.component";
import {DetalhesContatoComponent} from "./detalhes-contato/detalhes-contato.component";
import {AdicionarContatoComponent} from "./adicionar-contato/adicionar-contato.component";


/**
 * Módulo de roteamento para a aplicação.
 *
 * Este módulo define as rotas da aplicação Angular.
 *
 * @example
 * // Importação no módulo principal
 * import { AppRoutingModule } from './app-routing.module';
 *
 * @NgModule({
 *   imports: [AppRoutingModule],
 *   exports: [RouterModule]
 * })
 * export class AppModule { }
 */
const routes: Routes = [
  { path: 'lista-contatos', component: ListaContatosComponent },
  { path: 'detalhes-contato/:id', component: DetalhesContatoComponent },
  { path: 'adicionar-contato', component: AdicionarContatoComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  // { path: '', redirectTo: '/lista-contatos', pathMatch: 'full' },
];

/**
 * @NgModule - Decorador que marca uma classe como um módulo Angular.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
