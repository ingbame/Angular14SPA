import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class ToDoComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy {

  constructor() { }

  list: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ToDoComponent - OnChanges");
  }
  ngDoCheck(): void {
    console.log("ToDoComponent - DoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ToDoComponent - AfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ToDoComponent - AfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ToDoComponent - AfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ToDoComponent - AfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ToDoComponent - OnDestroy");
  }
  ngOnInit(): void {
    console.log("ToDoComponent - OnInit");
    this.list.push({id: 1, name:"Limpiar habitación", default: true});
    this.list.push({id: 2, name:"Lectura diaria", default: true});
    this.list.push({id: 3, name:"Ver youtube"});
  }

}
