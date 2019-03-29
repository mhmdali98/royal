import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { MenuFoodPage } from '../menu-food/menu-food';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
    
  }

  listFun(){
    this.navCtrl.push(MenuFoodPage);
  }

 
}
