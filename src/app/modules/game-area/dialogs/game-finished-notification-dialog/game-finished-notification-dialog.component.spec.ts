import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFinishedNotificationDialogComponent } from './game-finished-notification-dialog.component';

describe('GameFinishedNotificationDialogComponent', () => {
  let component: GameFinishedNotificationDialogComponent;
  let fixture: ComponentFixture<GameFinishedNotificationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFinishedNotificationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFinishedNotificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
