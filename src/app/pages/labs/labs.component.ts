import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [ RouterOutlet, CommonModule ],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = signal([
    "Intalar Angular CLI",
    "Crear nuevo proyecto",
    "Crear componentes",
    "Crear servicio"
  ]);
  name = signal('Gustavo');
  age  = 28;
  disable = false;
  img = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  person = signal({
    pname: 'tairon',
    page: 28,
    pavatar: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  });
  clickHandler() {
    alert('Bienvenido a Angular!');
  };
  doubleClickHandler() {
    alert('Doble click!');
  };
  changeHandler(event : Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  };
  keydownHandler(event : KeyboardEvent) {
    alert('Tecla presionada!');
  };
  changeAge(event : Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((p) => { return { ...p, page: parseInt(newValue) }; });
  };
  changeName(event : Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((p) => { return { ...p, pname: newValue }; });
  };
}
