import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './services/users.service';
import { user } from './interfaces/user';
import { FormsModule } from '@angular/forms';
import id from '@angular/common/locales/id';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'customeApiCallInAngular';
  users: user[] = [];

  selectedUser: user | undefined

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getuser()
  }
  getuser() {
    this.userService.getUsers().subscribe(
      (data: user[]) => {
        console.log('Received data:', data);
        this.users = data;
        console.log(this.users)
      }
    );
  }
  addUser(user: user) {

    if (!this.selectedUser) {
      this.userService.saveUsers(user).subscribe((data: user) => {

        if (data) {
          this.getuser()
        }
        console.log(data);
      })
    } else {
      const userData = { ...user, id: this.selectedUser.id }
      this.userService.updateUser(userData).subscribe((data) => {
        if (data) {
          this.getuser()
        }
      })
    }
  }

  deleteUser(id: string) {
    this.userService.deleteuser(id).subscribe((data: user) => {
      if (data) {
        this.getuser()
      }
    })
    console.log(id);
  }


  selectUser(id: string) {

    this.userService.getSelectedUser(id).subscribe((data: user) => {
      console.log(data);
      this.selectedUser = data
    })
    console.log(id);

  }

}
