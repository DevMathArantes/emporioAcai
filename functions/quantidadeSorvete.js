import { get } from "./utils.js"

let bolasSorvetes = [];
let contagemBolas = 1;
let htmlOpc;
let opc;
let sabor;
let valor;
let selecionado;
let totalSorvete;
let descSorvete;
let contagemVerificada;

let preco = 5.00;
let sabores = [
    ["Nenhum", 0.0],
    ["Corneto", preco],
    ["Creme", preco],
    ["Ninho trufado", preco],
    ["Red Velvet", preco],
    ["Sensação", preco],
    ["Mousse de nutella", preco],
    //["Delírio", preco],
    ["Ameixa", preco],
    ["Laka", preco],
    ["Flocos", preco],
    ["Mousse de goiaba", preco],
    ["Mousse de maracujá", preco],
    ["Milho verde", preco],
    ["Morango silvestre 0", preco],
    ["Torta chocolate", preco],
    ["Cheesecake", preco],
    ["Papaya com cassis", preco],
    ["Ferrero Rocher", preco]
];

export function adicionarBola(){
    bolasSorvetes.push(contagemBolas);
    contagemBolas++;
    montarBolas();
}

export function retirarBola(){
    if(bolasSorvetes.length != 1){
        bolasSorvetes.pop();
        contagemBolas--;
        montarBolas();
    }
}

function montarBolas(){
    get('quantidadeSorvete').innerHTML=bolasSorvetes.length;
    get('campoSorvetes').innerHTML = ``;

    for(let i = 0; i < bolasSorvetes.length; i++){
        get('campoSorvetes').innerHTML+=`
            <select id="bola${i}" onchange="globalSorveteMontado()">
                ${montarOpcSorvetes(sabores)}
            </select>
        `
    }
}

function montarOpcSorvetes(lista){
    htmlOpc = ``;
    for(let i = 0; i < lista.length; i++){
        opc = lista[i];
        sabor = opc[0];
        valor = opc[1];
        htmlOpc+=`<option value="${valor}">${sabor}</option>`
    }
    return htmlOpc;
}

export function sorveteMontado(){
    totalSorvete = 0.0;
    contagemVerificada = 0
    descSorvete = "";
    for(let i = 0; i < bolasSorvetes.length; i++){
        if(get("bola"+i).value != "0"){
            selecionado = get("bola"+i).selectedIndex;
            selecionado = get("bola"+i).options[selecionado];
            selecionado = selecionado.innerHTML;
            totalSorvete += parseFloat(get("bola"+i).value);
            contagemVerificada++;
            descSorvete+= " - "+selecionado;
        }
    }
    get("tituloSorvete").innerHTML= "Sorvete "+contagemVerificada+" Bolas, sabores: ";
    get("textoSorvete").innerHTML=descSorvete;
    get("valorSorvete").innerHTML=totalSorvete.toFixed(2);
    if(parseFloat(get("valorSorvete").innerHTML) > 0){
        get("sorveteMontado").style.display="flex";
    } else{
        get("sorveteMontado").style.display="none";
    }
}