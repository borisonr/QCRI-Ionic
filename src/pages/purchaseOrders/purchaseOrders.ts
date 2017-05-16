import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PurchaseOrderPage } from '../purchaseOrder/purchaseOrder';
import { PurchaseOrderService } from '../../shared/purchaseOrder.service';

@Component({
  selector: 'page-purchase-orders',
  templateUrl: 'purchaseOrders.html'
})
export class PurchaseOrdersPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, orderNumber: string/*, icon: string*/}>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private purchaseOrderService: PurchaseOrderService,
    private loadingController: LoadingController) {
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create(
      {content: 'Loading purchase orders...'}
    )
    loader.present().then(()=>{
      this.purchaseOrderService.getPurchaseOrders().subscribe(result => {
        this.items = result;
        loader.dismiss()
      })
    })
  }

  itemTapped(event, item) {
    this.navCtrl.push(PurchaseOrderPage, {
      item: item
    });
  }

  refreshOrders(refresher){
      this.purchaseOrderService.getPurchaseOrders().subscribe(result => {
        this.items = result;
        refresher.complete()
      })
  }
}
