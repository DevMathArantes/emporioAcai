// Entry point for Empório do Açaí

import { get, toggleModal, debounce } from "./functions/utils/utils.js";
import { infoStatus, status } from "./functions/utils/funcionamento.js";
import { montarCategorias } from "./functions/product/montagem.js";
import { mudarCategoria } from "./functions/product/mudarCategoria.js";
import { Pedir } from "./functions/product/pedir.js";
import { aumentarQuantidade, diminuirQuantidade } from "./functions/product/quantidadeItem.js";
import { abrirCarrinho } from "./functions/cart/abrirCarrinho.js";
import { montar } from "./functions/cart/montar.js";
import { esquecer, montarCompra } from "./functions/cart/montarCompra.js";
import { montarFormulario } from "./functions/cart/montarFormulario.js";
import { montarLink } from "./functions/cart/montarLink.js";
import { filtrarProdutos, limparBusca } from "./functions/product/pesquisa.js";
import { atualizarContagem } from "./functions/cart/contagem.js";
import { initDragToScroll } from "./functions/product/carrosselDrag.js";
import { montarParte } from "./functions/product/montarPartes.js";
import { adicionarBola, retirarBola, sorveteMontado } from "./functions/product/quantidadeSorvete.js";
import { adicionarAcai, retirarAcai, acaiMontado } from "./functions/product/quantidadeAcai.js";

// Import System Config
import { titulo, whatsapp, instagram, facebook, endereco } from "./config.js";

// Make functions globally accessible in the window scope
window.globalMudarCategoria = mudarCategoria;
window.globalPedir = Pedir;
window.globalToggleModal = toggleModal;
window.globalDijuntor = toggleModal;
window.globalAumentarQuantidade = aumentarQuantidade;
window.globalDiminuirQuantidade = diminuirQuantidade;
window.globalAbrirCarrinho = abrirCarrinho;
window.globalMontar = montar;
window.globalEsquecer = esquecer;
window.globalMontarFormulario = montarFormulario;
window.globalMontarCompra = montarCompra;
window.globalMontarLink = montarLink;
window.globalInfoStatus = infoStatus;
window.globalFiltrarProdutos = filtrarProdutos;
window.globalLimparBusca = limparBusca;
window.globalMontarParte = montarParte;
window.globalAdicionarBola = adicionarBola;
window.globalRetirarBola = retirarBola;
window.globalSorveteMontado = sorveteMontado;
window.globalAdicionarAcai = adicionarAcai;
window.globalRetirarAcai = retirarAcai;
window.globalAcaiMontado = acaiMontado;

// Application State
export let compra = [];

// Import Product Lists
import { acais } from "./lists/acais.js";
import { sorvetes } from "./lists/sorvetes.js";
import { bebidas } from "./lists/bebidas.js";
import { lanches } from "./lists/lanche.js";
import { pizzas } from "./lists/pizza.js";
import { especiais } from "./lists/especiais.js";

export const grupos = ["acais", "sorvetes", "bebidas", "lanches", /*"pizzas",*/ "especiais"];
export const produtos = [acais, sorvetes, bebidas, lanches, /*pizzas,*/ especiais];

// Initialize UI
document.addEventListener("DOMContentLoaded", () => {
    const titleText = get("Titulo");
    const pagTitle = get("tituloPag");
    const linksList = get("links");
    const statusLabel = get("status");
    const addressLink = get("endereco");

    if (titleText) titleText.innerHTML = titulo;
    if (pagTitle) pagTitle.innerHTML = titulo;
    
    if (linksList) {
        linksList.innerHTML = `
            <h3>Converse conosco</h3>
            <a href="${whatsapp}" target="_blank">
                <img src="assets/icons/whatsapp.png" alt="WhatsApp">
                WhatsApp
            </a>
            <a href="${facebook}" target="_blank">
                <img src="assets/icons/facebook.png" alt="Facebook">
                Facebook
            </a>
            <a href="${instagram}" target="_blank">
                <img src="assets/icons/instagram.png" alt="Instagram">
                Instagram
            </a>
        `;
    }

    if (statusLabel) {
        if (status()) {
            statusLabel.innerHTML = `<span class="badge badge-open"><span class="pulse-dot"></span>Aberto</span>`;
        } else {
            statusLabel.innerHTML = `<span class="badge badge-closed">Fechado</span>`;
        }
    }

    if (addressLink) {
        addressLink.href = endereco;
        addressLink.target = "_blank";
    }

    // Render all categories and their items
    for (let i = 0; i < produtos.length; i++) {
        montarCategorias(produtos[i]);
    }

    // Initialize customizer sub-panels
    adicionarBola();
    adicionarAcai();

    // Initialize drag-to-scroll on all product carousels
    initDragToScroll();

    // Initialize cart count badges
    atualizarContagem();

    // Programmatic event binding with debounce for search bar
    const searchInput = get("buscaProduto");
    if (searchInput) {
        searchInput.addEventListener("input", debounce(() => {
            filtrarProdutos();
        }, 250));
    }

    // Mouse wheel horizontal scroll helper for category pills scrollbar
    const scrollWrapper = document.querySelector(".category-pills-scroll-wrapper");
    if (scrollWrapper) {
        scrollWrapper.addEventListener("wheel", (evt) => {
            if (evt.deltaY !== 0) {
                evt.preventDefault();
                scrollWrapper.scrollLeft += evt.deltaY * 0.8;
            }
        });
    }
});