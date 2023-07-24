import { User } from "./user";

export class Product{
  idProd:number=0;
  nameProd:string="";
  descripProd:string="";
  stockProd:number=0;
  priceProd:number=0;
  dateRegisProd:Date = new Date(Date.now());
  dateSaleProd:Date = new Date(Date.now());
  statusProd:string="0";
  user:User = new User();
}
