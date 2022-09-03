import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HarrypotterComponent } from './components/harrypotter/harrypotter.component';

const routes: Routes = [
  {
    path: 'harrypotter', component: HarrypotterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
