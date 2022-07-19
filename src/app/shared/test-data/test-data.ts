import { Helpers } from '../utilities/helpers';

export class TestData {
  public static getGamePlayers(): any[] {
    return [
      { name: `Player One`, roundsWon: 0 },
      { name: `Computer`, roundsWon: 0 },
    ];
  }
  public static getPlayerById(id: number): any {
    return this.getGamePlayers()?.find((player, index) => index === id);
  }
  public static getgameChoices(): any[] {
    return [
      {
        index: 0,
        name: `Rock`,
        imgSrc: `./../../../../assets/img/rock (1).png`,
      },
      {
        index: 1,
        name: `Paper`,
        imgSrc: `./../../../../assets/img/paper (1).png`,
      },
      {
        index: 2,
        name: `Scissors`,
        imgSrc: `./../../../../assets/img/scissors (1).png`,
      },
    ];
  }
  public static getgameChoiceById(id: number): any {
    return this.getgameChoices()?.find(
      (option, index) => option?.index === id || index === id
    );
  }
  public static getgameChoiceByName(name: string): any {
    return this.getgameChoices()?.find(
      (option) => option?.name === name
    );
  }
  public static getGamePlayerRounds(): any[] {
    return [
      {
        playerOne: {
          name: this.getPlayerById(0)?.name,
          option: this.getgameChoiceById(0),
        },
        playerTwo: {
          name: this.getPlayerById(1)?.name,
          option: this.getgameChoiceById(0),
        },
      },
      {
        playerOne: {
          name: this.getPlayerById(0)?.name,
          option: this.getgameChoiceById(0),
        },
        playerTwo: {
          name: this.getPlayerById(1)?.name,
          option: this.getgameChoiceById(1),
        },
      },
      {
        playerOne: {
          name: this.getPlayerById(0)?.name,
          option: this.getgameChoiceById(0),
        },
        playerTwo: {
          name: this.getPlayerById(1)?.name,
          option: this.getgameChoiceById(2),
        },
      },
      {
        playerOne: {
          name: this.getPlayerById(0)?.name,
          option: this.getgameChoiceById(1),
        },
        playerTwo: {
          name: this.getPlayerById(1)?.name,
          option: this.getgameChoiceById(1),
        },
      },
      {
        playerOne: {
          name: this.getPlayerById(0)?.name,
          option: this.getgameChoiceById(1),
        },
        playerTwo: {
          name: this.getPlayerById(1)?.name,
          option: this.getgameChoiceById(0),
        },
      },
      {
        playerOne: {
          name: this.getPlayerById(0)?.name,
          option: this.getgameChoiceById(1),
        },
        playerTwo: {
          name: this.getPlayerById(1)?.name,
          option: this.getgameChoiceById(2),
        },
      },
      {
        playerOne: {
          name: this.getPlayerById(0)?.name,
          option: this.getgameChoiceById(2),
        },
        playerTwo: {
          name: this.getPlayerById(1)?.name,
          option: this.getgameChoiceById(0),
        },
      },
      {
        playerOne: {
          name: this.getPlayerById(0)?.name,
          option: this.getgameChoiceById(2),
        },
        playerTwo: {
          name: this.getPlayerById(1)?.name,
          option: this.getgameChoiceById(1),
        },
      },
      {
        playerOne: {
          name: this.getPlayerById(0)?.name,
          option: this.getgameChoiceById(2),
        },
        playerTwo: {
          name: this.getPlayerById(1)?.name,
          option: this.getgameChoiceById(2),
        },
      },
    ];
  }
}
