import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../Services/appareil.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  //kene lena tableau mais baaed walina nestaamlou service nahineh
  /*appareils = [
    {
      name: "Machine à laver",
      status : "éteint"
    },
    {
      name: "Television",
      status : "allumé"
    },
    {
      name: "pc",
      status : "éteint"
    }
  ];*/
  appareils: any[];
  appareilSubscrpition: Subscription;
  appareil1 = "Pc";
  appareil2 = "machine";
  appareil3 = "tele";
  isAuth = false;
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit() {
//this.appareils = this.appareilService.appareils;
this.appareilSubscrpition = this.appareilService.appareilSubject.subscribe(
(appareils: any[]) =>
{
  this.appareils = appareils;
}
);
this.appareilService.emitAppareilSUbject();
  }
  onAllumer() {
    this.appareilService.switchOnAll();
}
onEteindre() {
  this.appareilService.switchOfAll();
}
Save() {
  this.appareilService.SaveAppareil();
}
fetch() {
  this.appareilService.getAppareilsFromServer();
}
}
