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

 adicionarTarefa(task): Observable<any> {
    return this.http.post(this.baseurl + '/tasks', task.tarefa, {headers: this.httpHeaders} );
  }

  editarTarefa(task): Observable<any> {
    return this.http.put(this.baseurl + '/tasks/' + task.id + '/', task.tarefa,
    {headers: this.httpHeaders});
  }

  deletarTarefa(id): Observable<any> {
      return this.http.delete(this.baseurl + '/tasks/' + id + '/',
      {headers: this.httpHeaders});
    }
  }
