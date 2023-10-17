import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DjangoService {
  apiURL = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }
  
  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL+'/lista_usuarios')
    .pipe(retry(3));
  }
}
