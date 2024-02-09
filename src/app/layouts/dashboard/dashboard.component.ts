import { Component } from '@angular/core';
import { AuthService } from '../auth/login/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFiller = false;

  constructor(private authService: AuthService) {}

  logout(): void {
    console.log('boton logout funcionally');
    this.authService.logout();
  }
}
