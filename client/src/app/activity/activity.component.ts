import { Component, OnInit } from '@angular/core';
import {Tour} from "./tour";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public tours: Tour[] = [
    {
      location: 'New York',
      image: 'assets/img/new-york.jpg',
      cost: 1500
    },{
      location: 'Dehli',
      image: 'assets/img/delhi.jpg',
      cost: 1500
    },{
      location: 'Lagos, Nigeria',
      image: 'assets/img/lagos.jpg',
      cost: 1500
    },{
      location: 'Istanbul, Turkey',
      image: 'assets/img/istanbul.jpg',
      cost: 1500
    },{
      location: 'Toronto, Canada',
      image: 'assets/img/toronto.jpg',
      cost: 1500
    },
  ];
  constructor() { }

  ngOnInit() {
  }
  clicked(tour: Tour){
    console.log(`Clicked ${tour.location}`)
  }

  hovered(tour: Tour){
    console.log(`Hovered ${tour.location}`)
  }

}
