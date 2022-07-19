import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.scss'],
})
export class GameScoreComponent implements OnInit {
  @Input() public currentGame: any;

  constructor() {}

  ngOnInit(): void {}
}
