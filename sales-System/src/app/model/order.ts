import { Client } from "./client";

export class Order{
  idOrder:number=0;
  dateOrder:Date = new Date(Date.now());
  dateDelivOrder:Date = new Date(Date.now());
  statusOrder:string="0";
  client:Client = new Client();
}
