import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddFoodPage } from '../add-food/add-food';

/**
 * Generated class for the MenuFoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-food',
  templateUrl: 'menu-food.html',
})
export class MenuFoodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuFoodPage');
  }

  fun(){
    this.navCtrl.push(AddFoodPage);
  }

}
