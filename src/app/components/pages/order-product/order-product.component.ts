import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { ItemService } from 'src/app/shared/services/item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
orderdata:FormGroup
  constructor(private _itemService:ItemService,private _router:Router,) {
    this.orderdata=new FormGroup({
      "product":new FormControl(''),
      "customer":new FormControl('')
})
   }

  ngOnInit(): void {}
    
    
  submit(){
  
    let order= {...this.orderdata.value};
    order["time"]=new Date()
    this._itemService.CreateProducts(order).subscribe((result:any)=>{
      this.orderdata.reset()
    })
  }
}