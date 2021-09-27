import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEURL, EndPoint } from 'apirouter/URL';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _httpclient: HttpClient) {}

GetAllOrders(){ 
   return this._httpclient.get(`${BASEURL}${EndPoint.order}`)
}
DeleteProducts(id:number){
  return this._httpclient.delete(`${BASEURL}${EndPoint.order}/${id}`)
}
CreateProducts(order:any){
  return this._httpclient.post(`${BASEURL}${EndPoint.order}`,order)
 }
}
/*UpdateProducts(id:number){
   return this._httpclient.put(`${BASEURL}${EndPoint.order}/${id}`)}*/
