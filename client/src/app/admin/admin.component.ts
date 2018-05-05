import {Component, OnInit} from '@angular/core';
import {ActivityLoggerService} from "../shared/activity-logger.service";
import {Activity, ActivityLog} from "../shared/activity";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public activityLogs: ActivityLog[];
  public id;

  constructor(private _activity: ActivityLoggerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this._activity.getActivityLogs(this.id)
      .subscribe(activities => {
        this.activityLogs = activities;
        console.log('Activity ', this.activityLogs)
      })
  }

}
