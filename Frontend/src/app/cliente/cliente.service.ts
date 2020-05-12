import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable()
export class ClienteService{

    constructor(private http: HttpClient){}

    salvar(cliente: any): Observable<any> {
        return this.http.post(`${environment.apiUrl}/cliente`, cliente);
    }  

    listar(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/cliente`);
    }  

    deletar(id): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/cliente/${id}`);
    }  

}