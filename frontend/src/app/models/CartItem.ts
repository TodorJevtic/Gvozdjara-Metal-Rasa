import { Proizvod } from "./Proizvod";

export class CartItem{
  constructor(public proizvod:Proizvod){
  }
  quantity:number = 1;
  price: number = this.proizvod.cena;
}
