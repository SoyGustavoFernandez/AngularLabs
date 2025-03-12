import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.models';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
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
   }
  ]);

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required
    ]
   });

  changeHandler() {
    if (this.newTaskCtrl.valid && this.newTaskCtrl.value.trim() !== '') {
      const newTask = this.newTaskCtrl.value;
      this.addTask(newTask);
      this.newTaskCtrl.setValue('');
    }
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
