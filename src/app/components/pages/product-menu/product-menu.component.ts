import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/shared/services/item.service';
@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {
 orders:any;
  constructor(private _itemService:ItemService) { }

  ngOnInit(): void {
    this.LoadProducts()
  }
  LoadProducts(){
    this._itemService.GetAllOrders().subscribe(r=>{
      this.orders=r;
    })
  }
  RemoveProduct(id:number){
    this._itemService.DeleteProducts(id).subscribe((result:any)=>{
      this.LoadProducts()
    })
  }
}
