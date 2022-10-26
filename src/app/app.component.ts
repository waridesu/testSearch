import { Component } from '@angular/core';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedUser: User | undefined;
  savedUser: User | undefined;
  setSelectedUser(event: User): void {
    this.selectedUser = event;
  }

  saveUserData(event: User): void {
    this.savedUser = event;
  }
}
