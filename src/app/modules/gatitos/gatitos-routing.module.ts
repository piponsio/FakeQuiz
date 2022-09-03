import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FichaGatitosComponent } from './components/ficha-gatitos/ficha-gatitos.component';

const routes: Routes = [
  {
    path: '', component: FichaGatitosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatitosRoutingModule { }
