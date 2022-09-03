import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth0/auth0-angular';

import { UserRoutingModule } from './user-routing.module';
import { AppAuthButtonComponent } from './components/app-auth-button/app-auth-button.component';


@NgModule({
  declarations: [
  AppAuthButtonComponent,
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
  ],
  exports:[
    AppAuthButtonComponent,
  ]
})
export class UserModule { }
