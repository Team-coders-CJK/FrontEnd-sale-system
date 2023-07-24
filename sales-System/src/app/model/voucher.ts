import { Client } from "./client";
import { Order } from "./order";
import { Seller } from "./seller";

export class Voucher{
  idVoucher:number=0;
  totalVoucher:number=0;
  typeVoucher:string="";
  statusVoucher:string="";
  client:Client = new Client();
  order:Order = new Order();
  seller:Seller = new Seller();
}
