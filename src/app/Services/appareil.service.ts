import {Subject} from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppareilService {

 appareilSubject = new Subject<any[]>();
 // fasa5na wa9t amlna base khatr deja sajlneha fel base
  private appareils = [
    /*{
      id: 1,
      name: "Machine à laver",
      status : "éteint"
    },
    {
      id: 2,
      name: "Television",
      status : "allumé"
    },
    {
      id: 3,
      name: "pc",
      status : "éteint"
    }*/
  ];
  constructor(private httpClient: HttpClient) { }
  emitAppareilSUbject() {
    this.appareilSubject.next(this.appareils.slice());
  }
  getAppreilByID(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }
  switchOnAll() {
    for (const appareil of this.appareils) {
    appareil.status = 'allumé';
    }
    this.emitAppareilSUbject();
  }
  switchOfAll() {
    for (const appareil of this.appareils) {
    appareil.status = 'éteint';
    }
    this.emitAppareilSUbject();
  }
  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSUbject();
  }
  switchOfOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSUbject();
  }
  addApareil(name: string, status: string) {
    const apapreilObject = {
      id: 0 ,
      name: '',
      status: ''
    };
    apapreilObject.name = name;
    apapreilObject.status = status;
    apapreilObject.id = this.appareils[this.appareils.length - 1].id + 1;
    this.appareils.push(apapreilObject);
    this.emitAppareilSUbject();
  }
SaveAppareil() {
  // retourne un observable
  // put bch ken hak yekrazi ken mawjouda w nzelt martin
  this.httpClient.put('https://fir-38432.firebaseio.com/appareil.json', this.appareils)
                 .subscribe(
                   () => {
                     console.log('bien');
                   },
                   (error) => {
                    console.log(error);
                   }
                 );
}
getAppareilsFromServer() {
  this.httpClient
    .get<any[]>('https://fir-38432.firebaseio.com/appareil.json')
    .subscribe(
      (response) => {
        this.appareils = response; //as Array<any> [];
        console.log(this.appareils);
        this.emitAppareilSUbject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}
}
