import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sg-button',
    templateUrl: 'button.component.html'
})
export class ButtonComponent implements OnInit {

    @Input() mode: string;
    @Input() options: string[];
    @Output() result = new EventEmitter<string>();
    buttonControl: {
        title: string,
        choosed: boolean,
        style: string
    }[] = [];
    answer: string;

    constructor() { }

    ngOnInit() {
        this.options.forEach((value, index) => {
            this.buttonControl.push({
                title: value,
                choosed: false,
                style: 'default'
            });
        });
    }

    toggleCheck(index: number) {
        if (this.mode === 'TF') {
            this.singleChoose(index);
        } else if (this.mode === 'RADIO') {
            this.singleChoose(index);
        }
        else {
            this.mutilChoose(index);
        }
        this.answer = this.getResult();
        this.result.emit(this.answer);

    }

    singleChoose(i: number) {
        this.buttonControl.forEach((value, index) => {
            if (i === index) {
                this.buttonControl[index].choosed = true;
                this.buttonControl[index].style = 'checked';
            } else {
                this.buttonControl[index].choosed = false;
                this.buttonControl[index].style = 'default';
            }
        })
    }

    mutilChoose(i: number) {
        this.buttonControl[i].choosed = !this.buttonControl[i].choosed;
        this.buttonControl[i].style = this.buttonControl[i].choosed ? 'checked' : 'default';
    }

    getResult() {
        let result: string = '';
        if (this.mode === 'TF') {
            result = this.buttonControl[0].choosed ? 'Y' : 'N';
        } else if (this.mode === 'RADIO') {
            let code;
            this.buttonControl.forEach((value, index) => {
                if (value.choosed) {
                    code = index + 48 + 17;
                }
            });
            result = this.getAnswer(code);
        }
        else {
            let code;
            this.buttonControl.forEach((value, index) => {
                if (value.choosed) {
                    code = index + 48 + 17;
                    result += this.getAnswer(code) + ',';
                }
            });
        }
        if (result[result.length - 1] === ',') {
            result = result.substr(0, result.length - 1);
        }
        return result;
    }

    getAnswer(code: number) {
        return String.fromCharCode(code);
    }


}