import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CepService {
  private apiUrl = 'https://viacep.com.br/ws';
  constructor(private http: HttpClient) {}

  buscarCep(cep: string){
    const url = `${this.apiUrl}/${cep}/json`;
    return this.http.get(url);
  }
}
