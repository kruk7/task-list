import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-window',
  templateUrl: './task-window.component.html',
  styleUrls: ['./task-window.component.css']
})
export class TaskWindowComponent implements OnInit {
  task = '';
  taskList: Array<string> = [];
  doneList: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    this.taskList.push(this.task);
    this.task = '';
  }

  doneTask(task: string): void {
    this.doneList.push(task);
    this.deleteTask(task);
  }

  deleteTask(task: string): void {
    this.taskList = this.taskList.filter(event => event !== task);
  }
}
