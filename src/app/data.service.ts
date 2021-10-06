import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { FormGroup } from '@angular/forms';


 //USER 
 export class user {
  firstname : string | undefined;
  lastname : string | undefined;
  email : string | undefined;
  password : string | undefined;
  mobile : Number | undefined;
}

//LOGIN 
export class loginuser {
  email: string | undefined;
  password : string | undefined;
}

//ORDER
export class order {
    productname: String | undefined;
    productquantity: Number | undefined;
    productprice: Number | undefined;
    totalprice:Number | undefined
    address:String | undefined;
    paymentmethod:String | undefined;
    mobile:String | undefined;
    email:String | undefined;
    firstname:String | undefined;
    lastname:String | undefined;
}

//UPDATE ORDER
export class updateOrder {
  orderid : string | undefined;
  productquantity : Number | undefined;
  address : string | undefined;
}

//CANCLE ORDER
export class cancleorder {
  orderid : string | undefined;
}

//DELETE ORDER
export class deleteorder {
  orderid : string | undefined;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint = 'http://localhost:9020';
  AddResult: any;
  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  //Get data from MongoDB
  getallorder(): Observable<order> {
    return this.httpClient.get<order>(this.endPoint + '/api/ViewOrderData');
  }

  getplacedorder():Observable<order> {
    return this.httpClient.get<order>(this.endPoint + '/api/PlacedCount');
  }

  getpurchasedorder():Observable<order> {
    return this.httpClient.get<order>(this.endPoint + '/api/purchasedCount');
  }

  getcancledorders():Observable<order> {
    return this.httpClient.get<order>(this.endPoint + '/api/CancledCount');
  }











  //Add data 
  Addusers(data: FormGroup): Observable<user> {

    let savedata = {
      "firstname":data.value.firstname,
      "lastname":data.value.lastname,
      "email":data.value.email,
      "password":data.value.password,
      "mobile":data.value.mobile
    }
    console.log(savedata,"SAVE USER DATA");
    return this.httpClient.post<user>(this.endPoint + '/api/user',JSON.stringify(savedata),this.httpHeader)
    }

//LOGIN USER
  LoginUser(data: FormGroup):Observable<loginuser> {

    let logindata = {
      "email":data.value.email,
      "password":data.value.password
    }
    console.log(logindata,"LOGIN USER");
    return this.httpClient.post<loginuser>(this.endPoint + '/api/LoginUser',JSON.stringify(logindata),this.httpHeader)
  }

  //ORDER
  AddOrder(data: FormGroup):Observable<order> {

    let adddata = {
    "productname": data.value.productname,
    "productquantity": data.value.productquantity,
    "productprice": data.value.productprice,
    "totalprice":data.value.totalprice,
    "address": data.value.address,
    "paymentmethod": data.value.paymentmethod,
    "mobile": data.value.mobile,
    "email": data.value.email,
    "firstname": data.value.firstname,
    "lastname": data.value.lastname
    }
    console.log(adddata,"ORDER");
    return this.httpClient.post<order>(this.endPoint + '/api/CreateOrder',JSON.stringify(adddata),this.httpHeader)
  }


  //UPDATE ORDER 
  updateOrder(data: FormGroup):Observable<updateOrder> {

    let updatedatas = {
      "orderid":data.value.orderid,
      "productquantity":data.value.productquantity,
      "address":data.value.address
    }
    console.log(updatedatas,"UPDATE ORDER");
    return this.httpClient.post<updateOrder>(this.endPoint + '/api/UpdateOrders',JSON.stringify(updatedatas),this.httpHeader)
  }

  //CANCLE ORDER 
  cancleorder(data: FormGroup):Observable<cancleorder> {
    
   let cancledata = {
      "orderid":data.value.orderid
    }
    console.log(cancledata,"CANCLE ORDER");
    return this.httpClient.post<cancleorder>(this.endPoint + '/api/CancleOrders',JSON.stringify(cancledata), this.httpHeader)

  }

  //DELETE ORDER 
  DeleteOrder(data: FormGroup):Observable<deleteorder> {

    let deletedata = {
      "orderid":data.value.orderid
    }
    console.log(deletedata,"DELETE");
    return this.httpClient.post<deleteorder>(this.endPoint + '/api/DeleteOrder',JSON.stringify(deletedata),this.httpHeader)
  }

}
