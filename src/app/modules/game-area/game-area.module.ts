import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { GameAreaComponent } from './game-area.component';
import { FormsModule } from '@angular/forms';
import { GameSliderComponent } from './components/game-slider/game-slider.component';
import { GameScoreComponent } from './components/game-score/game-score.component';
import { GameSpinnerComponent } from './components/game-spinner/game-spinner.component';
import { GamePlayComponent } from './components/game-play/game-play.component';
import { GamePlayRoundWinnerComponent } from './components/game-play/components/game-play-round-winner/game-play-round-winner.component';
import { GamePlayResultsComponent } from './components/game-play/components/game-play-results/game-play-results.component';
import { GameFinishedNotificationDialogComponent } from './dialogs/game-finished-notification-dialog/game-finished-notification-dialog.component';

export { GameAreaComponent } from './game-area.component';
export { GameAreaConfiguration } from './configuration/game-area.configuration';

@NgModule({
  declarations: [
    GameAreaComponent,
    GameSliderComponent,
    GameScoreComponent,
    GameSpinnerComponent,
    GamePlayComponent,
    GamePlayRoundWinnerComponent,
    GamePlayResultsComponent,
    GameFinishedNotificationDialogComponent,
  ],
  imports: [CommonModule, FormsModule, MatDialogModule, MatSliderModule],
})
export class GameAreaModule {}
