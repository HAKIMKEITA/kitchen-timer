import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer.service';
import { Timer } from './timer.interface';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    TimerComponent
  ]
})
export class AppComponent implements OnInit {
  timers: Timer[] = [];
  newName = '';
  newDuration = 60;

  constructor(private timerService: TimerService) {}

  ngOnInit() {
    this.timers = this.timerService.getTimers();
  }

  addTimer() {
    if (this.newName && this.newDuration > 0) {
      this.timerService.addTimer(this.newName, this.newDuration);
      this.newName = '';
      this.newDuration = 60;
    }
  }
}
