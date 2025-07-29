import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service'


@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  authService = inject(AuthService)
  
  logout() {
    this.authService.logout()
  }
}
