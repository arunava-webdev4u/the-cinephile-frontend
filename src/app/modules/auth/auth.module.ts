import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    LoginComponent,
    RegisterComponent
  ]
})

export class AuthModule { }
