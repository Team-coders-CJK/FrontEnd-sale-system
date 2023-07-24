import { Seller } from "./seller";

export class User{
  idUser:number=0;
  nameUser:string="";
  passwordUser:string="";
  typeUser:string="";
  dateRegisterUser:Date = new Date(Date.now());
  statusUser:string="0";
  seller:Seller = new Seller();
}
