import {TaskServiceService} from '../../services/task-service.service';
import {Component, OnInit} from '@angular/core';
import {Task} from '../../models/task';

@Component({
  selector: 'app-task-window',
  templateUrl: './task-window.component.html',
  styleUrls: ['./task-window.component.css']
})
export class TaskWindowComponent {
  taskList: Array<Task>;
  doneList: Array<Task>;

  constructor(private taskService: TaskServiceService) {
    taskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.taskList = tasks;
    });
    taskService.getDoneListObs().subscribe((tasks: Array<Task>) => {
      this.doneList = tasks;
    });
  }

  addTask(task: Task): void {
    this.taskService.addTask(task);
  }

  doneTask(task: Task): void {
    this.taskService.doneTask(task);
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
  }
}
