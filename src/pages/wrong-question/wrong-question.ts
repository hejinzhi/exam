import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'sg-wrong-question',
  templateUrl: 'wrong-question.html',
})
export class WrongQuestionPage {
  // 用户答错题目的详细信息，“查看错题”页面要用到
  wrongAnswers: {
    questionTitle: string,
    userAnswerDesc: string[],
    rightAnswerDesc: string[]
  }[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.wrongAnswers = this.navParams.get('wrongAnswers');
  }


}
