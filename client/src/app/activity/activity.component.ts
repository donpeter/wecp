import {Component, OnInit} from '@angular/core';
import {Tour} from "./tour";
import {ActivityLoggerService} from "../shared/activity-logger.service";
import {ActivityLog} from "../shared/activity";
import {ActivatedRoute} from "@angular/router";

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
  public id;

  constructor(private _activityLogger: ActivityLoggerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

  }
  clicked(tour: Tour){
    console.log(`Clicked ${tour.location}`);
    const activityLog = new ActivityLog();
    activityLog.event = `Clicked ${tour.location}`;
    activityLog.time = new Date();
    this._activityLogger.saveActivityLog(this.id, activityLog)
      .subscribe(
        res => console.log('Activity: ', res),
        err => console.error('LOG Error: ', err)
      )
  }

  hovered(tour: Tour){
    console.log(`Hovered ${tour.location}`);
    const activityLog = new ActivityLog();
    activityLog.event = `Hovered ${tour.location}`;
    activityLog.time = new Date();
    this._activityLogger.saveActivityLog(this.id, activityLog)
      .subscribe(
        res => console.log('Activity Logged: ', res),
        err => console.error('Activity Log ERROR: ', err)
      )
  }

}
