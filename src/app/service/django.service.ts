import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DjangoService {
  apiURL = 'https://django-rest-p9b6.onrender.com/api';
  constructor(private http: HttpClient) {}

  postData(data: any):Observable<any>{
    return this.http.post(this.apiURL+'/users/', data);
  }

  putPass(data: any):Observable<any>{
    return this.http.put(this.apiURL+'/users/', data);
  }

  postAsis(data: any):Observable<any>{
    return this.http.post(this.apiURL+ '/asistencia/',data);
  }

  putAsis(data:any):Observable<any>{
    return this.http.put(this.apiURL+ '/asistencia/', data);
  }

  putAsisA(data:any):Observable<any>{
    return this.http.put(this.apiURL+ '/asistenciaA/', data);
  }

  postAsisA(data:any):Observable<any>{
    return this.http.post(this.apiURL+ '/asistenciaA/', data);
  }
}
