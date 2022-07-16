import { Component, OnInit } from '@angular/core';
import { TestData } from 'src/app/shared/test-data/test-data';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss'],
})
export class GameAreaComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 20;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  gameNumberOfRounds = 0;
  vertical = false;
  tickInterval = 1;
  isGameAccepted = false;
  isGameLoading = false;
  isClicked = false;
  players = TestData.getGamePlayers();
  options = TestData.getGameOptions();
  gameNumberOfRoundsPlayed = 0;
  game: any;
  currentRound: any;

  constructor() {}

  ngOnInit(): void {
    this.resetGame();
  }

  resetGame(): void {
    this.game = {
      rounds: [],
    };
    this.setGameRoundWinners();
  }

  setGameRoundWinners(): void {
    this.game?.rounds?.forEach((round) => {
      round.winner = this.getRoundWinner(round);
      round.display = this.getRoundWinnerDisplay(round);
    });
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }

  clickAcceptGame(): void {
    this.isGameAccepted = this.gameNumberOfRounds >= 1;
    this.isGameLoading = true;
    this.sleep(3000).then((result) => {
      this.isGameLoading = false;
      this.isClicked = true;
    });
  }

  sleep(ms): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  onButtonClickPlay(choice: any): void {
    if (this.gameNumberOfRoundsPlayed <= this.gameNumberOfRounds) {
      const playerTwoChoice = Math.floor(Math.random() * 3);
      this.currentRound = {
        playerOne: { name: this.players[0].name, option: choice },
        playerTwo: {
          name: this.players[1].name,
          option: this.options[playerTwoChoice],
        },
      };
      this.currentRound.winner = this.getRoundWinner(this.currentRound);
      this.currentRound.display = this.getRoundWinnerDisplay(this.currentRound);
      this.game?.rounds?.push(this.currentRound);
      this.gameNumberOfRoundsPlayed++;
    }
  }

  getRoundWinner(round: any): number {
    if (round === null || round === undefined) {
      return null;
    }
    return round?.playerOne?.option?.index ===
      this.optionBeats(round?.playerTwo?.option)
      ? 1
      : round?.playerOne?.option?.index ===
        this.optionLosesTo(round?.playerTwo?.option)
      ? 2
      : 0;
  }

  optionBeats(option: any): number {
    return option?.index === 2 ? 0 : option?.index + 1;
  }

  optionLosesTo(option: any): number {
    return option?.index === 0 ? 2 : option?.index - 1;
  }

  getRoundWinnerDisplay(round: any): string {
    const roundWinner = this.getRoundWinner(round);
    if (roundWinner === null || roundWinner === undefined) {
      return ``;
    }
    switch (roundWinner) {
      case 0:
        return `Game Tied!`;
      case 1:
        return `${round?.playerOne?.name} win(s)!`;
      case 2:
        return `${round?.playerTwo?.name} win(s)!`;
    }
  }

  getPlayerGameRoundsWonCount(playerId: number): number {
    return this.game?.rounds?.filter(
      (round) => round?.winner === playerId
    ).length;
  }
}
