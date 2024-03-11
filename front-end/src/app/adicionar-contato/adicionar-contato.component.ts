import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AgendaService} from "../services/agenda.service";
import {CepService} from "../services/cep.service";
import {NotificationService} from "../services/notification.service";

/**
 * Componente para adicionar um novo contato à agenda.
 */
@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.component.html',
  styleUrls: ['./adicionar-contato.component.scss'],
})
export class AdicionarContatoComponent implements OnInit {
  novoContato: any = {};
  cep: string = '';
  endereco: any;
  notifications$: any;

  /**
   * Construtor da classe AdicionarContatoComponent.
   * @param agendaService
   * @param router
   * @param cepService
   * @param notificationService
   */
  constructor(private agendaService: AgendaService,
              private router: Router,
              private cepService: CepService,
              public notificationService: NotificationService) {
    this.notifications$ = notificationService.notifications$;
  }

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
          console.log('Contato salvo com sucesso!');
          this.notificationService.showNotification('Contato salvo com sucesso!', 'success');
        }
      },
      (error) => {
        console.error('Erro ao adicionar contato:', error);
        this.notificationService.showNotification('Erro: ' + error.message, 'error');

      }
    );
  }
  buscarCep(event: any) {
    event.preventDefault();
    this.cepService.buscarCep(this.novoContato['cep'])
      .subscribe(
        (data: Object) => {
          this.endereco = data;
          this.populateAddressFields();
        },
        (error) => {
          console.error('Erro ao buscar CEP:', error);
        }
      );
  }

  populateAddressFields(): void {
    this.novoContato.logradouro = this.endereco.logradouro;
    this.novoContato.bairro = this.endereco.bairro;
    this.novoContato.localidade = this.endereco.localidade;
    this.novoContato.uf = this.endereco.uf;
  }

}
