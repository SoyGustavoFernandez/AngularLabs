import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.models';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
   {id: 1,
    title: "Intalar Angular CLI",
    completed : false
   },
   {
    id: 2,
    title: "Crear nuevo proyecto",
    completed: false
   }]);
changeHandler(event : Event) {
  const input = event.target as HTMLInputElement;
  const newTask = input.value;
  this.addTask(newTask);
  input.value = ''
  };

addTask(input: string){
  const newTask = {
    id: Date.now(),
    title: input,
    completed: false
  };
  this.tasks.update( tasks => [...tasks, newTask]);
}

removeTask(index: number) {
  this.tasks.update(tasks => tasks.filter((task, i) => i !== index));
  };

updateTask(index: number) {
  this.tasks.update( tasks => {
    return tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return  task;
      });
    });
  }
}
