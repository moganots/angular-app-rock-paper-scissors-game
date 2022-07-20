import { Component, Input, OnInit } from '@angular/core';
import { TestData } from 'src/app/shared/test-data/test-data';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss'],
})
export class GameAreaComponent implements OnInit {
  @Input() public playerOne = TestData.getPlayerById(0);
  @Input() public playerTwo = TestData.getPlayerById(1);
  @Input() public currentGame: any;

  constructor() {}

  ngOnInit(): void {
    this.onResetGame();
  }

  onResetGame(): void {
    this.onResetPlayer(this.playerOne);
    this.onResetPlayer(this.playerTwo);
    this.currentGame = {
      playerOne: this.playerOne,
      playerTwo: this.playerTwo,
      numberOfRounds: 0,
      numberOfRoundsPlayed: 0,
      isGameActive: false,
      isGameLoading: false,
      isGameLoaded: false,
      isOptionClicked: false,
      rounds: [],
      winner: null,
    };
  }

  onResetPlayer(player: any): void {
    if (player) {
      player.lastChoice = null;
      player.roundsWon = 0;
    }
  }

  onButtonClickStartGame(): void {
    this.currentGame.isGameActive = this.currentGame.numberOfRounds >= 1;
    this.currentGame.isGameLoading = true;
    this.sleep(5000).then((result) => {
      this.currentGame.isGameLoading = false;
      this.currentGame.isGameLoaded = true;
    });
  }

  sleep(ms): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
