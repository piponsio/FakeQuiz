import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './theme/header/header.component';
import { MenuComponent } from './theme/menu/menu.component';
import { FooterComponent } from './theme/footer/footer.component';
import { E404Component } from './theme/error/e404/e404.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    E404Component,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    E404Component,
  ]
})
export class SharedModule { }
