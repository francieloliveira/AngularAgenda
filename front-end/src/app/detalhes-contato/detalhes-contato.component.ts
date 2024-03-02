import { Component, OnInit } from '@angular/core';
import {AgendaService} from "../services/agenda.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {
  contato: any = [];
  mensagemAlerta: string | null = null;

  constructor(private route: ActivatedRoute, private agendaService: AgendaService, private router: Router) { }

  ngOnInit(): void {
    this.carregarDetalhesContato();
  }

  carregarDetalhesContato(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID: ',id);
    if (id) {
      this.agendaService.getContactById(id).subscribe((contato: Object) => {
        this.contato = contato;
      });
    }
  }

  atualizarContato(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && this.contato) {
      this.agendaService.updateContact(id, this.contato).subscribe(
        (response) => {
          if (!response.id.isNaN)
            this.mensagemAlerta = 'Contato atualizado com sucesso!'; // Define a variável de mensagem
          console.log('Contato atualizado com sucesso!');
        },
        (error) => {
          this.mensagemAlerta = error.message; // Define a variável de mensagem
          console.error('Erro ao salvar contato:', error);
        }
      );
    }
  }

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
