import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  baseurl = 'http://127.0.0.1:8000';
 httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

 getAllTasks(): Observable<any> {
  return this.http.get(this.baseurl + '/tasks/',
   {headers: this.httpHeaders});
}

getOneTask(id): Observable<any> {
  return this.http.get(this.baseurl + '/tasks/' + id + '/',
  {headers: this.httpHeaders});
}
// fazer mais uma funçao tipo deletar para tarefa concluida
 adicionarTarefa(id): Observable<any> {
     // return this.http.post(this.baseurl + '/tasks', task.tarefa, {headers: this.httpHeaders} );
    // return this.http.post( 'http://127.0.0.1:8000/admin/api/task/add/',
    // {headers: this.httpHeaders} );
    return this.http.post(this.baseurl + '/tasks/' + id + '/',
    {headers: this.httpHeaders});
  }

  editarTarefa(task): Observable<any> {
    return this.http.put(this.baseurl + '/tasks/' + task.id + '/', task.tarefa, // nem essa
    {headers: this.httpHeaders});
  }

  deletarTarefa(id): Observable<any> {
      return this.http.delete(this.baseurl + '/tasks/' + id + '/',
      {headers: this.httpHeaders});
    }

    concluirTarefa(id): Observable<any> {
      return this.http.delete(this.baseurl + '/tasks/' + id + '/', // é igual ao deletar pq tem que tirar do bd
      {headers: this.httpHeaders});
    }

  }
