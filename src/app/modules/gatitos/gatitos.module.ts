import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatitosRoutingModule } from './gatitos-routing.module';
//import { GatitosService } from './services/gatitos.service';
import { FichaGatitosComponent } from './components/ficha-gatitos/ficha-gatitos.component';

@NgModule({
  declarations: [
    FichaGatitosComponent,
  ],
  imports: [
    CommonModule,
    GatitosRoutingModule
  ],
  providers: [
  ]
})
export class GatitosModule { }
