import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import{Title} from '@angular/platform-browser'
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEel-f_NVTwmy9cw3QHs-vp8RxeIxjAG9Zw&usqp=CAU"
orders:any;
  constructor(private _router:Router,private _title:Title,private _itemService:ItemService) { 
    this._title.setTitle("Dashboard")
  }

  ngOnInit(): void {
  }
  logout(){
    this._router.navigate(["/sign-up"])
  }
  AllProducts(){
  this._itemService.GetAllOrders().subscribe(result=>{
    console.log(result)
    this.orders(result)
  })
    
  }

}
