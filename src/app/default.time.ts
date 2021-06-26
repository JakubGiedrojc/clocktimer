import {TimeModel} from "./time.model";

export class DefaultTime {

  defaultTime: TimeModel={

  seconds: 59,
  minutes: 0
};
  public getDefaultTime(): TimeModel {
    return this.defaultTime;
  }
  public setDefaultTime(minutes: number){
    this.defaultTime.minutes=minutes;
  }

}
