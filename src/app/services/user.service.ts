import { Subject } from 'rxjs/Subject';
import { User } from '../models/User.model';

export class UserService {
  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'test.test@gmail.com',
      drinkPreference: 'Coca',
      hobbies: ['coder', 'dancer'],
    },
  ];
  userSubject = new Subject<User[]>();

  emitUser() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUser();
  }
}
