import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ApplicationComponent } from './application/application.component';
import { ShowAllOrderComponent } from './show-all-order/show-all-order.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ApplicationComponent,
    ShowAllOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
