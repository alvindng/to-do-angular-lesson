import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector:'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="task-form col-sm-6">
      <h3>Create Task:</h3>
      <input placeholder="Description" class="input-lg" #newDescription>
      <select #newPriority>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <select #newCategory>
        <option>Home</option>
        <option>Work</option>
        <option>Hobby</option>
      </select>
      <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<Object>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement, userCategory: HTMLInputElement){
    this.onSubmitNewTask.emit({
      description: userDescription.value,
      priority: userPriority.value,
      category: userCategory.value
    });
    userDescription.value = "";
  }
}
