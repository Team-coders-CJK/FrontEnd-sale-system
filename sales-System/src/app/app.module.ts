import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { ClientComponent } from './component/client/client.component';
import { ListComponent } from './component/client/list/list.component';
import { InsertUpdateComponent } from './component/client/insert-update/insert-update.component';
import { OrderComponent } from './component/order/order.component';
import { SellerComponent } from './component/seller/seller.component';
import { UserComponent } from './component/user/user.component';
import { VoucherComponent } from './component/voucher/voucher.component';
import { DetailOrderComponent } from './component/detail-order/detail-order.component';
import { DetailVoucherComponent } from './component/detail-voucher/detail-voucher.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ClientComponent,
    ListComponent,
    InsertUpdateComponent,
    OrderComponent,
    SellerComponent,
    UserComponent,
    VoucherComponent,
    DetailOrderComponent,
    DetailVoucherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
