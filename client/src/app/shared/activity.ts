export class Activity {
  id: String;
  logs: ActivityLog[];
}

export class ActivityLog {
  _id: String;
  event: String;
  time: Date;
}
