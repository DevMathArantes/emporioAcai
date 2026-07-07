import { get } from "../utils/utils.js";
import { compra } from "../../script.js";

export function atualizarContagem() {
    const mobileCount = get('contagem');
    const headerCount = get('contagem-header');

    if (mobileCount) mobileCount.textContent = compra.length;
    if (headerCount) headerCount.textContent = compra.length;
}
