import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/nav/main/main.component';
import { ProductComponent } from './component/product/product.component';
import { InsertUpdateProductComponent } from './component/product/insert-update/insert-update.component';
import { ClientComponent } from './component/client/client.component';
import { InsertUpdateClientComponent } from './component/client/insert-update/insert-update.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pages',
    component: MainComponent,
    children: [
      {
        path: 'products',
        component: ProductComponent,
        children: [
          {
            path: 'products-insert',
            component: InsertUpdateProductComponent,
          },
          {
            path: 'edicion/:id',
            component: InsertUpdateProductComponent,
          },
        ]
      },
      {
        path: 'clients',
        component: ClientComponent,
        children: [
          {
            path: 'clients-insert',
            component:InsertUpdateClientComponent ,
          },
          {
            path: 'edicion/:id',
            component: InsertUpdateClientComponent,
          },
        ]
      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
