import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import {PaginaContatos} from "./pagina-contatos";
import {NotificationService} from "../services/notification.service";

/**
 * Componente para exibir a lista de contatos, carregar contatos por página e buscar contatos por nome.
 */
@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.scss']
})
export class ListaContatosComponent implements OnInit {
  contatos: any = [];
  termoBusca: string = '';

  /**
   * Construtor da classe ListaContatosComponent.
   * @param agendaService Serviço para interação com a agenda.
   * @param notificationService
   */
  constructor(private agendaService: AgendaService,
              public notificationService: NotificationService) { }

  /**
   * Método chamado quando o componente é inicializado.
   */
  ngOnInit(): void {
    this.carregarContatos(10);
  }

  /**
   * Carrega todos os contatos.
   */
  carregarContatos(tamanhoPagina : number): void {
    this.agendaService.getContacts(1, tamanhoPagina).subscribe(
      (contatos: Object) => {
        this.contatos = contatos;
        console.log('Contatos listados com sucesso!');
      },
      (error) => {
        console.error('Erro ao listar contatos:', error);
        this.notificationService.showNotification('Erro: ' + error.message, 'error');
      }
    );
  }

  /**
   * Carrega contatos com base no número da página.
   * @param numeroPagina Número da página a ser carregada.
   */
  carregarContatosPorPagina(numeroPagina: number): void {
    this.agendaService.getContactsByPage(numeroPagina, 10).subscribe(
      (paginaContatos: PaginaContatos) => {
        this.contatos = paginaContatos;
        console.log('Contatos listados (por pag.) com sucesso!');
      },
      (error: any) => {
        console.error('Erro ao listar contatos (por pag.):', error);
        this.notificationService.showNotification('Erro: ' + error.message, 'error');
      }
    );
  }

  /**
   * Busca contatos por nome.
   */
  buscarContatosPorNome(): void {
    this.agendaService.searchContactsByName(this.termoBusca).subscribe(
      (contatos: Object) => {
        this.contatos = contatos;
        console.log('Busca realizada com sucesso!');
      },
      (error) => {
        console.error('Erro ao buscar contatos por nome:', error);
        this.notificationService.showNotification('Erro: ' + error.message, 'error');
      }
    );
  }

}
