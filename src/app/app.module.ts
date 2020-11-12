import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskWindowComponent } from './components/task-window/task-window.component';
import {FormsModule} from '@angular/forms';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';
import { DoneTaskComponent } from './components/done-task/done-task.component';
import {TaskServiceService} from './services/task-service.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortTaskPipe } from './shared/sort-task.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskWindowComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortTaskPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
