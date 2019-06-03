import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {DataService} from '../data/data.service';

@Component({
    selector: 'app-alert',
    template: `
  <div class="alert-wrapper" [hidden]="!alert" [style.top]="top">
    <div class="alert alertBox" [ngClass]="'alert-'+type"><span [innerHTML]="alert_msg"></span>
        <a href="javascipt: void(0)" (click)="hideAlert()" class="hidemsg">
        <i class="fas fa-times"></i>
        </a>
    </div></div>`
})

export class AlertComponent {
    private alert: boolean;
    private type: boolean;
    private alert_msg: string;
    private subscription: Subscription;
    private top: string = "-40px";

    constructor(private _commonService:DataService) { }
    ngOnInit() {
        this.subscription = this._commonService.showAlertHandler.subscribe((res) => {
            if (res.hasOwnProperty("msg") && res.hasOwnProperty("type")) {
                res.unhide = res.unhide ? res.unhide : null;
                this.showAlert(res.msg, res.type, res.unhide);
            }
        });
        
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    private showAlert(msg, type, unhide) {
        var that = this;
        this.alert = true;
        this.alert_msg = msg;
        this.type = type;
        setTimeout(function () {
            that.top = "54px";
        }, 50);
        if (!unhide) {
            this.autoHide(); // hide alert automatically after 3 seconds
        }
    }
    private autoHide() {
        var that = this;
        setTimeout(function () {
            that.top = "-40px";
            setTimeout(function () {
                that.hideAlert();
            }, 500);
        }, 4000);
    }
    private hideAlert() {
        this.alert = false;
        this.alert_msg = "";
    }
}