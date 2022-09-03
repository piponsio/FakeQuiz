import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule)},
  { path: 'gatitos', loadChildren: () => import('../app/modules/gatitos/gatitos.module').then(m => m.GatitosModule)},
  { path: 'quiz', loadChildren: () => import('../app/modules/quiz/quiz.module').then(m => m.QuizModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
