import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../core/services/users.service'

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  usersService = inject(UsersService)
  users:any = []
  
  ngOnInit():void {
    this.usersService.getUsers().subscribe((ob) => {
      this.users = ob
    })
  }
}
