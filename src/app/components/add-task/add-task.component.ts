import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskServiceService} from '../../services/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  task = '';

  constructor(private tastkService: TaskServiceService) {
  }

  addTask(): void {

    if (this.task !== '') {
      this.tastkService.addTask(({name: this.task, created: new Date()}));
      this.task = '';
    }
  }
}
