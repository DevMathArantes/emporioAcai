import { get } from "../utils/utils.js";
import { grupos } from "../../script.js";

// Altera a categoria de produtos visíveis
export function mudarCategoria() {
    const selectElem = get("grupoAtual");
    if (!selectElem) return;

    // Se houver uma busca ativa, limpa o input e restaura a visibilidade de todos os cartões
    const buscaInput = get("buscaProduto");
    if (buscaInput && buscaInput.value !== "") {
        buscaInput.value = "";
        const clearBtn = get("limparBusca");
        if (clearBtn) clearBtn.style.display = "none";
        
        const cards = document.querySelectorAll(".item, .itemGrande");
        cards.forEach(card => {
            if (card.classList.contains("itemGrande")) {
                card.style.display = "block";
            } else {
                card.style.display = "flex";
            }
        });
    }

    const valorSelect = selectElem.value;
    const imgGrupo = get("imagemGrupo");
    
    if (imgGrupo) {
        // Altera a imagem de fundo correspondente à categoria
        imgGrupo.style.backgroundImage = `url(assets/images/${valorSelect}.png)`;
    }

    // Altera a exibição das categorias de produtos
    for (let i = 0; i < grupos.length; i++) {
        const grupoElem = get(grupos[i]);
        if (grupoElem) {
            if (valorSelect === "tudo" || valorSelect === grupos[i]) {
                grupoElem.style.display = "block";
            } else {
                grupoElem.style.display = "none";
            }
        }
    }

    // Atualiza a classe ativa dos pills/badges de categoria
    const pills = document.querySelectorAll(".category-pill");
    pills.forEach(pill => {
        if (pill.getAttribute("data-category") === valorSelect) {
            pill.classList.add("active");
        } else {
            pill.classList.remove("active");
        }
    });
}
