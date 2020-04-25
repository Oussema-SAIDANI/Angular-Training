import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../Services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute
    ) { }
 name: string = 'Appareil';
 status: string = 'Statut';
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    // +id bch naamlou cast khtr id aana number
    this.name = this.appareilService.getAppreilByID(+id).name;
  this.status = this.appareilService.getAppreilByID(+id).status;
  }

}
