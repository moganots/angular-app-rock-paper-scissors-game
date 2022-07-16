import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMainModule } from './app-main/app-main.module';

export { AppMainModule } from './app-main/app-main.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMainModule
  ]
})
export class AppLayoutsModule { }
