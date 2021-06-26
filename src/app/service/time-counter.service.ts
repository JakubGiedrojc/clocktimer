import {Injectable} from '@angular/core';
import {TimeModel} from "../time.model";

@Injectable({
  providedIn: 'root'
})
export class TimeCounterService {

  constructor() {
  }

  public countDown(time: TimeModel, isPaused: boolean) {
    if (!isPaused) {
      if (time.seconds > 0) {
        time.seconds -= 1;
      } else {
        time.seconds = 59;
        time.minutes -= 1;
      }
    }
  }
}
