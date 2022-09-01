import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.scss']
})
export class ToDoAddComponent implements OnInit,OnChanges {
@Input() list: any[] = [];
newTask: any = {};
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  add():void{
    if(!this.newTask.name)
      return;
    this.list.push(this.newTask);
    this.newTask = {};

    this.toastr.success("ToDoApp","Nueva tarea agregada.");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ToDoAddComponent - OnChanges");
  }

}
