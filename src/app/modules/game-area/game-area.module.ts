import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { GameAreaComponent } from './components/game-area.component';
import { FormsModule } from '@angular/forms';

export { GameAreaComponent } from './components/game-area.component';
export { GameAreaConfiguration } from './configuration/game-area.configuration';

@NgModule({
  declarations: [GameAreaComponent],
  imports: [CommonModule, FormsModule, MatSliderModule],
})
export class GameAreaModule {}
