import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WrongQuestionPage } from './wrong-question';

@NgModule({
  declarations: [
    WrongQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(WrongQuestionPage),
  ],
})
export class WrongQuestionPageModule {}
