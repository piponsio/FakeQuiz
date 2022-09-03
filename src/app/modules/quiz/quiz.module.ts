import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { QuizRoutingModule } from './quiz-routing.module';
import { HarrypotterComponent } from './components/harrypotter/harrypotter.component';


@NgModule({
  declarations: [
    HarrypotterComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    QuizRoutingModule,
  ]
})
export class QuizModule { }
