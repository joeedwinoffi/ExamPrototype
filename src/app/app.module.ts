import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OnlineStatusModule } from 'ngx-online-status';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebcamModule } from 'ngx-webcam';
import { InstructionsComponent } from './instructions/instructions.component';
import { FacedetectionComponent } from './facedetection/facedetection.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';



@NgModule({
  declarations: [
    AppComponent,
    InstructionsComponent,
    FacedetectionComponent,
    LoginComponent,
    QuestionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnlineStatusModule,
    WebcamModule,

  ],

  providers: [
    MatDialog
  ],
  bootstrap: [AppComponent, InstructionsComponent, FacedetectionComponent],
  // exports: [AppComponent, InstructionsComponent, FacedetectionComponent]
})
export class AppModule {

}
