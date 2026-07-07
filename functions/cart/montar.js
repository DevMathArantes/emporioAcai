import { compra } from "../../script.js";
import { toggleModal, get } from "../utils/utils.js";
import { contagem } from "../product/montarAdicionais.js";
import { atualizarContagem } from "./contagem.js";

let listaAdicionais;
let montado;
let adicional;
let nomeAdicional;
let valorAdicional;
let totalCalculado;
let inclusosRestantes;
let nomesAdicionais;

// Função para montar o produto com os dados adicionados pelo cliente
export function montar(id, inclusos) {
    listaAdicionais = [];
    nomesAdicionais = [];
    montado = [];

    for (let i = 0; i < contagem; i++) {
        const inputElem = get("adicional" + i);
        if (inputElem && inputElem.checked) {
            const nameElem = get("nomeAdicional" + i);
            const valElem = get("valorAdicional" + i);
            if (nameElem && valElem) {
                listaAdicionais.push([nameElem.textContent, valElem.textContent]);
                nomesAdicionais.push(nameElem.textContent);
            }
        }
    }

    const imgElem = get('imagemProduto' + id);
    const titleElem = get('titulo' + id);
    const descElem = get('texto' + id);
    const qtyElem = get('quantidade');

    const imgSrc = imgElem ? imgElem.src : "assets/images/logo.png";
    const titleText = titleElem ? titleElem.textContent : "";
    const descText = descElem ? descElem.textContent : "";
    const qtyText = qtyElem ? qtyElem.textContent : "1";

    montado.push(imgSrc);
    montado.push(titleText);
    montado.push(descText);
    montado.push(calculoValor(id, listaAdicionais, inclusos));
    montado.push(qtyText);

    if (listaAdicionais.length > 0) {
        montado.push(nomesAdicionais);
    } else {
        montado.push("Nenhum");
    }

    const lembreteInput = get('lembrete');
    if (lembreteInput && lembreteInput.value.trim() !== "") {
        montado.push(lembreteInput.value.trim());
    } else {
        montado.push("Nenhum");
    }

    compra.push(montado);

    toggleModal('montar');
    atualizarContagem();
}

function calculoValor(id, adicionais, inclusos) {
    const valElem = get('valor' + id);
    totalCalculado = valElem ? parseFloat(valElem.textContent) : 0.00;
    inclusosRestantes = inclusos;

    for (let i = 0; i < adicionais.length; i++) {
        adicional = adicionais[i];
        nomeAdicional = adicional[0];
        valorAdicional = adicional[1];

        // Checks if additional has - Não incluso suffix or if we consumed our free additions
        if (nomeAdicional.slice(-13) === '- Não incluso' || inclusosRestantes === 0) {
            totalCalculado += parseFloat(valorAdicional);
        } else {
            inclusosRestantes--;
        }
    }

    const qtyElem = get('quantidade');
    const qty = qtyElem ? parseFloat(qtyElem.textContent) : 1;
    return (totalCalculado * qty).toFixed(2);
}
