import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControleCaixaService {
  constructor(private http: HttpClient) {}

  getItens(): Observable<any> {
    return this.http.get('http://localhost:3333/estabelecimento');
  }
}
