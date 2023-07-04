import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';
  age = 59;
  userData = {
    email: 'joaquim@gmail.com',
    role: 'Admin',
    office: 'Tech lead'
  };

  title = 'curso-angular';
}
