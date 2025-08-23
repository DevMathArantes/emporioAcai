import {get, dijuntor} from "./functions/utils.js";
import {infoStatus, status} from "./functions/funcionamento.js";
import {montarCategorias} from "./functions/montagem.js";
import {mudarCategoria} from "./functions/mudarCategoria.js";
import { Pedir } from "./functions/pedir.js";
import { aumentarQuantidade, diminuirQuantidade } from "./functions/quantidadeItem.js";
import { abrirCarrinho } from "./functions/abrirCarrinho.js";
import { montar } from "./functions/montar.js";
import { esquecer, montarCompra } from "./functions/montarCompra.js";
import { montarFormulario } from "./functions/montarFormulario.js";
import { montarLink } from "./functions/montarLink.js";
import { montarParte } from "./functions/montarPartes.js";

window.globalMudarCategoria = mudarCategoria;
window.globalPedir = Pedir;
window.globalDijuntor = dijuntor;
window.globalAumentarQuantidade = aumentarQuantidade;
window.globalDiminuirQuantidade = diminuirQuantidade;
window.globalAbrirCarrinho = abrirCarrinho;
window.globalMontar = montar;
window.globalEsquecer = esquecer;
window.globalMontarFormulario = montarFormulario;
window.globalMontarCompra = montarCompra;
window.globalMontarLink = montarLink;
window.globalInfoStatus = infoStatus;
window.globalMontarParte = montarParte;

export let compra = [];

//Variáveis
import { acais } from "./lists/acais.js";
import { sorvetes } from "./lists/sorvetes.js";
import { bebidas } from "./lists/bebidas.js";
import { lanches } from "./lists/lanche.js";
import { pizzas } from "./lists/pizza.js";
import { especiais } from "./lists/especiais.js";
export let grupos = ["acais","sorvetes", "bebidas", "lanches", "pizzas", "especiais"];
export let produtos = [acais, sorvetes, bebidas, lanches, pizzas, especiais];
export let funcionamento = [
    [[15, 0], [23, 0]],
    [[15, 0], [23, 0]],
    [[15, 0], [23, 0]],
    [[15, 0], [23, 0]],
    [[15, 0], [23, 0]],
    [[15, 0], [23, 0]],
    [[15, 0], [23, 0]]
]
export const whatsapp = "https://wa.me/551631723514";
export const pix = "16993383633";
const endereco = "https://maps.app.goo.gl/rpcVGbXBotXaR6qG8";
const facebook = "https://www.facebook.com/profile.php?id=100064760106360&mibextid=ZbWKwL";
const instagram = "https://www.instagram.com/omelhordoacai?igsh=emJlOWdvaHF4cWQ2";
export const titulo = "Empório do Açai";
export let taxaEntrega = 5.00;

//Montagem de elementos variáveis
get("Titulo").innerHTML = titulo;
get("tituloPag").innerHTML = titulo;
get("links").innerHTML=`
    <h3>Converse conosco</h3>
    <a href="${whatsapp}">
        <img src="assets/icons/whatsapp.png" alt="icone whatsapp">
        WhatsApp
    </a>
    <a href="${facebook}">
        <img src="assets/icons/facebook.png" alt="icone facebook">
        Facebook
    </a>
    <a href="${instagram}">
        <img src="assets/icons/instagram.png" alt="icone instagram">
        Instagram
    </a>
`;

if(status()){
    get("status").innerHTML="Aberto";
} else{
    get("status").innerHTML="Fechado";
}
get('endereco').href= endereco;

//Montagem dos produtos
for(let i = 0; i < produtos.length; i++){
    montarCategorias(produtos[i]);
}

