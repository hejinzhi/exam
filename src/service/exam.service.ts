import { Config } from './../../config';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ExamService {

    constructor(
        private http: Http
    ) { }

    getQuestionsByExamId(examId: number) {
        return this.get(Config.baseUrl + 'api/question/exam/' + examId);
    }

    getExamById(id: number) {
        return this.get(Config.baseUrl + 'api/exam/' + id);
    }

    insertAnswer(body) {
        return this.post(Config.baseUrl + 'api/answer', body);
    }

    getAnswerSeq(userId) {
        return this.get(Config.baseUrl + 'api/answer/seq/' + userId);
    }

    get(url) {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }

    post(url, body) {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options);
    }
}