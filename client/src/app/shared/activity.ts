export interface Activity {
  id: String;
  logs:[{
    event: String,
    time: Date
  }];
}
