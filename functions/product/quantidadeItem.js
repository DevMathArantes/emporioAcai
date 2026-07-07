import { get } from "../utils/utils.js";

let quantidade;

// Aumenta a quantidade do item a montar
export function aumentarQuantidade() {
    const qtyElem = get('quantidade');
    if (!qtyElem) return;
    quantidade = parseInt(qtyElem.textContent);
    quantidade++;
    qtyElem.textContent = quantidade;
}

// Diminui a quantidade do item a montar
export function diminuirQuantidade() {
    const qtyElem = get('quantidade');
    if (!qtyElem) return;
    quantidade = parseInt(qtyElem.textContent);
    if (quantidade > 1) {
        quantidade--;
        qtyElem.textContent = quantidade;
    }
}
