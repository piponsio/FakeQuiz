import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeRoutingModule } from './theme-routing.module';

import { HeaderComponent } from './header/header.component';
import { E404Component } from './error/e404/e404.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { UserModule } from '../../modules/user/user.module';


@NgModule({
  declarations: [
    HeaderComponent,
    E404Component,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    UserModule,
    ThemeRoutingModule
  ],
  exports:[
    HeaderComponent,
    E404Component,
    FooterComponent,
    MenuComponent,
    UserModule
  ]
})
export class ThemeModule { }
