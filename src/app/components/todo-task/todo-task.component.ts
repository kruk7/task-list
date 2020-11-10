import {Component, Input, OnInit, Output} from '@angular/core';
import {TaskServiceService} from '../../services/task-service.service';
import {Task} from '../../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {

  taskList: Array<Task>;

  constructor(private serviceTask: TaskServiceService) {
    serviceTask.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.taskList = tasks;
    });
  }

  doneTask(task: Task): void {
    this.serviceTask.doneTask(task);
  }

  deleteTask(task: Task): void {
    this.serviceTask.deleteTask(task);
  }
}
