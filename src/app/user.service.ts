// user.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = [
    { id: 1, email: 'john@example.com', password: 'password1' },
    { id: 2, email: 'jane@example.com', password: 'password2' },
    { id: 3, email: 'bob@example.com', password: 'password3' },
  ];

  getUsers() {
    return this.users;
  }

  addUser(newUser: any) {
    this.users.push(newUser);
  }
  getUserByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }

  // Additional functions for authentication
  authenticateUser(email: string, password: string) {
    const user = this.getUserByEmail(email);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }
}

