import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFoodPage } from './add-food';

@NgModule({
  declarations: [
    AddFoodPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFoodPage),
  ],
})
export class AddFoodPageModule {}
