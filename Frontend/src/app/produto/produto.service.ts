import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable()
export class ProdutoService{

    constructor(private http: HttpClient){}

    salvar(produto: any): Observable<any> {
        return this.http.post(`${environment.apiUrl}/produto`, produto);
    }  

    listar(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/produto`);
    }  

    deletar(id): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/produto/${id}`);
    }  

}