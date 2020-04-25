import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../Services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-appareil',
  templateUrl: './ajout-appareil.component.html',
  styleUrls: ['./ajout-appareil.component.scss']
})
export class AjoutAppareilComponent implements OnInit {

  // par defaut bch hata ken mahetch fel seelct
  default ="éteint";
  constructor(private appareilService: AppareilService,
    private rout: Router) { }

  ngOnInit() {
  }
onSubmit(form: NgForm) {
  const name = form.value['name'];
  const status = form.value['status'];
  this.appareilService.addApareil(name , status);
  this.rout.navigate(['/appareil']);
}
}
