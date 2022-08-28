import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  list: any[] = [];

  ngOnInit(): void {
    this.list.push({id: 1, name:"Limpiar habitación"});
    this.list.push({id: 2, name:"Lectura diaria"});
    this.list.push({id: 3, name:"Ver youtube"});
  }

}
