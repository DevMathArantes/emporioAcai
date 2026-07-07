import { get, toggleModal } from "../utils/utils.js";
import { compra } from "../../script.js";
import { titulo } from "../../config.js";
import { montarCompra } from "./montarCompra.js";
import { customAlert } from "../utils/funcionamento.js";

// Monta a lista de produtos e abre o carrinho
export function abrirCarrinho() {
    if (compra.length !== 0) {
        toggleModal('carrinho');
        
        get('carrinho').innerHTML = `
            <div class="modal-backdrop" onclick="globalDijuntor('carrinho')"></div>
            <div class="modal-content animate-slide-up cart-modal-pane">
                
                <header class="modal-header">
                    <div class="header-title-wrapper">
                        <h3>Meu Carrinho</h3>
                        <span class="header-brand-sub">${titulo}</span>
                    </div>
                    <button onclick="globalDijuntor('carrinho')" class="close-modal-btn">&times;</button>
                </header>

                <!-- Navigation Controls for Carrinho Steps -->
                <div id="controlesCarrinho" class="cart-step-navigation-bar"></div>

                <div class="modal-body-scroll">
                    <section id="compra" class="compras-container"></section>
                </div>
                
            </div>
        `;

        montarCompra();
    } else {
        customAlert("Sacola Vazia", "Seu carrinho está vazio! Adicione alguns produtos antes de continuar.");
    }
}
