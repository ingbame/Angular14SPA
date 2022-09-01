import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit,OnDestroy {
  @Input() list: any[] = [];
@Input() item: any = {};
  constructor(private toastr: ToastrService) { }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log("ToDoItemComponent - OnDestroy");
  }

  delete(item:any):void{
    let index = this.list.findIndex(x => x.name == item.name);
    this.list.splice(index,1);

    this.toastr.warning("ToDoApp","Tarea eliminada.");
  }

}
