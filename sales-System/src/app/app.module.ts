import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { ClientComponent } from './component/client/client.component';
import { ListComponent } from './component/client/list/list.component';
import { InsertUpdateClientComponent} from './component/client/insert-update/insert-update.component';
import { OrderComponent } from './component/order/order.component';
import { SellerComponent } from './component/seller/seller.component';
import { UserComponent } from './component/user/user.component';
import { VoucherComponent } from './component/voucher/voucher.component';
import { DetailOrderComponent } from './component/detail-order/detail-order.component';
import { DetailVoucherComponent } from './component/detail-voucher/detail-voucher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './component/nav/nav.component';
import { MainComponent } from './component/nav/main/main.component';
import { SideNavbarComponent } from './component/nav/side-navbar/side-navbar.component';
import { SidebarComponent } from './component/nav/sidebar/sidebar.component';

//angular material
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LayoutModule } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
//import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InsertUpdateProductComponent } from './component/product/insert-update/insert-update.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ClientComponent,
    ListComponent,
    InsertUpdateClientComponent,
    InsertUpdateProductComponent,
    OrderComponent,
    SellerComponent,
    UserComponent,
    VoucherComponent,
    DetailOrderComponent,
    DetailVoucherComponent,
    NavComponent,
    MainComponent,
    SideNavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    LayoutModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
