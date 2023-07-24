import { Order } from "./order";
import { Product } from "./product";

export class DetailOrder{
  idDetOrder:number=0;
  desDetOrder:string="";
  catDetOrder:number=0;
  subDetOrder:number=0;
  statusDetOrder:string="0";
  prod:Product = new Product();
  order:Order = new Order();
}
