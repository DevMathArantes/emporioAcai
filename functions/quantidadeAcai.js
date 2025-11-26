import { get } from "./utils.js"

let bolasAcais = [];
let contagemAcais = 1;
let htmlOpc;
let opc;
let sabor;
let valor;
let selecionado;
let totalAcais;
let descAcais;
let contagemVerificada;

let preco = 5.00;
let sabores = [
    ["Nenhum", 0.0],
    ["Açaí zero ", preco],
    ["Açaí com paçoca ", preco],
    ["Açaí com maracujá ", preco],
    ["Ação com mousse de limão ", preco],
    ["Açaí com ninho", preco],
    ["Açaí trufado com chocolate ", preco],
    ["Açaí com abacaxi ", preco],
    ["Açaí com banana ", preco],
    ["Açaí com morango ", preco],
    ["Açaí com frutas vermelhas", preco],
];

export function adicionarAcai(){
    bolasAcais.push(contagemAcais);
    contagemAcais++;
    montarAcais();
}

export function retirarAcai(){
    if(bolasAcais.length != 1){
        bolasAcais.pop();
        contagemAcais--;
        montarAcais();
    }
}

function montarAcais(){
    get('quantidadeAcai').innerHTML=bolasAcais.length;
    get('campoAcais').innerHTML = ``;

    for(let i = 0; i < bolasAcais.length; i++){
        get('campoAcais').innerHTML+=`
            <select id="acai${i}" onchange="globalAcaiMontado()">
                ${montarOpcAcais(sabores)}
            </select>
        `
    }
}

function montarOpcAcais(lista){
    htmlOpc = ``;
    for(let i = 0; i < lista.length; i++){
        opc = lista[i];
        sabor = opc[0];
        valor = opc[1];
        htmlOpc+=`<option value="${valor}">${sabor}</option>`
    }
    return htmlOpc;
}

export function acaiMontado(){
    totalAcais = 0.0;
    contagemVerificada = 0
    descAcais = "";
    for(let i = 0; i < bolasAcais.length; i++){
        if(get("acai"+i).value != "0"){
            selecionado = get("acai"+i).selectedIndex;
            selecionado = get("acai"+i).options[selecionado];
            selecionado = selecionado.innerHTML;
            totalAcais += parseFloat(get("acai"+i).value);
            contagemVerificada++;
            descAcais+= " - "+selecionado;
        }
    }
    get("tituloAcai").innerHTML= "Açai "+contagemVerificada+" Bolas, sabores: ";
    get("textoAcai").innerHTML=descAcais;
    get("valorAcai").innerHTML=totalAcais.toFixed(2);
    if(parseFloat(get("valorAcai").innerHTML) > 0){
        get("acaiMontado").style.display="flex";
    } else{
        get("acaiMontado").style.display="none";
    }
}