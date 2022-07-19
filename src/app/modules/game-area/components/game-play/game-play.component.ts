import { Component, Input, OnInit } from '@angular/core';
import { TestData } from 'src/app/shared/test-data/test-data';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss'],
})
export class GamePlayComponent implements OnInit {
  @Input() public currentGame: any;
  @Input() public currentRound: any;
  gameChoices = TestData.getgameChoices();

  constructor() {}

  ngOnInit(): void {}

  onButtonClickPlay(playerOneChoice: any): void {
    if (
      this.currentGame?.numberOfRoundsPlayed < this.currentGame?.numberOfRounds
    ) {
      this.currentGame.isOptionClicked = true;
      const playerTwoChoice = TestData.getgameChoiceById(
        Math.floor(Math.random() * 3)
      );
      this.setPlayerGameRoundChoice(
        this.currentRound?.playerOne,
        playerOneChoice
      );
      this.setPlayerGameRoundChoice(
        this.currentRound?.playerTwo,
        playerTwoChoice
      );
      this.updateGameRound(this.currentGame, playerOneChoice, playerTwoChoice);
      this.currentGame.numberOfRoundsPlayed++;
    }
  }

  setPlayerGameRoundChoice(player: any, choice: any): void {
    if (player && choice) {
      player.lastChoice = choice;
    }
  }

  updateGameRound(game: any, playerOneChoice: any, playerTwoChoice: any): void {
    if (game && playerOneChoice && playerTwoChoice) {
      game.playerOne.lastChoice = playerOneChoice;
      game.playerTwo.lastChoice = playerTwoChoice;
      this.updateCurrentGameRound(game);
      game?.rounds?.push(this.currentRound);
    }
  }

  updateCurrentGameRound(game: any): void {
    if (game) {
      this.currentRound = {
        playerOne: game?.playerOne,
        playerTwo: game?.playerTwo,
        winner: this.getCurrentGameRoundWinner(game),
      };
      this.currentRound.display = this.getCurrentGameRoundWinnerDisplay(
        this.currentRound
      );
      this.updatePlayerGameRoundWins(game, this.currentRound);
    }
  }

  getCurrentGameRoundWinner(game: any): number {
    return game &&
      game?.playerOne?.lastChoice?.index ===
        this.choiceBeats(game?.playerTwo?.lastChoice)
      ? 1
      : game &&
        game?.playerOne?.lastChoice?.index ===
          this.choiceLosesTo(game?.playerTwo?.lastChoice)
      ? 2
      : 0;
  }

  choiceBeats(choice: any): number {
    return choice?.index === 2 ? 0 : choice?.index + 1;
  }

  choiceLosesTo(choice: any): number {
    return choice?.index === 0 ? 2 : choice?.index - 1;
  }

  getCurrentGameRoundWinnerDisplay(gameRound: any): string {
    switch (gameRound?.winner) {
      case 0:
        return `Game Tied!`;
      case 1:
        return `${gameRound?.playerOne?.name} wins!`;
      case 2:
        return `${gameRound?.playerTwo?.name} wins!`;
      default:
        return ``;
    }
  }

  updatePlayerGameRoundWins(game: any, gameRound: any): void {
    if (game && gameRound) {
      switch (gameRound.winner) {
        case 1:
          gameRound.playerOne.roundsWon++;
          break;
        case 2:
          gameRound.playerTwo.roundsWon++;
          break;
      }
      game.winner =
        gameRound.playerOne.roundsWon > gameRound.playerTwo.roundsWon
          ? gameRound.playerOne
          : gameRound.playerOne.roundsWon < gameRound.playerTwo.roundsWon
          ? gameRound.playerTwo
          : null;
    }
  }
}
