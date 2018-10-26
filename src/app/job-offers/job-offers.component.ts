
import { Component, OnInit } from '@angular/core';
import {jobOffers} from '../job-offers';
import { jobOffer } from '../jobOffer';
import { JOBOFFERS } from '../mock-job-offers';

@Component({
  selector: 'app-jo',

  templateUrl: './jobOffers.component.html',
  styleUrls: ['./jobOffers.component.scss']
})
export class jobOffersComponent implements OnInit {

  joboffers = JOBOFFERS;
  selectedJobOffer: jobOffer

  constructor() { }

  ngOnInit() {
  }

  onSelect(jobOffer): JobOffer): void {
    this.selectedJobOffer = jobOffer;
  }

}
