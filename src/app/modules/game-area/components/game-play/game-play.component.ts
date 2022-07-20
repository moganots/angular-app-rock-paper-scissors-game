import { Component, Input, OnInit } from '@angular/core';
import { TestData } from 'src/app/shared/test-data/test-data';
import { Helpers } from 'src/app/shared/utilities/helpers';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss'],
})
export class GamePlayComponent implements OnInit {
  @Input() public currentGame: any;
  gameChoices = TestData.getgameChoices();
  isNewRound = false;

  constructor() {}

  ngOnInit(): void {}

  onButtonClickPlay(playerOneChoice: any): void {
    if (
      this.currentGame?.numberOfRoundsPlayed < this.currentGame?.numberOfRounds
    ) {
      this.isNewRound = true;
      this.currentGame.isOptionClicked = true;
      const playerTwoChoice = TestData.getgameChoiceById(
        Math.floor(Math.random() * 3)
      );
      this.currentGame.playerOne.lastChoice = playerOneChoice;
      this.currentGame.playerTwo.lastChoice = playerTwoChoice;
      const gameRound = this.getCurrentGameNewRound();
      Helpers.AddIf(gameRound, this.currentGame?.rounds);
      this.isNewRound = false;
      this.updateCurrentGamePlayerRoundWins();
      this.currentGame.numberOfRoundsPlayed++;
    }
  }

  getCurrentGameNewRound(): any {
    if (this.currentGame?.isOptionClicked && this.isNewRound) {
      const roundWinner = this.getCurrentGameNewRoundWinner();
      return {
        playerOne: { ...this.currentGame?.playerOne },
        playerTwo: { ...this.currentGame?.playerTwo },
        winner: roundWinner,
        display: this.getCurrentGameNewRoundWinnerDisplay(roundWinner),
      };
    }
    return null;
  }

  getCurrentGameNewRoundWinner(): number {
    if (!this.currentGame?.isOptionClicked || !this.isNewRound) {
      return 0;
    }
    return this.currentGame?.playerOne?.lastChoice?.index ===
      this.choiceBeats(this.currentGame?.playerTwo?.lastChoice)
      ? 1
      : this.currentGame?.playerOne?.lastChoice?.index ===
        this.choiceLosesTo(this.currentGame?.playerTwo?.lastChoice)
      ? 2
      : 0;
  }

  choiceBeats(choice: any): number {
    return choice?.index === 2 ? 0 : choice?.index + 1;
  }

  choiceLosesTo(choice: any): number {
    return choice?.index === 0 ? 2 : choice?.index - 1;
  }

  getCurrentGameNewRoundWinnerDisplay(roundWinner: number): any {
    switch (roundWinner) {
      case 0:
        return 'Game Tied!';
      case 1:
        return `${this.currentGame?.playerOne?.name} win(s)`;
      case 2:
        return `${this.currentGame?.playerTwo?.name} win(s)`;
      default:
        return ``;
    }
  }

  updateCurrentGamePlayerRoundWins(): void {
    this.currentGame.playerOne.roundsWon = this.currentGame?.rounds?.filter(
      (round) => round?.winner === 1
    )?.length;
    this.currentGame.playerTwo.roundsWon = this.currentGame?.rounds?.filter(
      (round) => round?.winner === 2
    )?.length;
    this.currentGame.winner =
      this.currentGame?.playerOne?.roundsWon >
      this.currentGame?.playerTwo?.roundsWon
        ? this.currentGame?.playerOne
        : this.currentGame?.playerOne?.roundsWon <
          this.currentGame?.playerTwo?.roundsWon
        ? this.currentGame?.playerTwo
        : null;
  }
}
