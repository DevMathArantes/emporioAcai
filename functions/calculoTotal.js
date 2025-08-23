import { compra, taxaEntrega } from "../script.js";
import { entrega } from "./link.js";


let item;
let total;

export function calculoTotal(){
    
    total = 0.00;

    if(entrega){
        total+=taxaEntrega;
    }

    for(let i = 0; i < compra.length; i++){
        item = compra[i];
        total+=parseFloat(item[3]);
    }

    return(total);
}