import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit{
  @Input() name: string = '';
  @Input() age!: number;
  @Input() userData!: {
    email: string,
    role: string,
    office: string
  };

  username: string = 'Fernanda';
  title: string = 'title'

  constructor() { }

  ngOnInit(): void{}
}
