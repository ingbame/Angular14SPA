import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {
  users: User[] = [];
  constructor() { }

  ngOnInit(): void {
    this.users.push({id:1,name:"Baruch"});
  }

}
