import {Component, Input, OnInit} from '@angular/core';
import {TaskServiceService} from '../../services/task-service.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent {

  doneList: Array<string>;

  constructor(private taskService: TaskServiceService) {
    taskService.getDoneListObs().subscribe((tasks: Array<string>) => {
      this.doneList = tasks;
    });
  }
}

