import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {


  private taskList: Array<string> = [];
  private doneList: Array<string> = [];

  private taskListObs = new BehaviorSubject<Array<string>>(this.taskList);
  private doneListObs = new BehaviorSubject<Array<string>>(this.doneList);

  constructor() {
    this.taskList = ['task1', 'task2', 'task3'];
    this.taskListObs.next(this.taskList);
  }


  addTask(task: string): void {
    this.taskList.push(task);
    this.taskListObs.next(this.taskList);
  }

  doneTask(task: string): void {
    this.doneList.push(task);
    this.deleteTask(task);
    this.taskListObs.next(this.taskList);
  }

  deleteTask(task: string): void {
    this.taskList = this.taskList.filter(event => event !== task);
    this.taskListObs.next(this.taskList);
  }

  getTaskListObs(): Observable<Array<string>> {
    return this.taskListObs.asObservable();
  }

  getDoneListObs(): Observable<Array<string>> {
    return this.doneListObs.asObservable();
  }

}
