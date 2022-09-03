import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HarrypotterRoutingModule } from './harrypotter-routing.module';
import { RandomCharacterComponent } from './components/random-character/random-character.component';

@NgModule({
  declarations: [
    RandomCharacterComponent,
  ],
  imports: [
    CommonModule,
    HarrypotterRoutingModule
  ]
})
export class HarrypotterModule { }
