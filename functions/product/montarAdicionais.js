import { adicionais } from "../../lists/adicionais.js";
import { get } from "../utils/utils.js";

let listas;
let posi;
let listaAtual;
let tipo;
let adicional;
export let contagem;
let settings;
let titulo;

// Verifica quais adicionais devem ser montados em cada item
export function montarAdicionais(lista) {
    // Separando as listas de adicionais do produto
    listas = lista.split(",");

    // Iniciando a contagem de adicionais
    contagem = 0;

    const adicListElem = get('adicionais');
    if (!adicListElem) return;

    adicListElem.innerHTML = "";

    // Adicionando cada uma separadamente
    for (let i = 0; i < listas.length; i++) {
        // Coletando a posição dentro da lista de adicionais
        posi = listas[i];

        if (adicionais[posi]) {
            // Coletando a lista atual
            listaAtual = adicionais[posi];

            settings = listaAtual[0];

            // Coletando os dados para organizar a categoria de adicionais
            titulo = settings[0];
            tipo = settings[1];

            adicListElem.innerHTML += `<p class="input-section-subtitle">${titulo}</p>`;
            adicionandoAdicional(listaAtual, tipo);
        } else {
            const campoAdic = get("campoAdicionais");
            if (campoAdic) {
                campoAdic.innerHTML = `<p>Este produto não possui adicionais.</p>`;
            }
        }
    }
}

// Preenche o campo de adicionais
function adicionandoAdicional(lista, tipo) {
    const adicListElem = get("adicionais");
    if (!adicListElem) return;

    // Preenche o campo adicionais com os adicionais da lista
    for (let i = 1; i < lista.length; i++) {
        // Lista com dados do adicional
        adicional = lista[i];
        
        const labelText = adicional[2] ? adicional[0] : `${adicional[0]} - Não incluso`;

        // Adicionando adicional
        adicListElem.innerHTML += `
            <div class="checkBoxPd">
                <input type="${tipo}" name="adicional" id="adicional${contagem}">
                <label id="nomeAdicional${contagem}" for="adicional${contagem}">${labelText}</label>
                <span> R$ <i id="valorAdicional${contagem}">${(parseFloat(adicional[1])).toFixed(2)}</i></span>
            </div>
        `;

        contagem++;
    }
}
