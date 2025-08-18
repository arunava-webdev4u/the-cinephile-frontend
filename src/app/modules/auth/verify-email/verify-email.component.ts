import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-verify-email',
  imports: [ReactiveFormsModule],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.css'
})
export class VerifyEmailComponent {
  authService = inject(AuthService);
  verifyEmailForm:FormGroup;

  constructor() {
    this.verifyEmailForm = new FormGroup({
      otp: new FormControl("")
    });
    // this.verifyEmailForm = new FormGroup({
    //   d1: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
    //   d2: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
    //   d3: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
    //   d4: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
    //   d5: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
    //   d6: new FormControl('', [Validators.required, Validators.pattern('[0-9]')])
    // });
  }

  onSubmit() {
    this.authService.verify_email(this.verifyEmailForm.value)
  }
}
