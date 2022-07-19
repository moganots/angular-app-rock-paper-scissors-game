import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSpinnerComponent } from './game-spinner.component';

describe('GameSpinnerComponent', () => {
  let component: GameSpinnerComponent;
  let fixture: ComponentFixture<GameSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
