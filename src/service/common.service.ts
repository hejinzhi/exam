import { AlertController, LoadingController, Loading } from 'ionic-angular';
import { Injectable } from '@angular/core';


@Injectable()
export class CommonService {

    constructor(
        private alertCtrl: AlertController,
        private loadingCtrl: LoadingController
    ) { }

    loading: Loading;

    showAlert(title: string, subtitle: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        alert.present();
    }

    showConfirm(title: string, msg: string, cb: any) {
        let confirm = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'OK',
                    handler: () => {
                        cb();
                    }
                }
            ]
        });
        confirm.present();
    }

    showOptionConfirm(title: string, msg: string, cb: any) {
        let confirm = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {

                    }
                },
                {
                    text: 'OK',
                    handler: () => {
                        cb();
                    }
                }
            ]
        });
        confirm.present();
    }


    getToday() {
        let newDate = new Date();
        let month = (newDate.getMonth() + 1) > 9 ? (newDate.getMonth() + 1) : '0' + (newDate.getMonth() + 1);
        let day = newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate();
        return newDate.getFullYear() + '-' + month + '-' + day;
    }

    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    }
    hideLoading() {
        this.loading && this.loading.dismiss();
    }
}