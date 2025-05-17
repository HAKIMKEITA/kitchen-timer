import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Timer } from '../timer.interface';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() timer!: Timer;
  intervalId?: number;

  ngOnInit(): void {
    if (this.timer.remaining === undefined || this.timer.remaining === null) {
      this.timer.remaining = this.timer.duration;
    }
  }

  toggle() {
    if (!this.timer) return;

    if (this.timer.isRunning) {
      clearInterval(this.intervalId);
    } else {
      clearInterval(this.intervalId);
      this.intervalId = window.setInterval(() => {
        if (this.timer.remaining > 0) {
          this.timer.remaining--;
        } else {
          this.stop();
        }
      }, 1000);
    }
    this.timer.isRunning = !this.timer.isRunning;
  }

  stop() {
    this.timer.isRunning = false;
    clearInterval(this.intervalId);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}

