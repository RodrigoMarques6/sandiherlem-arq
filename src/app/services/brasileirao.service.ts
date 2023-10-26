import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrasileiraoService {
  key: string = 'test_b5da7267ff75704abd45e40009611f';
  url = 'https://api.api-futebol.com.br/v1/campeonatos/14/tabela';

  constructor(private httpClient: HttpClient) {}

  getTabela(): Observable<[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.key}`,
    });

    const requestOptions = { headers: headers };

    return this.httpClient.get<any>(this.url, requestOptions);
  }
}
