import { User } from '../Models/user.model';
import { Subject } from 'rxjs';

export class UserService {
  private users: User[] = [];
  userSubject = new Subject<User[]>();
  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  addUSer(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
