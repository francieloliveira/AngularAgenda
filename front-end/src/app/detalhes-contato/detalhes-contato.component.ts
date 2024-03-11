import {Component, OnInit} from '@angular/core';
import {AgendaService} from "../services/agenda.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CepService} from "../services/cep.service";
import {NotificationService} from "../services/notification.service";

/**
 * Componente para exibir detalhes, atualizar e excluir um contato da agenda.
 */
@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {
  contato: any = [];
  endereco: any;
  notifications$: any;

  /**
   * Construtor da classe DetalhesContatoComponent.
   * @param route Serviço para obter informações da rota ativa.
   * @param agendaService Serviço para interação com a agenda.
   * @param router Serviço para navegação.
   * @param cepService Servico para buscar CEP por API externa
   * @param notificationService Servico de Notificações e Alertas.
   */
  constructor(private route: ActivatedRoute,
              private agendaService: AgendaService,
              private router: Router,
              private cepService: CepService,
              public notificationService: NotificationService) {
    this.notifications$ = notificationService.notifications$;
  }

  /**
   * Método chamado quando o componente é inicializado. Carrega os detalhes do contato.
   */
  ngOnInit(): void {
    this.carregarDetalhesContato();
  }

  /**
   * Carrega os detalhes do contato com base no ID fornecido na rota.
   */
  carregarDetalhesContato(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID: ', id);
    if (id) {
      this.agendaService.getContactById(id).subscribe((contato: Object) => {
        this.contato = contato;
      });
    }
  }

  /**
   * Atualiza as informações do contato na agenda.
   */
  atualizarContato(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && this.contato) {
      this.agendaService.updateContact(id, this.contato).subscribe(
        (response) => {
          if (!response.id.isNaN)
            console.log('Contato atualizado com sucesso!');
            this.notificationService.showNotification('Contato atualizado com sucesso!', 'success');
        },
        (error) => {
          console.error('Erro:', error);
          this.notificationService.showNotification('Erro: ' + error, 'error');
        }
      );
    }
  }

  /**
   * Exclui o contato da agenda.
   */
  excluirContato(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.agendaService.deleteContact(id).subscribe((response) => {
          if (id !== null) {
            console.log('Contato excluido com sucesso!');
            this.notificationService.showNotification('Contato excluido com sucesso!', 'success');
            this.router.navigate(['/lista-contatos']);
          }
        },
        (error) => {
          console.error('Erro:', error);
          this.notificationService.showNotification('Erro: ' + error, 'error');
        }
      );
    }
  }

  buscarCep(event: any) {
    event.preventDefault();
    this.cepService.buscarCep(this.contato['cep'])
      .subscribe(
        (data: Object) => {
          this.endereco = data;
          this.populateAddressFields();
        },
        (error) => {
          console.error('Erro ao buscar CEP:', error);
          this.notificationService.showNotification('Erro:' + error, 'error');
        }
      );
  }

  populateAddressFields(): void {
    this.contato.logradouro = this.endereco.logradouro;
    this.contato.bairro = this.endereco.bairro;
    this.contato.localidade = this.endereco.localidade;
    this.contato.uf = this.endereco.uf;
  }

}
