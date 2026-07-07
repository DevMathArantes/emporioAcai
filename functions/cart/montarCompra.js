import { compra } from "../../script.js";
import { titulo } from "../../config.js";
import { atualizarContagem } from "./contagem.js";
import { toggleModal, get, escapeHTML } from "../utils/utils.js";

export function montarCompra() {
    const controls = get('controlesCarrinho');
    const basket = get('compra');
    
    if (!controls || !basket) return;

    controls.innerHTML = `
        <button onclick="globalToggleModal('carrinho')" class="carrinho-nav-btn voltar-carrinho-btn">
            <img src="assets/icons/setaEsquerda.png" alt="Voltar">
            <span>Voltar</span>
        </button>

        <button onclick="globalMontarFormulario()" class="carrinho-nav-btn confirmar-carrinho-btn">
            <span>Avançar</span>
            <img src="assets/icons/setaDireita.png" alt="Avançar">
        </button>
    `;

    let totalItemsPrice = 0;
    let itemsHtml = "";

    for (let i = 0; i < compra.length; i++) {
        const montado = compra[i];
        const img = montado[0] || "assets/images/logo.png";
        const nome = escapeHTML(montado[1]);
        const desc = escapeHTML(montado[2] || "Sem descrição");
        const adicionais = montado[5];
        const lembrete = escapeHTML(montado[6]);
        const quant = montado[4];
        const precoTotalItem = parseFloat(montado[3]);
        totalItemsPrice += precoTotalItem;

        // Clean list representation for additions
        let extrasHtml = "";
        if (Array.isArray(adicionais) && adicionais.length > 0) {
            extrasHtml = `<span class="cart-item-tag-label">Adicionais:</span> ` + adicionais.map(e => `<span class="cart-addition-tag">${escapeHTML(e)}</span>`).join(" ");
        } else if (adicionais && adicionais !== "Nenhum") {
            extrasHtml = `<span class="cart-item-tag-label">Adicionais:</span> <span class="cart-addition-tag">${escapeHTML(adicionais)}</span>`;
        } else {
            extrasHtml = `<span class="cart-item-tag-label">Sem adicionais</span>`;
        }

        const noteHtml = (lembrete && lembrete !== "Nenhum") 
            ? `<div class="cart-item-note"><strong>Obs:</strong> "${lembrete}"</div>` 
            : "";

        itemsHtml += `
            <div id="compra${i}" class="itemCompra">
                <div class="itemCompraImg" style="background-image: url(${img})"></div>
                <div class="itemCompraTxt">
                    <div class="itemCompraHeader">
                        <h3>${nome}</h3>
                        <button onclick="globalEsquecer(${i})" class="cart-item-remove-btn" title="Remover item">
                            <img src="assets/icons/lixeira.png" alt="Lixeira">
                        </button>
                    </div>
                    <p class="cart-item-desc">${desc}</p>
                    <div class="cart-item-extras-row">${extrasHtml}</div>
                    ${noteHtml}
                    <div class="cart-item-footer">
                        <span class="cart-item-qty">Qtd: <strong>${quant}</strong></span>
                        <span class="cart-item-price-tag">Total: <strong>R$ ${precoTotalItem.toFixed(2)}</strong></span>
                    </div>
                </div>
            </div>
        `;
    }

    basket.innerHTML = `
        <div class="checkout-step-intro">
            <h2>Revisar Itens</h2>
            <p>Confira sua lista de compras. Para continuar, clique em "Avançar".</p>
        </div>
        <div class="cart-items-list">
            ${itemsHtml}
        </div>
        <div class="cart-summary-totals-card">
            <div class="summary-line">
                <span>Subtotal dos Itens</span>
                <strong>R$ ${totalItemsPrice.toFixed(2)}</strong>
            </div>
        </div>
        
        <div class="checkout-footer-greeting">
            <p>Obrigado por escolher o <strong>${titulo}</strong>!</p>
        </div>
    `;
}

export function esquecer(id) {
    compra.splice(id, 1);
    atualizarContagem();
    
    if (compra.length === 0) {
        toggleModal('carrinho');
    } else {
        montarCompra();
    }
}
