import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-all-order',
  templateUrl: './show-all-order.component.html',
  styleUrls: ['./show-all-order.component.css']
})
export class ShowAllOrderComponent implements OnInit {
  view: any;
  vieworder: any;
  placed: any;
  placedorder: any;
  purchased: any;
  purchasedorder: any;
  cancle: any;
  cancleorder: any;
  cancleReco: any;

  constructor(private route : ActivatedRoute , private router : Router , private data : DataService) { }

  ngOnInit() {
    this.fetchAllOrder()
    this.fetchShowPlacedOrder()
    this.fetchShowPurchased()
    this.fetchshowcancledorder()
  }
 
  a = false;
  b = false;

  fetchAllOrder(){
    return this.data.getallorder().subscribe((items: any)=>{
      console.log(items);
      this.view = items;
      this.vieworder = this.view.message;

      //condition
      if(this.vieworder=='No orders Found'){
        this.a = false;
        this.b = true;
      }else{
        this.a = true;
        this.b = false;
      }
    })
  }

  x = false;
  y = false;

  fetchShowPlacedOrder(){
    return this.data.getplacedorder().subscribe((items: any)=> {
      console.log(items,"PLACED");
      this.placed = items;
      this.placedorder = this.placed.message;

      //condition
      if(this.placedorder=="No records Found!"){
        this.x = false;
        this.y = true;
      }else{
        this.x = true;
        this.y = false;
      }
    })
  }

  w = false;
  e = false;

  fetchShowPurchased(){
    return this.data.getpurchasedorder().subscribe((items: any)=>{
      console.log(items,"PURCHASED");
      this.purchased = items;
      this.purchasedorder = this.purchased.message;

      //condition
      if(this.purchasedorder=="No records found!"){
        this.w = false;
        this.e = true;
      }else{
        this.w = true;
        this.e = false;
      }
    })
  }

  fetchshowcancledorder(){
    return this.data.getcancledorders().subscribe((items: any)=> {
      console.log(items,"CANCELLED");
      this.cancle = items;
      this.cancleReco = this.cancle.message;
    });
  }

}
