import { taxaEntrega } from "../../config.js";
import { get } from "../utils/utils.js";

// Toggle Address, Cash and Card subforms based on selections
function toggleCheckoutForms() {
    // Toggle Address Info
    const ent1 = get('entrega1');
    const addrSub = get('subFormEndereco');
    if (ent1 && addrSub) {
        addrSub.style.display = ent1.checked ? 'block' : 'none';
    }

    // Toggle Dinheiro (Troco)
    const pag1 = get('pagamento1');
    const moneySub = get('subFormDinheiro');
    if (pag1 && moneySub) {
        moneySub.style.display = pag1.checked ? 'block' : 'none';
    }

    // Toggle Cartão Types
    const pag2 = get('pagamento2');
    const cardSub = get('subFormCartao');
    if (pag2 && cardSub) {
        cardSub.style.display = pag2.checked ? 'block' : 'none';
    }
}

// Renders the delivery and payment checkout form
export function montarFormulario() {
    const controls = get('controlesCarrinho');
    const basket = get('compra');
    
    if (!controls || !basket) return;

    controls.innerHTML = `
        <button onclick="globalMontarCompra()" class="carrinho-nav-btn voltar-carrinho-btn">
            <img src="assets/icons/setaEsquerda.png" alt="Voltar">
            <span>Voltar</span>
        </button>

        <button onclick="globalMontarLink()" class="carrinho-nav-btn confirmar-carrinho-btn">
            <span>Avançar</span>
            <img src="assets/icons/setaDireita.png" alt="Avançar">
        </button>
    `;

    basket.innerHTML = `
        <div class="checkout-step-intro">
            <h2>Finalizar Pedido</h2>
            <p>Insira suas informações de contato, entrega e método de pagamento.</p>
        </div>

        <div class="checkout-form-container">
            <!-- 1. Identificação -->
            <div class="checkout-form-card">
                <h3><span class="step-num">1</span> Contato</h3>
                <div class="input-group">
                    <label for="nome">Seu Nome *</label>
                    <div class="input-icon-wrapper user-icon">
                        <input id="nome" type="text" placeholder="Como devemos te chamar?" required>
                    </div>
                </div>
            </div>

            <!-- 2. Método de Entrega -->
            <div class="checkout-form-card">
                <h3><span class="step-num">2</span> Modo de Entrega</h3>
                
                <div class="checkout-options-grid three-columns">
                    <label class="checkout-option-card-label" id="deliveryOptionAddress">
                        <input value="Para entrega" id="entrega1" type="radio" name="entrega">
                        <div class="option-card-content">
                            <span class="option-title" id="entregaTxt1">Entrega</span>
                            <span class="option-subtitle">+ R$ ${taxaEntrega.toFixed(2)}</span>
                        </div>
                    </label>

                    <label class="checkout-option-card-label" id="deliveryOptionPickup">
                        <input id="entrega2" type="radio" name="entrega">
                        <div class="option-card-content">
                            <span class="option-title" id="entregaTxt2">Retirar</span>
                            <span class="option-subtitle">No local</span>
                        </div>
                    </label>

                    <label class="checkout-option-card-label" id="deliveryOptionAtStore">
                        <input id="entrega3" type="radio" name="entrega">
                        <div class="option-card-content">
                            <span class="option-title" id="entregaTxt3">Estou no Local</span>
                            <span class="option-subtitle">Consumo aqui</span>
                        </div>
                    </label>
                </div>

                <!-- Subform: Address Info -->
                <div id="subFormEndereco" class="checkout-subform-pane" style="display: none;">
                    <div class="input-row-grid">
                        <div class="input-group text-wide">
                            <label for="endereco2">Rua *</label>
                            <input id="endereco2" type="text" placeholder="Nome da rua">
                        </div>
                        <div class="input-group text-short">
                            <label for="endereco3">Número *</label>
                            <input id="endereco3" type="text" placeholder="Nº">
                        </div>
                    </div>
                    
                    <div class="input-row-grid">
                        <div class="input-group">
                            <label for="endereco1">Bairro *</label>
                            <input id="endereco1" type="text" placeholder="Seu bairro">
                        </div>
                        <div class="input-group">
                            <label for="endereco4">Complemento</label>
                            <input id="endereco4" type="text" placeholder="Ex: Apto 2, bloco A">
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. Pagamento -->
            <div class="checkout-form-card">
                <h3><span class="step-num">3</span> Forma de Pagamento</h3>

                <div class="checkout-options-grid three-columns">
                    <label class="checkout-option-card-label">
                        <input id="pagamento1" type="radio" name="pagamento">
                        <div class="option-card-content">
                            <span class="option-title" id="formaPagamento1">Dinheiro</span>
                        </div>
                    </label>

                    <label class="checkout-option-card-label">
                        <input id="pagamento2" type="radio" name="pagamento">
                        <div class="option-card-content">
                            <span class="option-title" id="formaPagamento2">Cartão</span>
                        </div>
                    </label>

                    <label class="checkout-option-card-label">
                        <input id="pagamento3" type="radio" name="pagamento">
                        <div class="option-card-content">
                            <span class="option-title" id="formaPagamento3">Pix</span>
                        </div>
                    </label>
                </div>

                <!-- Subform: Dinheiro (Troco) -->
                <div id="subFormDinheiro" class="checkout-subform-pane" style="display: none;">
                    <div class="input-group">
                        <label for="troco">Precisa de troco? Para qual cédula?</label>
                        <div class="input-icon-wrapper cash-icon">
                            <input id="troco" type="number" placeholder="Ex: 50, 100 (deixe em branco se não precisar)">
                        </div>
                    </div>
                </div>

                <!-- Subform: Cartão (Opções) -->
                <div id="subFormCartao" class="checkout-subform-pane" style="display: none;">
                    <label class="input-section-subtitle">Selecione o tipo do cartão *</label>
                    <div class="card-types-flex">
                        <label class="card-type-pill">
                            <input id="cartao1" type="radio" name="cartao">
                            <span>Crédito</span>
                        </label>
                        <label class="card-type-pill">
                            <input id="cartao2" type="radio" name="cartao">
                            <span>Débito</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <p class="checkout-disclaimer-note">
            Ao confirmar, abriremos o WhatsApp com seu pedido estruturado para que você envie para nossa equipe.
        </p>
    `;

    // Event listeners to replace inline onclick handlers
    const formContainer = basket.querySelector(".checkout-form-container");
    if (formContainer) {
        formContainer.addEventListener("change", (e) => {
            if (e.target && (e.target.name === "entrega" || e.target.name === "pagamento")) {
                toggleCheckoutForms();
            }
        });
    }

    // Run initially to set the correct visual state
    toggleCheckoutForms();
}
