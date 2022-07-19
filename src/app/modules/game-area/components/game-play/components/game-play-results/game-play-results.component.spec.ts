import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayResultsComponent } from './game-play-results.component';

describe('GamePlayResultsComponent', () => {
  let component: GamePlayResultsComponent;
  let fixture: ComponentFixture<GamePlayResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamePlayResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlayResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
