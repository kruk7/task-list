import {TaskServiceService} from '../../services/task-service.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-window',
  templateUrl: './task-window.component.html',
  styleUrls: ['./task-window.component.css']
})
export class TaskWindowComponent {
  taskList: Array<string>;
  doneList: Array<string>;

  constructor(private taskService: TaskServiceService) {
    taskService.getTaskListObs().subscribe((tasks: Array<string>) => {
      this.taskList = tasks;
    });
    taskService.getDoneListObs().subscribe((tasks: Array<string>) => {
      this.doneList = tasks;
    });
  }

  addTask(task: string): void {
    this.taskService.addTask(task);
  }

  doneTask(task: string): void {
    this.taskService.doneTask(task);
  }

  deleteTask(task: string): void {
    this.taskService.deleteTask(task);
  }
}
