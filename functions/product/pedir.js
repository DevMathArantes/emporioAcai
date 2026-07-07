import { get, toggleModal } from "../utils/utils.js";
import { montarAdicionais } from "./montarAdicionais.js";
import { avisoStatus, status } from "../utils/funcionamento.js";
import { productConfigMap } from "./montagem.js";

// Abre a tela de montagem do produto
export function Pedir(id, listaAdicionais, inclusos) {
    if (status()) {
        const config = productConfigMap[id] || productConfigMap[parseInt(id)];
        
        toggleModal("montar");

        const targetItem = get('produto' + id);
        if (!targetItem) return;

        const targetImgSrc = get('imagemProduto' + id) ? get('imagemProduto' + id).src : "assets/images/logo.png";
        const targetTitle = get('titulo' + id) ? get('titulo' + id).textContent : (config ? config.nomeProduto : "");
        const targetDesc = get('texto' + id) ? get('texto' + id).textContent : "";
        const targetPrice = get('valor' + id) ? get('valor' + id).textContent : "";

        get("montar").innerHTML = `
            <div class="modal-backdrop" onclick="globalDijuntor('montar')"></div>
            <div class="modal-content animate-slide-up">
                
                <header class="modal-header">
                    <h3>Personalizar Item</h3>
                    <button onclick="globalDijuntor('montar')" class="close-modal-btn">&times;</button>
                </header>

                <div class="modal-body-scroll">
                    <!-- Item Overview -->
                    <div class="product-customize-hero">
                        <div class="custom-hero-img" style="background-image: url(${targetImgSrc})"></div>
                        <div class="custom-hero-details">
                            <h2>${targetTitle}</h2>
                            <p>${targetDesc}</p>
                            ${targetPrice ? `<span class="custom-price-tag">R$ <i>${parseFloat(targetPrice).toFixed(2)}</i></span>` : ''}
                        </div>
                    </div>

                    <!-- Customizer Section -->
                    <div class="custom-sections-container">
                        <section id="campoAdicionais" class="custom-section-card">
                            <h3>Adicionais</h3>
                            <div id="adicionais" class="adicionais-list-container"></div>
                        </section>

                        <!-- Lembrete e Quantidade -->
                        <section class="custom-section-card form-inputs-card">
                            <h3>Instruções Especiais</h3>
                            <div class="input-group">
                                <label for="lembrete">Observações / Remover Ingrediente</label>
                                <textarea id="lembrete" placeholder="Ex: Sem cereja, mais calda, etc..." rows="2"></textarea>
                            </div>

                            <div class="qty-and-action-row">
                                <div class="qty-control-container">
                                    <label>Quantidade</label>
                                    <div class="quantidade">
                                        <button type="button" onclick="globalDiminuirQuantidade()">
                                            <img src="assets/icons/retirar.png" alt="retirar">
                                        </button>
                                        <span id="quantidade">1</span>
                                        <button type="button" onclick="globalAumentarQuantidade()">
                                            <img src="assets/icons/adicionar.png" alt="adicionar">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <footer class="modal-footer-sticky">
                    <button onclick="globalMontar('${id}', ${inclusos})" class="primary-btn-pizza">
                        <img src="assets/icons/carrinho.png" alt="carrinho">
                        Adicionar ao Carrinho
                    </button>
                </footer>
            </div>
        `;

        montarAdicionais(listaAdicionais);
    } else {
        avisoStatus();
    }
}
