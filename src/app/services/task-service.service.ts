import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {


  private taskList: Array<Task> = [];
  private doneList: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private doneListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.taskList = [
      ({name: 'task1', created: new Date(), description: 'description1'}),
      ({name: 'task2', created: new Date(), description: 'description2'}),
      ({name: 'task3', created: new Date(), description: 'description3'})
    ];
    this.taskListObs.next(this.taskList);
  }


  addTask(task: Task): void {
    this.taskList.push(task);
    this.taskListObs.next(this.taskList);
  }

  doneTask(task: Task): void {
    this.doneList.push(task);
    this.deleteTask(task);
    this.taskListObs.next(this.taskList);
    this.doneListObs.next(this.doneList);
  }

  deleteTask(task: Task): void {
    this.taskList = this.taskList.filter(event => event !== task);
    this.taskListObs.next(this.taskList);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  getDoneListObs(): Observable<Array<Task>> {
    return this.doneListObs.asObservable();
  }

}
