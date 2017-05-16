import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-purchase-order',
  templateUrl: 'purchaseOrder.html'
})
export class PurchaseOrderPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }

  itemTapped(event, item) {
    this.navCtrl.push(PurchaseOrderPage, {
      item: item
    });
  }

  goHome(){
    this.navCtrl.popToRoot()
  }
}
