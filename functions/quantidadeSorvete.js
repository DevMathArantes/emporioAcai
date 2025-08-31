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
let sabores = [
    ["Nenhum", 0.0],
    ["Corneto", 4.50],
    ["Nozes com doce de leite", 4.50],
    ["Abóbora com coco", 4.50],
    ["Creme", 4.50],
    ["Ninho trufado", 4.50],
    ["Red Velvet", 4.50],
    ["Sensação", 4.50],
    ["Mousse de creme de avelã", 4.50],
    ["Delírio", 4.50],
    ["Ameixa", 4.50],
    ["Laka", 4.50],
    ["Flocos", 4.50],
    ["Mousse de goiaba", 4.50],
    ["Mousse de maracujá", 4.50],
    ["Milho verde", 4.50],
    ["Banana com creme de avelã", 4.50],
    ["Morango silvestre 0", 4.50],
    ["Coca Malasia", 4.50],
    ["Torta chocolate", 4.50],
    ["Cheesecake", 4.50],
    ["Papaya com cassis", 4.50]
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