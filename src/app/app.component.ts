import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from '../AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
})
export class AppComponent implements OnInit {
  title = 'bookstore';

  fullName: string | undefined;

  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.fullName = await this.authService.getCurrentUserFullName();
      console.log('Full Name:', this.fullName);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }

    let currentUser = await this.authService.getCurrentUser();
    console.log(currentUser);
    let currentUserSession = await this.authService.getCurrentSession();
    console.log(currentUserSession);
    let currentUserSessionAccessToken =
      await this.authService.getCurrentSession();
    console.log(currentUserSessionAccessToken?.idToken?.toString());
  }

  signOut() {
    this.authService.signOut();
    this.fullName = undefined;
  }
}
