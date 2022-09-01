import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './theme/header/header.component';
import { E404Component } from './theme/error/e404/e404.component';


@NgModule({
  declarations: [
    HeaderComponent,
    E404Component,
  ],
  imports: [
    RouterModule,
  ],
  exports:[
    HeaderComponent,
    E404Component,
  ]
})
export class SharedModule { }
