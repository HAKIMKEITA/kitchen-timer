import { Injectable } from '@angular/core';
import { Timer } from './timer.interface';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timers: Timer[] = [];

  getTimers(): Timer[] {
    return this.timers;
  }

  addTimer(name: string, duration: number): void {
    const id = Date.now();
    const timer: Timer = {
      id,
      name,
      duration,
      remaining: duration,
      isRunning: false,
    };
    this.timers.push(timer);
  }

  resetTimers(): void {
    this.timers.forEach(timer => {
      timer.remaining = timer.duration;
      timer.isRunning = false;
    });
  }
}
