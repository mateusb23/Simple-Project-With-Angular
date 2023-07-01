import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Mateus';
  age: number = 30;
  job = 'Software Developer';
  hobbies = ['Correr', 'Ler Literatura de horror/terror', 'Andar de bike com a minha namorada'];
  car = {
    name: "Punto",
    year: 2019
  }

  constructor() { }

  ngOnInit(): void {

  }

}
