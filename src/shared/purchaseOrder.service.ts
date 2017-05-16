import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class PurchaseOrderService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'https://qcri-net-api.mybluemix.net/' /*'https://qrci-api.mybluemix.net/'*/ /*'http://localhost:6004/'*/;
  private suppliers;

  constructor(
    private $http: Http
  ) { 
    this.getSuppliers().subscribe(suppliers=>{
      this.suppliers = suppliers
    })
  }

  addPurchaseOrder(purchaseOrder) {
    return this.$http.post(this.url+'api/orders', JSON.stringify(purchaseOrder), {headers: this.headers})
        .map(this.extractData)
        .catch(this.handleError)
  }

  deletePurchaseOrder(orderNumber: string) {
    return this.$http.delete(this.url+'api/orders/'+orderNumber)
        .map(this.extractData)
        .catch(this.handleError)
  }

  getPurchaseOrders(): Observable<any> {
    return this.$http.get(this.url+'api/orders')
        .map(this.extractData)
        .catch(this.handleError)
  }

  getPurchaseOrder(orderNumber: string): Observable<any> {
    return this.$http.get(this.url+'api/orders/'+orderNumber)
        .map(this.extractData)
        .catch(this.handleError)
  }

  getSupplier(id: string) {
    if(this.suppliers){
      return this.suppliers.filter(s=>s.supplierNumber == id)[0]
    }
    // return this.$http.get(this.url+'api/suppliers/'+id)
    //     .map(this.extractData)
    //     .catch(this.handleError)

  }

  getSuppliers(){
    return this.$http.get(this.url+'api/suppliers')
        .map(this.extractData)
        .catch(this.handleError)
  }

  updatePurchaseOrder(purchaseOrder) {
    return this.$http.put(this.url+'api/orders/'+purchaseOrder.orderNumber, JSON.stringify(purchaseOrder), {headers: this.headers})
        .map(this.extractData)
        .catch(this.handleError)
  }

  private extractData(res:Response) {
    let body = res.json();
    return body || [];
  }

  private handleError(error:any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
}
}
