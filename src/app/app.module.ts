import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-smo0nqro.us.auth0.com',
      clientId: '6rT2eHxJgTmLpgQgLXPiPvbjnmGzrJUu'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
