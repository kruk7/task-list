import {Component, Input, OnInit} from '@angular/core';
import {TaskServiceService} from '../../services/task-service.service';
import {Task} from '../../models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent {



  doneList: Array<Task>;

  constructor(private taskService: TaskServiceService) {
    taskService.getDoneListObs().subscribe((tasks: Array<Task>) => {
      this.doneList = tasks;
    });
  }
}

