import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-play-results',
  templateUrl: './game-play-results.component.html',
  styleUrls: ['./game-play-results.component.scss']
})
export class GamePlayResultsComponent implements OnInit {
  @Input() public currentGame: any;

  constructor() { }

  ngOnInit(): void {
  }

}
