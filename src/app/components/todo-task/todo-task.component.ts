import {Component, Input, OnInit, Output} from '@angular/core';
import {TaskServiceService} from '../../services/task-service.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {

  taskList: Array<string>;

  constructor(private serviceTask: TaskServiceService) {
    serviceTask.getTaskListObs().subscribe((tasks: Array<string>) => {
      this.taskList = tasks;
    });
  }

  doneTask(task: string): void {
    this.serviceTask.doneTask(task);
  }

  deleteTask(task: string): void {
    this.serviceTask.deleteTask(task);
  }
}
