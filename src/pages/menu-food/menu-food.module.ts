import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuFoodPage } from './menu-food';

@NgModule({
  declarations: [
    MenuFoodPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuFoodPage),
  ],
})
export class MenuFoodPageModule {}
