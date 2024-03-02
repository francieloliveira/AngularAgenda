import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AgendaService} from "../services/agenda.service";

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.component.html',
  styleUrls: ['./adicionar-contato.component.scss']
})
export class AdicionarContatoComponent implements OnInit {
  novoContato: any = {};
  mensagemAlerta: string | null = null;

  constructor(private agendaService: AgendaService,
              private router: Router) { }

  ngOnInit(): void {
  }

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
