import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  @Input() name: string = ''

  username: string = 'Fernanda';
  title: string = 'title'

  constructor() { }

  ngOnInit(): void{}
}
