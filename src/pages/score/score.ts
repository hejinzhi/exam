import { WrongQuestionPage } from './../wrong-question/wrong-question';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'sg-score',
  templateUrl: 'score.html',
})
export class ScorePage implements OnInit {

  passScore: number;
  score: number;
  examScore: any = {};
  // 用户答错题目的详细信息，“查看错题”页面要用到
  wrongAnswers: {
    questionTitle: string,
    userAnswerDesc: string[],
    rightAnswerDesc: string[]
  }[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.passScore = this.navParams.get('passScore');
    this.score = this.navParams.get('actualScore');
    this.wrongAnswers = this.navParams.get('wrongAnswers');
  }

  ngOnInit() {
    if (this.score < this.passScore) {
      this.examScore.url = "../../assets/imgs/fail.png";
      this.examScore.score = this.score;
      this.examScore.remark = "还差一点点，快看看错题吧！";
    } else {
      this.examScore.url = "../../assets/imgs/winner.png";
      this.examScore.score = this.score;
      this.examScore.remark = "恭喜您！已过关！";
    }
  }

  // 查看错题
  review() {
    this.navCtrl.push(WrongQuestionPage, { wrongAnswers: this.wrongAnswers })
  }


}
