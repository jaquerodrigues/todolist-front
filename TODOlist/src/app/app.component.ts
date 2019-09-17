import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent   {
  tasks = [{tarefa: 'teste 1', completa: false}];
  selectedTask;

  constructor(private api: ApiService) {
    this.getTasks();
    this.selectedTask = {id: 6, tarefa: '', completa: false}; //se o id voltar para -1 que seria o original não funciona..
    //404 Error aqui?
  }

  adicionarTarefa() {
    this.api.adicionarTarefa(this.selectedTask).subscribe(
        data => {
          this.tasks.push(data);
        }
    );
  }

  editarTarefa() {
    this.api.editarTarefa(this.selectedTask).subscribe(
      data => {
        this.getTasks();
      }
    );
  }

  getTasks() {
    this.api.getAllTasks().subscribe(
      data => {
        this.tasks = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }

  deletarTarefa = () => {
    this.api.deletarTarefa(this.selectedTask.id).subscribe(
      data => {
        this.getTasks();
      },
      error => {
        console.log(error);
      }
    );
  }

  concluirTarefa = () => {
    this.api.deletarTarefa(this.selectedTask.id).subscribe(
      data => {
        this.getTasks();
      },
      error => {
        console.log(error);
      }
    );
  }



}
