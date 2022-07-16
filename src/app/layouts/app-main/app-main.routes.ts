import { Routes } from '@angular/router';
import { GameAreaConfiguration, GameAreaComponent } from './../../modules/game-area/game-area.module';

export const AppMainRoutes: Routes = [
    {
      path: GameAreaConfiguration.pageRoute,
      pathMatch: 'full',
      component: GameAreaComponent,
      // canActivate: [AuthenticationGuardService],
    },
];
