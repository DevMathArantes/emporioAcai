import { get } from "../utils/utils.js";
import { montagemMontado } from "./montarPartes.js";

export let productConfigMap = {};

// Define the HTML structure for product categories
function definirCategoria(idHtml, nome, categoriaHtml, productsHtml = "") {
    switch (categoriaHtml) {
        case 1:
            return `
                <div class="categoria-bloco">
                    <h2 class="tituloPd">${nome}</h2>
                    <div id="${idHtml}" class="carrossel">
                        ${productsHtml}
                    </div>
                </div>
            `;
        case 2:
            return `
                <div class="categoria-bloco">
                    <h2 class="tituloPd">${nome}</h2>
                    <div class="campoMontagem">
                        <h3>Monte seu produto</h3>
                        <p>Após selecionar os 2 campos, o item será liberado para pedido.</p>
                        <div class="selectMontagem">
                            <h4>Metade 1</h4>
                            <select onchange="globalMontarParte()" id="Metade1">
                                <option value="nenhum">Nenhum</option>
                                ${montagemMontado(idHtml + "Metade1")}
                            </select>
                        </div>
                        <div class="selectMontagem">
                            <h4>Metade 2</h4>
                            <select onchange="globalMontarParte()" id="Metade2">
                                <option value="nenhum">Nenhum</option>
                                ${montagemMontado(idHtml + "Metade2")}
                            </select>
                        </div>
                        <div id="itemMontado" class="itemMontado" style="display: none;">
                            <h3>Seu produto está pronto</h3>
                            <div id="${idHtml}">${productsHtml}</div>
                        </div>
                    </div>
                </div>
            `;
        case 3:
            return `
                <div class="categoria-bloco">
                    <h2 class="tituloPd">${nome}</h2>
                    <div class="campoMontagem">
                        <img src="assets/images/sorvetes.png" alt="imagem de sorvete" class="imagemSorvete">
                        <p>Após selecionar pelo menos 1 sabor, o campo será liberado para pedir</p>
                        <div id="campoSorvetes" class="selectSorvetes"></div>
                        <div class="montarSorvete">
                            <p>Quantidade de bolas de sorvete</p>
                            <button onclick="globalRetirarBola()">
                                <img src="assets/icons/retirar.png" alt="icone retirar">
                            </button>
                            <span id="quantidadeSorvete">0</span>
                            <button onclick="globalAdicionarBola()">
                                <img src="assets/icons/adicionar.png" alt="icone adicionar">
                            </button>
                        </div>
                        <div id="sorveteMontado" class="sorveteMontado" style="display: none;">
                            <h3>Seu sorvete está pronto para pedir</h3>
                            <div id="${idHtml}">${productsHtml}</div>
                        </div>
                    </div>
                </div>
            `;
        case 4:
            return `
                <div class="categoria-bloco">
                    <h2 class="tituloPd">${nome}</h2>
                    <div class="campoMontagem">
                        <img src="assets/images/acais.png" alt="imagem de açaí" class="imagemSorvete">
                        <p>Após selecionar pelo menos 1 sabor, o campo será liberado para pedir</p>
                        <div id="campoAcais" class="selectSorvetes"></div>
                        <div class="montarSorvete">
                            <p>Quantidade de bolas de açaí</p>
                            <button onclick="globalRetirarAcai()">
                                <img src="assets/icons/retirar.png" alt="icone retirar">
                            </button>
                            <span id="quantidadeAcai">0</span>
                            <button onclick="globalAdicionarAcai()">
                                <img src="assets/icons/adicionar.png" alt="icone adicionar">
                            </button>
                        </div>
                        <div id="acaiMontado" class="sorveteMontado" style="display: none;">
                            <h3>Seu açaí está pronto para pedir</h3>
                            <div id="${idHtml}">${productsHtml}</div>
                        </div>
                    </div>
                </div>
            `;
        default:
            return "";
    }
}

// Define the HTML structure for product cards
function definirProduto(identificador, idHtml, numeroImagem, id, nome, descrever, valor, adicionaisProduto, inclusos) {
    const formattedPrice = parseFloat(valor).toFixed(2);

    switch (identificador) {
        case 1:
            return `
                <div id="produto${id}" onclick="globalPedir('${id}', '${adicionaisProduto}', ${inclusos})" class="item">
                    <div class="item-img-container">
                        <img id="imagemProduto${id}" src="assets/images/${idHtml}${numeroImagem}.png" alt="${nome}" loading="lazy">
                    </div>
                    <div class="item-body">
                        <h3 id="titulo${id}">${nome}</h3>
                        <p id="texto${id}" class="item-desc">${descrever}</p>
                        <div class="item-footer">
                            <span class="item-price">R$ <i id="valor${id}">${formattedPrice}</i></span>
                            <button class="item-add-btn">+</button>
                        </div>
                    </div>
                </div>
            `;
        case 2:
            return `
                <div id="produto${id}" onclick="globalPedir('${id}', '${adicionaisProduto}', ${inclusos})" class="item">
                    <div class="item-img-container icon-bg">
                        <img id="imagemProduto${id}" src="assets/images/logo.png" alt="logo da empresa" loading="lazy">
                    </div>
                    <div class="item-body">
                        <h3 id="titulo${id}">${nome}</h3>
                        <p id="texto${id}" class="item-desc">${descrever}</p>
                        <div class="item-footer">
                            <span class="item-price">R$ <i id="valor${id}">${formattedPrice}</i></span>
                            <button class="item-add-btn">+</button>
                        </div>
                    </div>
                </div>
            `;
        case 3:
            return `
                <div id="produto${id}" onclick="globalPedir('${id}', '${adicionaisProduto}', ${inclusos})" class="itemGrande">
                    <img id="imagemProduto${id}" src="assets/images/${idHtml}${numeroImagem}.png" alt="${nome}" loading="lazy">
                    <div class="itemGrandeTxt">
                        <h3 id="titulo${id}">${nome}</h3>
                        <p id="texto${id}">${descrever}</p>
                        <span class="item-price">R$ <i id="valor${id}">${formattedPrice}</i></span>
                    </div>
                </div>
            `;
        case 4:
            return `
                <div id="produtoMontado" onclick="globalPedir('Montado', '${adicionaisProduto}', ${inclusos})" class="item">
                    <div class="item-img-container icon-bg">
                        <img id="imagemProdutoMontado" src="assets/images/logo.png" alt="logo da empresa" loading="lazy">
                    </div>
                    <div class="item-body">
                        <h3 id="tituloMontado">${nome}</h3>
                        <p id="textoMontado" class="item-desc"></p>
                        <div class="item-footer">
                            <span class="item-price">R$ <i id="valorMontado">0.00</i></span>
                            <button class="item-add-btn">+</button>
                        </div>
                    </div>
                </div>
            `;
        case 5:
            return `
                <div id="produtoSorvete" onclick="globalPedir('Sorvete', '${adicionaisProduto}', ${inclusos})" class="item">
                    <div class="item-img-container icon-bg">
                        <img id="imagemProdutoSorvete" src="assets/images/logo.png" alt="logo da empresa" loading="lazy">
                    </div>
                    <div class="item-body">
                        <h3 id="tituloSorvete">${nome}</h3>
                        <p id="textoSorvete" class="item-desc"></p>
                        <div class="item-footer">
                            <span class="item-price">R$ <i id="valorSorvete">0.00</i></span>
                            <button class="item-add-btn">+</button>
                        </div>
                    </div>
                </div>
            `;
        case 6:
            return `
                <div id="produtoAcai" onclick="globalPedir('Acai', '${adicionaisProduto}', ${inclusos})" class="item">
                    <div class="item-img-container icon-bg">
                        <img id="imagemProdutoAcai" src="assets/images/logo.png" alt="logo da empresa" loading="lazy">
                    </div>
                    <div class="item-body">
                        <h3 id="tituloAcai">${nome}</h3>
                        <p id="textoAcai" class="item-desc"></p>
                        <div class="item-footer">
                            <span class="item-price">R$ <i id="valorAcai">0.00</i></span>
                            <button class="item-add-btn">+</button>
                        </div>
                    </div>
                </div>
            `;
        default:
            return "";
    }
}

let id = 0;

// Dynamic rendering entry point
export function montarCategorias(categorias) {
    // Add to default dropdown
    get("grupoAtual").innerHTML += `<option value="${categorias[0]}">${categorias[1]}</option>`;

    // Add to category pills container if present
    const pillsContainer = get("categoryPills");
    if (pillsContainer) {
        if (pillsContainer.children.length === 0) {
            pillsContainer.innerHTML = `
                <button class="category-pill active" data-category="tudo" onclick="document.getElementById('grupoAtual').value='tudo'; globalMudarCategoria();">
                    Ver tudo
                </button>
            `;
        }
        const cleanName = categorias[1].replace("Ver ", "");
        pillsContainer.innerHTML += `
            <button class="category-pill" data-category="${categorias[0]}" onclick="document.getElementById('grupoAtual').value='${categorias[0]}'; globalMudarCategoria();">
                ${cleanName}
            </button>
        `;
    }

    // Add wrapper div to main grid
    get("produtos").innerHTML += `<div id="${categorias[0]}" class="grupo-produtos"></div>`;

    for (let i = 2; i < categorias.length; i++) {
        const categoria = categorias[i];
        const settings = categoria[0];
        
        const identifique = settings[0];
        const idHtml = settings[1];
        const nomeCategoria = settings[2];
        const adicionaisProduto = settings[3];
        const categoriaHtml = settings[4];

        let productsHtml = "";

        for (let j = 1; j < categoria.length; j++) {
            const produto = categoria[j];
            const nomeProduto = produto[0];
            const descreverProduto = produto[1];
            const valorProduto = produto[2];
            const inclusos = produto[3];

            id++;

            productConfigMap[id] = {
                id: id,
                identifique: identifique,
                idHtml: idHtml,
                nomeCategoria: nomeCategoria,
                adicionaisProduto: adicionaisProduto,
                categoriaHtml: categoriaHtml,
                produto: produto,
                nomeProduto: nomeProduto,
                valorProduto: valorProduto,
                inclusos: inclusos
            };

            productsHtml += definirProduto(
                identifique,
                idHtml,
                j,
                id,
                nomeProduto,
                descreverProduto,
                valorProduto,
                adicionaisProduto,
                inclusos
            );
        }

        const groupContainer = get(categorias[0]);
        if (groupContainer) {
            groupContainer.innerHTML += definirCategoria(idHtml, nomeCategoria, categoriaHtml, productsHtml);
        }
    }
}
