import { Product } from "./product";
import { Voucher } from "./voucher";

export class DetailVoucher{
  idDetVoucher:number=0;
  nameProd:string ="";
  priceProd:string="";
  quantityProd:number=0;
  subTotDetVou:number=0;
  statusDetVou:string="0";
  voucher:Voucher = new Voucher();
  prod:Product = new Product();

}
