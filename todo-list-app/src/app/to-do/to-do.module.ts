import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do/to-do.component';
import { FormsModule } from '@angular/forms';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';



@NgModule({
  declarations: [
    ToDoComponent,
    ToDoAddComponent,
    ToDoListComponent,
    ToDoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ToDoComponent]
})
export class ToDoModule { }
