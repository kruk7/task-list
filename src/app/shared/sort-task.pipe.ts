import {Pipe, PipeTransform} from '@angular/core';
import {Task} from '../models/task';

@Pipe({
  name: 'sortTask'
})
export class SortTaskPipe implements PipeTransform {

  transform(value: Array<Task>, ...args: unknown[]): unknown {
    return value.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
