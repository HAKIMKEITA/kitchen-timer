import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimerComponent } from './timer.component';
import { CommonModule } from '@angular/common';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerComponent],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;

    component.timer = {
      id: 1,
      name: 'Test Timer',
      duration: 60,
      remaining: 60,
      isRunning: false
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle timer running state', () => {
    expect(component.timer.isRunning).toBeFalse();

    component.toggle();
    expect(component.timer.isRunning).toBeTrue();

    component.toggle();
    expect(component.timer.isRunning).toBeFalse();
  });
});
