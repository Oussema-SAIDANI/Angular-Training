import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './Services/appareil.service';
import {Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{//implements OnInit
  //kzn kol chay lehne ama ki amlna appareil-view na9lnehom bch naamlou routing
  //lastupdate = new Date();
  /*lastUpdate = new Promise((resolve, reject) => {
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
  /*
  appareils: any[];
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
this.appareils = this.appareilService.appareils;
  }
  onAllumer() {
    this.appareilService.switchOnAll();
}
onEteindre() {
  this.appareilService.switchOfAll();
}*/
secondes: number;
counterSubs: Subscription;
constructor() {

}
ngOnInit() {
  const counter = Observable.interval(1000);
  this.counterSubs = counter.subscribe (
    (value: number) => {
      this.secondes = value;
    }
  );
  /*counter.subscribe(
    (value: number) => {
      this.secondes = value;
    },
    (error: any) => {
      console.log('erreur!!');
    },
    () => {
      console.log('oberservable completé');
    }
  );*/
}
ngOnDestroy() {
  this.counterSubs.unsubscribe();
}
}
