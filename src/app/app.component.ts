import {Component} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";
import {TimeModel} from "./time.model";
import {DefaultTime} from "./default.time";
import {TimeCounterService} from "./service/time-counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-project';
  time: TimeModel=DefaultTime.getDefaultTime();

  subscription?: Subscription;
  isPaused:boolean=true;

  constructor(private timeCounterService:TimeCounterService) {
  }

  ngOnInit(): void {
  }

  private countDown() {
    if (!this.isPaused) {
      if (this.time.seconds > 0) {
        this.time.seconds -= 1;
      } else {
        this.time.seconds = 59;
      }
      if (this.time.minutes === 0 && this.time.seconds === 0) {
        this.subscription?.unsubscribe();
      }
    }
  }

  togglePause(){
    this.isPaused=!this.isPaused;
    if(!this.isPaused){
      this.subscription = interval(1000).subscribe(value => {
        this.timeCounterService.countDown(this.time,this.isPaused);
        if (this.time.minutes === 0 && this.time.seconds === 0) {
          this.subscription?.unsubscribe();
          this.isPaused=true;
          this.playAudio();
        }
      })
    } else {this.subscription?.unsubscribe();

    }

  }
  resetTime(){
    this.time=DefaultTime.getDefaultTime();
  }

  private playAudio(){
    let audio = new Audio();
    audio.src ='../../assets/audio/TF013.WAV';
    audio.load();
    audio.play();
  }


}
