import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
    OrderData = new FormGroup({
    productname : new FormControl(''),
    productquantity : new FormControl(''),
    productprice : new FormControl(''),
    address : new FormControl(''),
    paymentmethod : new FormControl(''),
    mobile : new FormControl(''),
    email : new FormControl(''),
    firstname : new FormControl(''),
    lastname : new FormControl('')
  });
  order: any;
  createOrder: any;

  //UPDATE
    updatedata = new FormGroup({
    orderid : new FormControl(''),
    productquantity : new FormControl(''),
    address : new FormControl('')
  });
  update: any;
  updateorder: any;

  //CANCLE 
    CancleData = new FormGroup({
    orderid : new FormControl('')
  });
  cancle: any;
  cancleorder: any;

  //DELETE 
  deleteData = new FormGroup({
    orderid : new FormControl('')
  });
  deleted: any;
  delOrder: any;
  constructor(private route : ActivatedRoute , private router : Router , private data : DataService ) { }

  ngOnInit() {
  }

  OrderFunction(){
    console.log(this.OrderData.value);
  }
  UpdateFunction(){
    console.log(this.updatedata.value);
  }
  cancleFunction(){
    console.log(this.CancleData.value);
  }
  DeleteFunction(){
    console.log(this.deleteData.value);
  }





  OrderCreateFun(){
    this.data.AddOrder(this.OrderData).subscribe((data: {})=> {
      console.log(data);
      this.order = data;
      this.createOrder = this.order.message;
    });
  }

  updatedataFun(){
    this.data.updateOrder(this.updatedata).subscribe((data: {})=> {
      console.log(data);
      this.update = data;
      this.updateorder = this.update.message;
    })
  }

  CancleDataFun(){
    this.data.cancleorder(this.CancleData).subscribe((data: {})=> {
      console.log(data);
      this.cancle = data;
      this.cancleorder = this.cancle.message;
    })
  }

  DeleteOrderFun(){
    this.data.DeleteOrder(this.deleteData).subscribe((data: {})=>{
      console.log(data);
      this.deleted = data;
      this.delOrder = this.deleted.message;
    })
  }

}
