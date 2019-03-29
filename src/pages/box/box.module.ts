import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoxPage } from './box';

@NgModule({
  declarations: [
    BoxPage,
  ],
  imports: [
    IonicPageModule.forChild(BoxPage),
  ],
})
export class BoxPageModule {}
