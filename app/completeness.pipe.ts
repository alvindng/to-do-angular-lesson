import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], info) {
    var desiredCompleteness = info[0];
    var desiredPriority = info[1];
    var output: Task[] = [];
    if(desiredCompleteness === "notDone") {
      if(desiredPriority === "High"){
        for (var i = 0; i < input.length; i++) {
          if (input[i].done === false && input[i].priority === "High") {
            output.push(input[i]);
          }
        }
      }
      else if(desiredPriority === "Medium"){
        for (var i = 0; i < input.length; i++) {
          if (input[i].done === false && input[i].priority === "Medium") {
            output.push(input[i]);
          }
        }
      }
      else if(desiredPriority === "Low"){
        for (var i = 0; i < input.length; i++) {
          if (input[i].done === false && input[i].priority === "Low") {
            output.push(input[i]);
          }
        }
      }
      else{
        for (var i = 0; i < input.length; i++) {
          if (input[i].done === false) {
            output.push(input[i]);
          }
        }
      }
      return output;
    } else if (desiredCompleteness === "isDone") {
       if(desiredPriority === "High"){
         for (var i = 0; i < input.length; i++) {
           if (input[i].done === true && input[i].priority === "High") {
             output.push(input[i]);
           }
         }
       }
       else if(desiredPriority === "Medium"){
         for (var i = 0; i < input.length; i++) {
           if (input[i].done === true && input[i].priority === "Medium") {
             output.push(input[i]);
           }
         }
       }
       else if(desiredPriority === "Low"){
         for (var i = 0; i < input.length; i++) {
           if (input[i].done === true && input[i].priority === "Low") {
             output.push(input[i]);
           }
         }
       }
       else{
         for (var i = 0; i < input.length; i++) {
           if (input[i].done === true) {
             output.push(input[i]);
           }
         }
       }
       return output;
     }

      else {
        if(desiredPriority === "High"){
          for (var i = 0; i < input.length; i++) {
            if (input[i].priority === "High") {
              output.push(input[i]);
            }
          }
        }
        else if(desiredPriority === "Medium"){
          for (var i = 0; i < input.length; i++) {
            if (input[i].priority === "Medium") {
              output.push(input[i]);
            }
          }
        }
        else if(desiredPriority === "Low"){
          for (var i = 0; i < input.length; i++) {
            if (input[i].priority === "Low") {
              output.push(input[i]);
            }
          }
        }
        else{
          return input;
        }
        return output;
      }

    }
  }
