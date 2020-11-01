import { Component, OnInit } from '@angular/core';
import { Estados } from 'src/models/estados';
import { Task } from 'src/models/task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {

  selected: boolean;
  TaskDetail: Task;
  dataSource = tasks;
  estados = states;
  displayedColumns: string[] = ['No.','nombre', 'actions'];
  displayedColumnsDetail: string[] = ['descripcion', 'estado','tiempo'];
  constructor() { }

  ngOnInit(): void {
    this.selected = false;
  }

  showDetail(id){
    this.selected = true;
    this.TaskDetail = tasks.find(t => t.numero == id);
    console.log(this.TaskDetail);
  }
}


const tasks: Task[] = [
  {numero: 1, nombre: "sistemas", descripcion: "tarea", estado: 1, tiempo: 30},
  {numero: 2, nombre: "app-vanguardia", descripcion: "tarea", estado: 1, tiempo: 40},
  {numero: 3, nombre: "cocinar", descripcion: "chuleta", estado: 1, tiempo: 50},
  {numero: 4, nombre: "lavar", descripcion: "ropa sucia", estado: 1, tiempo: 20},
  {numero: 5, nombre: "dormir", descripcion: "hora: 9pm", estado: 1, tiempo: 120},
]

const states: Estados[] = [
  {id: 1, descripcion: "Pendiente"},
  {id: 2, descripcion: "En proceso"},
  {id: 3, descripcion: "Terminada"}
]


