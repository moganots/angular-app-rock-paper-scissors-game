import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-spinner',
  templateUrl: './game-spinner.component.html',
  styleUrls: ['./game-spinner.component.scss']
})
export class GameSpinnerComponent implements OnInit {
  @Input() public currentGame: any;

  constructor() { }

  ngOnInit(): void {
  }

}
