import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AgendaService} from "../services/agenda.service";

/**
 * Componente para adicionar um novo contato à agenda.
 */
@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.component.html',
  styleUrls: ['./adicionar-contato.component.scss']
})
export class AdicionarContatoComponent implements OnInit {
  novoContato: any = {};
  mensagemAlerta: string | null = null;


  /**
   * Construtor da classe AdicionarContatoComponent.
   * @param agendaService
   * @param router
   */
  constructor(private agendaService: AgendaService,
              private router: Router) { }

  /**
   * Método chamado quando o componente é inicializado.
   */
  ngOnInit(): void {
  }

  /**
   * Adiciona um novo contato à agenda.
   */
  adicionarContato(): void {
    this.agendaService.createContact(this.novoContato).subscribe(
      (response) => {
        if (response.id !== null) {
          this.mensagemAlerta = "Contato Salvo com sucesso!";
        }
      },
      (error) => {
        console.error('Erro ao adicionar contato:', error);
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
