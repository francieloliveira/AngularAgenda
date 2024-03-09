import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../services/agenda.service';
import {PaginaContatos} from "./pagina-contatos";

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
  mensagemAlerta: string | null = null;
  termoBusca: string = '';

  /**
   * Construtor da classe ListaContatosComponent.
   * @param agendaService Serviço para interação com a agenda.
   */
  constructor(private agendaService: AgendaService) { }

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
      },
      (error) => {
        console.error('Erro ao adicionar contato:', error);
        this.mensagemAlerta = error.toString();
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
      },
      (error: any) => {
        console.error(error);
        this.mensagemAlerta = error.toString();
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
      },
      (error) => {
        console.error('Erro ao buscar contatos por nome:', error);
        this.mensagemAlerta = error.toString();
      }
    );
  }

  /**
   * Obtém o tipo de alerta com base na mensagem de alerta.
   * @returns Tipo de alerta: 'success' para sucesso, 'danger' para erro.
   */
  getTipoAlerta(): string {
    if (this.mensagemAlerta && this.mensagemAlerta.includes('sucesso')) {
      this.hideAlertAfterTimeout();
      return 'success';
    } else {
      this.hideAlertAfterTimeout();
      return 'danger';
    }
  }

  /**
   * Oculta a mensagem de alerta após um período de tempo. (10000 milissegundos = 10 segundos)
   */
  hideAlertAfterTimeout(): void {
    setTimeout(() => {
      this.mensagemAlerta = null;
    }, 10000);
  }

}
