import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-game-finished-notification-dialog',
  templateUrl: './game-finished-notification-dialog.component.html',
  styleUrls: ['./game-finished-notification-dialog.component.scss'],
})
export class GameFinishedNotificationDialogComponent implements OnInit {
  @Input() public currentGame: any;

  constructor() {}

  ngOnInit(): void {}
}
