import { Component, OnInit } from '@angular/core';
import {AgendaService} from "../services/agenda.service";
import {ActivatedRoute, Router} from "@angular/router";

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
  mensagemAlerta: string | null = null;

  /**
   * Construtor da classe DetalhesContatoComponent.
   * @param route Serviço para obter informações da rota ativa.
   * @param agendaService Serviço para interação com a agenda.
   * @param router Serviço para navegação.
   */
  constructor(private route: ActivatedRoute, private agendaService: AgendaService, private router: Router) { }

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
    console.log('ID: ',id);
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
            this.mensagemAlerta = 'Contato atualizado com sucesso!';
          console.log('Contato atualizado com sucesso!');
        },
        (error) => {
          this.mensagemAlerta = error.message;
          console.error('Erro ao salvar contato:', error);
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
          if(id !== null){
            this.mensagemAlerta = response
            console.log('Contato excluído');
            // this.resetContactFields();
            this.router.navigate(['/lista-contatos']);
          }
        },
        (error) => {
          console.error('Erro ao excluir contato:', error);
          this.mensagemAlerta = error.toString();
        }
      );
    }
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

  /**
   * Reseta os campos do contato para os valores padrão.
   */
  resetContactFields(): void {
    this.contato = {
      nome: '',
      email: '',
      telefone: '',
      dataNascimento: '',
      cpf: '',
      cnpj: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: ''
    };
  }


}
