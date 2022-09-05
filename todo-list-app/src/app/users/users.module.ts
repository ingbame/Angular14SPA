import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersTestComponent } from './users-test/users-test.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersDetailsComponent,
    UsersTestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
