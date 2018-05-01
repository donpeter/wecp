import { Component, OnInit } from '@angular/core';
import {ActivityService} from "../shared/activity.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private activity: ActivityService) { }

  ngOnInit() {
    this.activity.getActivities('paul')
      .subscribe(res => console.log(res))
  }

}
