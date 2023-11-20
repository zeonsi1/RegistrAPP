import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DjangoService {
  apiURL = 'https://cxltlxxp-8000.brs.devtunnels.ms/api';
  constructor(private http: HttpClient) {}

  postData(data: any):Observable<any>{
    return this.http.post(this.apiURL+'/users/', data);
  }

  putPass(data: any):Observable<any>{
    return this.http.put(this.apiURL+'/users/', data);
  }

}
