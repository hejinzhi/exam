import { WrongQuestionPage } from './../pages/wrong-question/wrong-question';
import { ScorePage } from './../pages/score/score';
import { CommonService } from './../service/common.service';
import { ExamService } from './../service/exam.service';
import { ButtonComponent } from './../components/button/button.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ButtonComponent,
    ScorePage,
    WrongQuestionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScorePage,
    WrongQuestionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ExamService,
    CommonService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
