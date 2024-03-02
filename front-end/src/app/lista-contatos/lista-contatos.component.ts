import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import {PaginaContatos} from "./pagina-contatos";

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.scss']
})
export class ListaContatosComponent implements OnInit {
  contatos: any = [];
  mensagemAlerta: string | null = null;
  termoBusca: string = '';

  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos(): void {
    this.agendaService.getContacts().subscribe(
      (contatos: Object) => {
        this.contatos = contatos;
      },
      (error) => {
        console.error('Erro ao adicionar contato:', error);
        this.mensagemAlerta = error.toString();
      }
    );
  }

  carregarContatosPorPagina(numeroPagina: number): void {
    this.agendaService.getContactsByPage(numeroPagina, 1).subscribe(
      (paginaContatos: PaginaContatos) => {
        this.contatos = paginaContatos;
      },
      (error: any) => {
        console.error(error);
        this.mensagemAlerta = error.toString();
      }
    );
  }

  buscarContatosPorNome(): void {
    this.agendaService.searchContactsByName(this.termoBusca).subscribe(
      (contatos: Object) => {
        this.contatos = contatos;
      },
      (error) => {
        console.error('Erro ao buscar contatos por nome:', error);
        this.mensagemAlerta = error.toString();
      }
    );
  }

  getTipoAlerta(): string {
    if (this.mensagemAlerta && this.mensagemAlerta.includes('sucesso')) {
      this.hideAlertAfterTimeout();
      return 'success';
    } else {
      this.hideAlertAfterTimeout();
      return 'danger';
    }
  }

  hideAlertAfterTimeout(): void {
    setTimeout(() => {
      this.mensagemAlerta = null;
    }, 10000); // 10000 milissegundos = 10 segundos
  }

}
