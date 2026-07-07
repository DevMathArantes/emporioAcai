import { compra } from "../../script.js";
import { pix, taxaEntrega, whatsapp } from "../../config.js";
import { calculoTotal } from "./calculoTotal.js";
import { get } from "../utils/utils.js";

export function linkMontado() {
    let msg = "\nNovo Pedido";
    
    const clientName = get('nome') ? get('nome').value.trim() : "";
    msg += `\n\n* Cliente: ${clientName}`;
    
    const deliveryRadio1 = get('entrega1');
    const deliveryRadio2 = get('entrega2');
    const deliveryRadio3 = get('entrega3');

    if (deliveryRadio1 && deliveryRadio1.checked) {
        const entregaTxt = get('entregaTxt1') ? get('entregaTxt1').textContent.trim() : "";
        const bairro = get('endereco1') ? get('endereco1').value.trim() : "";
        const rua = get('endereco2') ? get('endereco2').value.trim() : "";
        const numero = get('endereco3') ? get('endereco3').value.trim() : "";
        const complemento = get('endereco4') ? get('endereco4').value.trim() : "";

        msg += `\n\n* Forma de entrega: ${entregaTxt}\n`;
        msg += `\nTaxa de entrega: R$ ${taxaEntrega.toFixed(2)}`;
        msg += `\n\nBairro: ${bairro}`;
        msg += `\n\nRua: ${rua}`;
        msg += `\n\nNúmero: ${numero}`;
        
        if (complemento !== "") {
            msg += `\n\nComplemento: ${complemento}`;
        }
    } else if (deliveryRadio2 && deliveryRadio2.checked) {
        const entregaTxt = get('entregaTxt2') ? get('entregaTxt2').textContent.trim() : "";
        msg += `\n\n* Forma de entrega: ${entregaTxt}\n`;
    } else if (deliveryRadio3 && deliveryRadio3.checked) {
        const entregaTxt = get('entregaTxt3') ? get('entregaTxt3').textContent.trim() : "";
        msg += `\n\n* Forma de entrega: ${entregaTxt}\n`;
    }

    // Add items list
    compra.forEach(item => {
        msg += `\n________________________________________\n`;
        const nome = item[1];
        const desc = item[2];
        const quant = item[4];
        const precoItem = item[3];
        
        // Item Title and Description
        msg += `\n* ${nome}\n\nDescrição:\n${desc}\n`;
        
        // Extras
        const adicionais = item[5];
        if (adicionais !== "Nenhum") {
            if (Array.isArray(adicionais)) {
                adicionais.forEach(adic => {
                    msg += `\n+ ${adic}`;
                });
            } else {
                msg += `\n+ ${adicionais}`;
            }
        }
        
        // Notes
        const lembrete = item[6];
        if (lembrete !== "Nenhum") {
            msg += `\n\nLembrete: ${lembrete}`;
        }
        
        // Qty and total
        msg += `\n\nQuantidade: ${quant}\n\nTotal do item: R$ ${precoItem}`;
    });
    
    msg += `\n________________________________________\n`;

    // Payment Info
    const pag1 = get('pagamento1');
    const pag2 = get('pagamento2');
    const pag3 = get('pagamento3');

    if (pag1 && pag1.checked) {
        const pagTxt = get('formaPagamento1') ? get('formaPagamento1').textContent.trim() : "";
        msg += `\n* Forma de pagamento: ${pagTxt}`;
        const trocoVal = get('troco') ? get('troco').value.trim() : "";
        if (trocoVal !== "") {
            const trocoNum = parseFloat(trocoVal);
            msg += `\n\nTroco para: R$ ${trocoNum.toFixed(2)}`;
            msg += `\n\nTroco= R$ ${(trocoNum - calculoTotal()).toFixed(2)}`;
        }
    } else if (pag2 && pag2.checked) {
        let pagTxt = get('formaPagamento2') ? get('formaPagamento2').textContent.trim() : "";
        const cartao1 = get('cartao1');
        if (cartao1 && cartao1.checked) {
            pagTxt += " (Crédito)";
        } else {
            pagTxt += " (Débito)";
        }
        msg += `\n* Forma de pagamento: ${pagTxt}`;
    } else if (pag3 && pag3.checked) {
        const pagTxt = get('formaPagamento3') ? get('formaPagamento3').textContent.trim() : "";
        msg += `\n* Forma de pagamento: ${pagTxt}`;
        if (pix !== "") {
            msg += `\n\nEnvie no pix: ${pix}\n(Favor enviar o comprovante)`;
        }
    }

    msg += `\n\n* Total do pedido: R$ ${calculoTotal().toFixed(2)}`;

    return whatsapp + "?text=" + encodeURIComponent(msg);
}
