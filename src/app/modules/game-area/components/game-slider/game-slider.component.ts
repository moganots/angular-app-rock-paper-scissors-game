import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-slider',
  templateUrl: './game-slider.component.html',
  styleUrls: ['./game-slider.component.scss'],
})
export class GameSliderComponent implements OnInit {
  @Input() public currentGame: any;
  @Output() public clickStartGame: EventEmitter<any> = new EventEmitter();
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 20;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  vertical = false;
  tickInterval = 1;

  constructor() {}

  ngOnInit(): void {}

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }

  onButtonClickStartGame(): void {
    this.clickStartGame.emit();
  }
}
