import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaContatosComponent} from "../lista-contatos/lista-contatos.component";
import {DetalhesContatoComponent} from "../detalhes-contato/detalhes-contato.component";
import {AdicionarContatoComponent} from "../adicionar-contato/adicionar-contato.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    ListaContatosComponent,
    DetalhesContatoComponent,
    AdicionarContatoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class ContatosModule { }