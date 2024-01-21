import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  email: string = '';
  password: string = '';
  isSignUp: boolean = false; // Added to determine if it's a signup or login

  constructor(private userService: UserService, private router: Router) {}

  toggleForm() {
    this.isSignUp = !this.isSignUp;
    // Reset fields when toggling between signup and login
    this.email = '';
    this.password = '';
  }
  authenticate() {
    if (this.isSignUp) {
      const newUser = { id: null, email: this.email, password: this.password };
      this.userService.addUser(newUser);

      // Redirect to the portfolio page after signup
      this.router.navigate(['/art']);
    } else {
      const user = this.userService.authenticateUser(this.email, this.password);

      if (user) {
        // Redirect to the contact page after successful login
        this.router.navigate(['/socials']);
      } else {
        // Handle unsuccessful login
      }
    }
  
  
}}
