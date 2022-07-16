import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameAreaModule } from './game-area/game-area.module';

export { GameAreaModule } from './game-area/game-area.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GameAreaModule
  ]
})
export class AppModulesModule { }
