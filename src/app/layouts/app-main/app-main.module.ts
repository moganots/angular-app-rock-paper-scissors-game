import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMainComponent } from './app-main.component';
import { AppMainRoutes } from './app-main.routes';
import { AppModulesModule } from '../../modules/app-modules.module';
import { AppComponentsModule } from '../../components/app-components.module';

export { AppMainComponent } from './app-main.component';

@NgModule({
  declarations: [AppMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AppMainRoutes),
    AppComponentsModule,
    AppModulesModule
  ]
})
export class AppMainModule { }
