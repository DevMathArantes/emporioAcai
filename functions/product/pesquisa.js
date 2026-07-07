import { get } from "../utils/utils.js";

// Lógica de busca e filtragem de produtos
export function filtrarProdutos() {
    const inputElem = get("buscaProduto");
    if (!inputElem) return;

    const query = inputElem.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".item, .itemGrande");
    
    // Armazena os IDs dos contêineres de categorias que possuem produtos correspondentes
    const visibleCategories = new Set();

    cards.forEach(card => {
        const titleElem = card.querySelector("h3");
        if (!titleElem) return;

        const descElem = card.querySelector(".item-desc, p");
        const titleText = titleElem.textContent.toLowerCase();
        const descText = descElem ? descElem.textContent.toLowerCase() : "";
        const matches = titleText.includes(query) || descText.includes(query);

        if (matches) {
            // Exibe o cartão
            if (card.classList.contains("itemGrande")) {
                card.style.display = "block";
            } else {
                card.style.display = "flex";
            }

            // Identifica a categoria do produto e marca como visível
            const parentGroup = card.closest(".grupo-produtos");
            if (parentGroup) {
                visibleCategories.add(parentGroup.id);
            }
        } else {
            // Oculta o cartão
            card.style.display = "none";
        }
    });

    // Controla a visibilidade dos contêineres de categorias
    const groups = document.querySelectorAll(".grupo-produtos");
    const activeCategory = get("grupoAtual") ? get("grupoAtual").value : "tudo";

    groups.forEach(group => {
        if (query === "") {
            // Se a busca estiver vazia, retorna ao filtro normal de categorias
            if (activeCategory === "tudo" || activeCategory === group.id) {
                group.style.display = "block";
            } else {
                group.style.display = "none";
            }

            // Restaura a exibição original dos cartões
            const groupCards = group.querySelectorAll(".item, .itemGrande");
            groupCards.forEach(c => {
                if (c.classList.contains("itemGrande")) {
                    c.style.display = "block";
                } else {
                    c.style.display = "flex";
                }
            });
        } else {
            // Na pesquisa ativa, mostra o grupo apenas se contiver itens correspondentes
            if (visibleCategories.has(group.id)) {
                group.style.display = "block";
            } else {
                group.style.display = "none";
            }
        }
    });

    // Mostra ou oculta o botão de limpar pesquisa com base no input
    const clearBtn = get("limparBusca");
    if (clearBtn) {
        clearBtn.style.display = query !== "" ? "flex" : "none";
    }
}

export function limparBusca() {
    const inputElem = get("buscaProduto");
    if (inputElem) {
        inputElem.value = "";
        filtrarProdutos();
        inputElem.focus();
    }
}
