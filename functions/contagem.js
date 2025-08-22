import { get } from "./utils.js";
import { compra } from "../script.js";

export function atualizarContagem(){
    get('contagem').innerHTML= compra.length;
}