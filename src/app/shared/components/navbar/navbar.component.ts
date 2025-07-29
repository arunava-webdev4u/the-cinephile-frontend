import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  authService = inject(AuthService)
  // currentAuthStatus = this.authService.authTokenSignal;
  // showProfile = false;

  constructor() {}
}
