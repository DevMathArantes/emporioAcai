import { compra } from "../../script.js";
import { taxaEntrega } from "../../config.js";
import { get } from "../utils/utils.js";

export function calculoTotal() {
    let total = 0.00;

    // Direct check of delivery selection in DOM state to prevent stale state bug
    const deliverySelected = get('entrega1');
    if (deliverySelected && deliverySelected.checked) {
        total += taxaEntrega;
    }

    return compra.reduce((sum, item) => sum + (parseFloat(item[3]) || 0), total);
}
