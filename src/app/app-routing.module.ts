import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacedetectionComponent } from './facedetection/facedetection.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [

  { path: 'ins', component: InstructionsComponent, pathMatch: 'full' },
  { path: 'face', component: FacedetectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Question', component: QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
