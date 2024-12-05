import { Component, computed, Input, signal, input, Output, EventEmitter } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter();

  // Below is how to use the signal and computed functions instead of the @Input decorator

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectUser() {
    this.select.emit(this.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
