import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
    <div class='task-form col-sm-6'>
      <h3>Edit Description: {{ task.description }}</h3>
      <input [(ngModel)]="task.description" class='input-lg'/>
      <h5>Edit Priority: {{ task.priority }}</h5>
      <select [(ngModel)]="task.priority">
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <h5>Edit Category: {{ task.category }}</h5>
      <select [(ngModel)]="task.category">
        <option>Home</option>
        <option>Work</option>
        <option>Hobby</option>
      </select>
    </div>
  `
})

export class EditTaskDetailsComponent {
  public task: Task;
}
