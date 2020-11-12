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
      this.taskList = tasks.slice();
    });
  }

  doneTask(task: Task): void {
    task.ended = new Date();
    this.serviceTask.doneTask(task);
  }

  deleteTask(task: Task): void {
    this.serviceTask.deleteTask(task);
  }

  getColor(): string {
    if (this.taskList.length < 5) {
      return 'green';
    } else if (this.taskList.length === 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}
