import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayRoundWinnerComponent } from './game-play-round-winner.component';

describe('GamePlayRoundWinnerComponent', () => {
  let component: GamePlayRoundWinnerComponent;
  let fixture: ComponentFixture<GamePlayRoundWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePlayRoundWinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlayRoundWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
