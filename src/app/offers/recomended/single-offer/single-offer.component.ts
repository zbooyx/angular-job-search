import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-offer',
  templateUrl: './single-offer.component.html',
  styleUrls: ['./single-offer.component.scss']
})
export class SingleOfferComponent implements OnInit {


  @Input() offer: {
    title: string,
    employer: string,
    location: string,
    region: string,
    logoURL: string,
    salary: number,
    date: string
  };

  constructor() {

  }

  ngOnInit(): void {
    // console.log(this.offer);
  }
}


