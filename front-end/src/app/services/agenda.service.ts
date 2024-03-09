import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {PaginaContatos} from "../lista-contatos/pagina-contatos";
import {catchError} from "rxjs/operators";

/**
 * Serviço para interação com a agenda de contatos.
 */
@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  /**
   * URL da API da agenda.
   */
  private apiUrl = 'http://localhost:8080/agenda';

  /**
   * Construtor do serviço AgendaService.
   * @param http Serviço HttpClient para fazer requisições HTTP.
   */
  constructor(private http: HttpClient) { }

  /**
   * Obtém uma página de contatos com base no número da página e tamanho da página.
   * @param page Número da página desejada.
   * @param size Tamanho da página desejada.
   * @returns Observable contendo a página de contatos.
   */

  getContacts(page: number, size: number): Observable<PaginaContatos> {
    const url = `${this.apiUrl}?page=${page - 1}&size=${size}`;
    return this.http.get<PaginaContatos>(url).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  /**
   * Cria um novo contato na agenda.
   * @param novoContato Novo contato a ser adicionado.
   * @returns Observable contendo o resultado da operação.
   */
  createContact(novoContato: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, novoContato).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  /**
   * Obtém um contato da agenda pelo ID.
   * @param id ID do contato a ser recuperado.
   * @returns Observable contendo os detalhes do contato.
   */
  getContactById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  /**
   * Atualiza as informações de um contato na agenda.
   * @param id ID do contato a ser atualizado.
   * @param contato Objeto contendo as informações atualizadas do contato.
   * @returns Observable contendo o resultado da operação.
   */
  updateContact(id: string, contato: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, contato).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  /**
   * Exclui um contato da agenda pelo ID.
   * @param id ID do contato a ser excluído.
   * @returns Observable contendo o resultado da operação.
   */
  deleteContact(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' })
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  /**
   * Obtém uma página de contatos com base no número da página e tamanho da página.
   * @param numeroPagina Número da página desejada.
   * @param tamanhoPagina Tamanho da página desejada.
   * @returns Observable contendo a página de contatos.
   */
  getContactsByPage(numeroPagina: number, tamanhoPagina: number): Observable<PaginaContatos> {
    const url = `${this.apiUrl}?page=${numeroPagina}&size=${tamanhoPagina}`;
    return this.http.get<PaginaContatos>(url).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  /**
   * Busca contatos na agenda pelo nome.
   * @param nome Nome do contato a ser buscado.
   * @returns Observable contendo a lista de contatos encontrados.
   */
  searchContactsByName(nome: string): Observable<any> {
    const url = `${this.apiUrl}/search?nome=${nome}`;
    return this.http.get(url);
  }

  /**
   * Método privado para lidar com erros de requisição HTTP.
   * @param error Objeto representando o erro.
   * @returns Observable contendo o erro.
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Erro Desconhecido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = error.error || `Code: ${error.status}, Message: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
