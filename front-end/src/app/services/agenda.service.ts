import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {PaginaContatos} from "../lista-contatos/pagina-contatos";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private apiUrl = 'http://localhost:8080/agenda';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get(url).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  createContact(novoContato: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, novoContato).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  getContactById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  updateContact(id: string, contato: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, contato).pipe(
      catchError((error) => this.handleError(error))
    );
  }


  deleteContact(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' })
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  getContactsByPage(numeroPagina: number, tamanhoPagina: number): Observable<PaginaContatos> {
    const url = `${this.apiUrl}?page=${numeroPagina}&size=${tamanhoPagina}`;
    return this.http.get<PaginaContatos>(url).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  searchContactsByName(nome: string): Observable<any> {
    const url = `${this.apiUrl}/search?nome=${nome}`;
    return this.http.get(url);
  }

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
