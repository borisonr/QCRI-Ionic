import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PurchaseOrdersPage } from '../pages/purchaseOrders/purchaseOrders';
import { PurchaseOrderPage } from '../pages/purchaseOrder/purchaseOrder';
import { PurchaseOrderService } from '../shared/purchaseOrder.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CommonQCRIModule } from 'qcri-common';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PurchaseOrdersPage,
    PurchaseOrderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    CommonQCRIModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PurchaseOrdersPage,
    PurchaseOrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PurchaseOrderService,
    BarcodeScanner,    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
