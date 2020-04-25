import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../Services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  //appareilName: string = 'Machine à laver';
  @Input() appareilName: string;
  //appareilStatus = 'éteint';
  @Input() appareilStatus: string;
  @Input() indexAppareil: number;
  @Input() id: number;
  constructor(private appareilService : AppareilService) { }

  ngOnInit() {
  }
  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if(this.appareilStatus === 'allumé')
    return 'green';
    else if (this.appareilStatus === 'éteint')
    return 'red';
  }

  switchOnOne() {
this.appareilService.switchOnOne(this.indexAppareil);
  }
  switchOfOne() {
    this.appareilService.switchOfOne(this.indexAppareil);
      }
}
