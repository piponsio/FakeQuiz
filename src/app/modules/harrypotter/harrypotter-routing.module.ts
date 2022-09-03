import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandomCharacterComponent } from './components/random-character/random-character.component';

const routes: Routes = [
  {
    path: '', component: RandomCharacterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HarrypotterRoutingModule { }
