import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-play-round-winner',
  templateUrl: './game-play-round-winner.component.html',
  styleUrls: ['./game-play-round-winner.component.scss']
})
export class GamePlayRoundWinnerComponent implements OnInit {
  @Input() public currentGame: any;
  @Input() public currentRound: any;
  @Input() public isGameStarted = false;

  constructor() { }

  ngOnInit(): void {
  }

}
