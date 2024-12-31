//Listas

let Doces = [
    "Aveia R$ 2.50", "Cobertura de caramelo R$ 2.50", "Cobertura de chocolate R$ 2.50",
    "Cobertura de morango R$ 2.50", "Mel R$ 2.50", "Granulado R$ 2.50",
    "Doce de leite R$ 2.50", "Paçoca R$ 2.75", "Banana R$ 3.00",
    "Bis branco R$ 3.00", "Bis preto R$ 3.00", "Chantilly R$ 3.00",
    "Coco ralado R$ 3.00", "Granola R$ 3.00", "Farinha lactea R$ 3.00",
    "Sonho de valsa R$ 3.00", "Sucrilhos R$ 3.00",
    "Pó de guaraná R$ 3.00", "Ouro branco R$ 3.00", "Goiabada R$ 3.00",
    "Abacaxi R$ 3.50", "Chocolate branco R$ 3.50", "Chocolate R$ 3.50",
    "Confete R$ 3.50", "Leite condensado R$ 3.50", "Space boll R$ 3.50",
    "Chocolate suflair R$ 3.99", "Creme de paçoca R$ 3.99",
    "Ovomaltine R$ 3.50", "Leite Ninho R$ 4.00", "Morango R$ 4.00",
    "Nutella R$ 4.50", "Castanha R$ 4.50", "Creme de ouro branco R$ 4.50",
    "Cupuaçu R$ 4.50", "Creme de valsa R$ 4.50", "Kit kat R$ 4.99",
    "Pasta de amendoim, sabor leite ninho R$ 4.99", "Whey protein R$ 4.99", "Creme diamante negro R$ 5.00",
    "*Creme de morango R$ 5.00", "Kiwi R$ 5.00", "Creme laka R$ 5.00",
    "Creme de leite ninho R$ 5.00", "Creme de lacta com óreo R$ 5.00", "*Creme de ovomaltine R$ 5.50",
    "*Creme de kit kat R$ 5.50", "*Cereja R$ 6.00", "*Creme de pistache R$ 6.50",
    "*Nutella x2 R$ 7.00", "*Ferrero rocher R$ 9.50", "*Kinder bueno R$ 9.50"
];

let Lanches = [
    "Bacon R$ 4.99", "Catupiry R$ 4.99", "Cheddar R$ 4.99",
    "Creme de alho R$ 3.00", "Hambúrguer R$ 4.00", "Mussarela R$ 4.00",
    "Ovo R$ 2.00", "Presunto R$ 4.00", "Salada R$ 4.00"
];

let Bordas = [
    "Musarela R$ 21.00",
    "Catupiry R$ 16.00",
    "Cheddar R$ 16.00 ",
    "Nutella R$ 16.00 "
];

let SaborSorvetes = [
    "Corneto", "Nozes com doce de leite", "Abóbora com coco",
    "Creme", "Ninho trufado", "Red Velvet",
    "Sensação", "Mousse de nutella", "Delírio",
    "Ameixa", "Laka", "Flocos",
    "Mousse de goiaba", " Mousse de maracujá", "Pavê trufado",
    "Milho verde", "Torta de limão", "Banana com nutella",
    "Morango silvestre 0", "Coca Malasia", "Torta chocolate",
    "Cheesecake", "Papaya com cassis", "Caraxi",
];

let Pizzas = [];

//Funções coringa

//
function horario() {
    alert("Segunda a Quinta: 14h30 ás 21h30 \n Sexta a Domingo: 14h30 ás 22h30");
}

//Coleta id
function get(id) {
    return document.getElementById(id);
}

//Abre e fecha o modal
function interagirModal(modal) {
    if (get(modal).style.display == 'block') {
        get(modal).style.display = 'none';
        document.body.style.overflow = 'visible';
    }
    else {
        get(modal).style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

//retorna true para aberto e false para fechado
let dataAtual = new Date();
let horaAtual = dataAtual.getHours();
let minutoAtual = dataAtual.getMinutes();
function aberto() {
    if (((dataAtual.getDay()) >= 1) && ((dataAtual.getDay()) < 5)) {
        if ((horaAtual > 14) && (horaAtual < 21)) {
            return true;
        }
        else if (((horaAtual == 14) && (minutoAtual > 30)) || ((horaAtual == 21) && (minutoAtual < 30))) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        if ((horaAtual > 14) && (horaAtual < 22)) {
            return true;
        }
        else if (((horaAtual == 14) && (minutoAtual > 30)) || ((horaAtual == 22) && (minutoAtual < 30))) {
            return true;
        }
        else {
            return false;
        }
    }
}

//Preenche um select com uma lista de adicionais, inclusos ou não
function preencherLista(campo, tipo) {
    for (let i = 0; i < tipo.length; i++) {
        get(campo).innerHTML += `<option value="${tipo[i]}">${tipo[i]}</option>`;
    }
}

//Mudar descrição de acordo com value de um select
function mudarDescricao(identificador) {
    get('descricao' + identificador).innerHTML = `${get('mudarDescricao' + identificador).value}`;
}

//Adiciona valores do select a descrição do produto
function adicionarDescricao(identificador) {
    let alteraValor = parseFloat(get('valor' + identificador).innerHTML) - parseFloat((get('descricao' + identificador).innerHTML).slice(-6));
    get('valor' + identificador).innerHTML = alteraValor.toString();
    get('descricao' + identificador).innerHTML = (get('descricao' + identificador).innerHTML).slice(0, -17);
    get('descricao' + identificador).innerHTML += get('borda' + identificador).value;
    alteraValor = parseFloat(get('valor' + identificador).innerHTML) + parseFloat((get('descricao' + identificador).innerHTML).slice(-6));
    get('valor' + identificador).innerHTML = (alteraValor.toFixed(2)).toString();
}

//Muda o titulo e preço do produto de acordo com o tamanho
function mudarTamanho(identificador, maior, menor) {
    let novoNome = (get('nome' + identificador).innerHTML).slice(0, -7);
    get('nome' + identificador).innerHTML = novoNome;
    if (get('tamanho' + identificador).value == 1) {
        get('valor' + identificador).innerHTML = maior;
        get('nome' + identificador).innerHTML += "Grande)";
    }
    else {
        get('valor' + identificador).innerHTML = menor;
        get('nome' + identificador).innerHTML += "Média) ";
    }
}

//Muda o Nome e valor do produto de acordo com o select
function alternarProduto(identificador) {
    get('alternar' + identificador).value;
    get('descricao' + identificador).innerHTML = (get('alternar' + identificador).value).slice(0, -5);
    get('valor' + identificador).innerHTML = (get('alternar' + identificador).value).slice(-5);
}

//Função para a pizza de 2 sabores
function doisSabores(){
    let sabor1 = (get('sabor1148').value).slice(0, -5);
    let sabor2 = (get('sabor2148').value).slice(0, -5);
    get('descricao148').innerHTML= sabor1 + " + "+ sabor2
    let preco1 = parseFloat((get('sabor1148').value).slice(-5));
    let preco2 = parseFloat((get('sabor2148').value).slice(-5));
    if(preco1 >= preco2){
        get('valor148').innerHTML=(preco1.toFixed(2)).toString();
    }
    else{
        get('valor148').innerHTML=(preco2.toFixed(2)).toString();
    }
}

//Funções principais

//abre o modal para confirmar o pedido
let lista;
function confirmar(identificador, adicionaisInclusos, adicionaisExtra, tipoLista) {

    if (aberto()) {

        //Chamando funções auxiliares
        interagirModal('confirmarPedido');
        mostrarLista(tipoLista);


        //Preenchendo o modal com informações do produto
        get('confirmarPedido').innerHTML = `
                <img src="Assets/Imagens/logo.jpg" alt="logo empório do açai">
                <button onclick="interagirModal('confirmarPedido')" class="voltar">Voltar</button>
                <h2>Boa escolha</h2>
                <h3>${get('nome' + identificador).innerHTML}</h3>
                <p>${get('descricao' + identificador).innerHTML}</p>
                <input class="abrirCampo" id="abrirAdicionais" type="checkbox">
                <label id="revelarAdicionais" class="labelDinamico" for="abrirAdicionais">Ver Adicionais</label>
                <div class="campoDinamico" id="adicionais"></div>
                <div class="campoDinamico" id="opcionais">
                    <p>Opcionais (pago a parte): </p>
                </div>
                <p>R$<span id="confirmarValor"> ${get('valor' + identificador).innerHTML}</span></p>
                <input id="lembrete" type="text" placeholder="Deseja adicionar algum lembrete ?">
                <button onclick="subirCarrinho('${identificador}', ${adicionaisExtra})" class="pedir">
                    Confirmar
                </button>
            `;

        //Chamando funções auxiliares pós-modal
        if (adicionaisExtra) {
            montarAdicionais(adicionaisInclusos);
        }
        else {
            get('revelarAdicionais').style.display = 'none';
        }

    }
    else {
        alert("Agradecemos pela preferência! (abriremos ás 14h30)");
    }
}

//Envia o produto para o carrinho
let totalProdutos = 0;
totalIds = 0;
function subirCarrinho(identificador, adicionais) {

    //Adicionando contagem
    totalProdutos++;
    totalIds++;
    get('pedido').innerHTML += `
            <div id="produtoCarrinho${totalIds}" class="produtoCarrinho">
                <h3 id="nomeCarrinho${totalIds}">${get('nome' + identificador).innerHTML}</h3>
                <p id="descricaoCarrinho${totalIds}">${get('descricao' + identificador).innerHTML}</p>
                <p class="adicionais" id="adicionaisCarrinho${totalIds}">ADICIONAIS: </p>
                <p id="lembreteCarrinho${totalIds}">${get('lembrete').value}</p>
                <span>Total: R$ <i id="valorCarrinho${totalIds}">${get('confirmarValor').innerHTML}</i></span>
                <button id="esquecer${totalIds}" onclick="esquecer('${totalIds}')">Esquecer</button>
            </div>
        `

    if (adicionais) {
        for (let i = 0; i < lista.length; i++) {
            if (get('adicional' + i).checked) {
                get('adicionaisCarrinho' + totalIds).innerHTML += " [" + get('nomeAdicional' + i).innerHTML + "] - ";
            }
        }
    }
    else {
        get('adicionaisCarrinho' + totalIds).style.display = 'none';
    }

    //Chamando funções auxiliares
    interagirModal('confirmarPedido');
    verificaCarrinho();

}

//Gera o link do pedido
let totalPedido = 0.0
let link = "https://wa.me/551631723514?text=Pedido%20para:%20";
let nulo;
let verificado;
function gerarPedido() {

    //Executa as devidas verificações
    verificado = true;
    verificaCampo('nome', 'Nome');
    verificaCampo('formaPagamento', 'Forma de pagamento');
    if (get('endereco').checked) {
        verificaCampo('endereco1', 'Bairro');
        verificaCampo('endereco2', 'Rua');
        verificaCampo('endereco3', 'Número');
    }
    if (get('troco').style.display == 'block') {
        verificaCampo('troco', 'Troco');
    }

    if (verificado) {

        //Inserindo dados do formulário ao link
        link += get('nome').value;
        if (get('endereco').checked) {
            totalPedido += 5.00;
            link += "%0ATaxa de entrega: R$ 5.00%0AEndereço:%0A";
            for (let i = 1; i <= 4; i++) {
                link += get('endereco' + i).value + "%0A";
            }
        }
        link += "%0A__________________________________%0A";

        //Inserindo dados do pedido ao link
        for (let i = 1; i <= totalIds; i++) {
            if (get('produtoCarrinho' + i).style.display != 'none') {

                //Retirando as modificações de pedido
                get('esquecer' + i).style.display = 'none';

                //Adicionando o pedido ao link
                link += "%0A* " + get('nomeCarrinho' + i).innerHTML + "%0A";
                link += "%0A* Descrição: " + get('descricaoCarrinho' + i).innerHTML + "%0A";

                //Verificando se o item possui adicionais
                if (get('adicionaisCarrinho' + i).style.display != 'none') {
                    link += "%0A* Adicionais: " + get('adicionaisCarrinho' + i).innerHTML + "%0A";
                }

                link += "%0A* Lembrete: " + get('lembreteCarrinho' + i).innerHTML + "%0A";
                link += "%0A* Total do item: " + "R$%20" + get('valorCarrinho' + i).innerHTML + "%0A%0A";
                link += "%0A----------------------------------------------------%0A";

                //Somando valor ao total
                totalPedido += parseFloat(get('valorCarrinho' + i).innerHTML);
            }
        }
        link += "%0A_________________________________%0A";

        //Inserindo valor do pedido e forma de pagamento ao link
        adicionarPagamento();
        link += "%0ATotal%20do%20pedido:%20R$%20" + (totalPedido.toFixed(2)).toString() + "%0A%0A";

        //Trocando final por link
        get('gerarLista').style.display = 'none';
        get('informacoesCliente').style.display = 'none';

        //Adicionando link e total do pedido
        get('pedido').innerHTML += `
                <span>Total do pedido: R$ ${(totalPedido.toFixed(2)).toString()}</span>
                <a href="${link}">Enviar Pedido</a>
            `;
    }
    else {
        alert("Campo " + nulo + " está incorreto!")
    }
}

//Funções auxiliares

//Faz o carrinho aparecer quando não está vazio
function verificaCarrinho() {
    if (totalProdutos > 0) {
        get('btnPedido').style.display = 'flex';

    }
    if (totalProdutos == 0) {
        interagirModal('carrinho')
        get('btnPedido').style.display = 'none';
    }
}

//Define o tipo de lista a preencher os adicionais
function mostrarLista(tipoLista) {
    switch (tipoLista) {
        case 0:
            lista = null;
            break;
        case 1:
            lista = Doces;
            break;
        case 2:
            lista = Lanches;
            break;
        case 3:
            lista = Bordas;
            break;
        case 4:
            lista = SaborSorvetes
            break;
    }
}

//Retirar do carrinho
function esquecer(identificador) {
    get('produtoCarrinho' + identificador).style.display = 'none';
    totalProdutos--;
    verificaCarrinho()
}

//Calcula total do produto
function totalProduto(identificador) {
    let valorTotal = parseFloat(get('valor' + identificador).innerHTML);
    for (let i = 1; i <= adicionais; i++) {
        let valorAdicional = parseFloat((get('adicionalExtra' + i).value).slice(-5));
        valorTotal += valorAdicional;
    }
    return (valorTotal.toFixed(2)).toString();
}

//Verifica o método de pagamento
let tipoPagamento;
function verificaPagamento() {
    switch (get('formaPagamento').value) {
        case "2":
            tipoPagamento = "Dinheiro";
            get('troco').style.display = 'block';
            break;
        case "3":
            get('troco').style.display = 'none';
            tipoPagamento = "Cartão";
            break;
        case "4":
            get('troco').style.display = 'none';
            tipoPagamento = "Pix";
            break;
    }
}

//Adiciona os dados de pagamento ao link
function adicionarPagamento() {
    switch (get('formaPagamento').value) {
        case "1":
            break;
        case "2":
            let troco = parseFloat(get('troco').value) - totalPedido;
            link += "Dinheiro%0ATroco:%20" + (troco.toFixed(2)) + "%20(troco%20para%20R$%20" + (parseFloat(get('troco').value)).toFixed(2) + ")%0A";
            break;
        case "3":
            link += "Cartão%0A"
            break;
        case "4":
            link += "Pix%0AEnvie%20para:%2016993383633%0A(enviar%20comprovante%20neste%20contato)%0A";
            break;
    }
}

//Verifica se o campo estão devidamente preenchidos
function verificaCampo(campo, vazio) {
    if (get(campo).value === "") {
        verificado = false;
        nulo = vazio;
    }
}

//Adiciona os adicionais ao item
function montarAdicionais(inclusos) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].slice(0, 1) != "*") {
            get('adicionais').innerHTML += `
                    <div class="adicionais">
                        <input id="adicional${i}" onchange="interagirAdicional(${i}, ${inclusos})" id="adicionalListado${i}" type="checkbox">
                        <label id="nomeAdicional${i}" for="adicional${i}">${lista[i]}</label>
                    </div>
                `;
        }
        else {
            get('opcionais').innerHTML += `
                    <div class="adicionais">
                        <input id="adicional${i}" onchange="interagirAdicional(${i}, ${0})" id="adicionalListado${i}" type="checkbox">
                        <label id="nomeAdicional${i}" for="adicional${i}">${lista[i].slice(1)}</label>
                    </div>
                `;
        }
    }
}

//Adiciona ou retira o adicional da contagem
function interagirAdicional(identificador, inclusos) {

    //Contagem de adicionais inclusos
    let contagem = 1;
    for (let i = 0; i < lista.length; i++) {
        if (get('nomeAdicional' + i).innerHTML.slice(-9) == "(INCLUSO)") {
            contagem++;
        }
    }

    //Quando a checkbox for marcada
    if (get('adicional' + identificador).checked) {

        //Se a contagem for maior que inclusos, o preço será adicionado
        if (contagem > inclusos) {
            let adicionarValor = parseFloat(get('confirmarValor').innerHTML);
            adicionarValor += parseFloat((get('nomeAdicional' + identificador).innerHTML).slice(-5))
            get('confirmarValor').innerHTML = adicionarValor.toFixed(2);
        }

        //Produto incluso, não deve ser cobrado
        else {
            get('nomeAdicional' + identificador).innerHTML += ` (INCLUSO)`;
        }
    }

    //Quando a checkbox for desmarcada
    else {

        //Se for incluso, não há alteração de preço
        if (get('nomeAdicional' + identificador).innerHTML.slice(-9) == "(INCLUSO)") {
            get('nomeAdicional' + identificador).innerHTML = (get('nomeAdicional' + identificador).innerHTML).slice(0, -10);
        }

        //Produto não incluso, preço deve ser retirado
        else {
            let retirarValor = parseFloat(get('confirmarValor').innerHTML);
            retirarValor -= parseFloat((get('nomeAdicional' + identificador).innerHTML).slice(-5))
            get('confirmarValor').innerHTML = retirarValor.toFixed(2);
        }
    }
}

//Script geral, separados em trechos com funções específicas

//Muda o painel de Aberto/Fechado de acordo com o horário
if (aberto()) {
    get('status').innerHTML = "Aberto";
}
else {
    get('status').innerHTML = "Fechado";
}

//Adicionando as opções de select

//Sorvetes
preencherLista('mudarDescricao19', SaborSorvetes);

for (let i = 27; i <= 30; i++) {
    preencherLista('mudarDescricao' + i, SaborSorvetes);
}

//Bordas 
for (let i = 71; i <= 113; i++) {
    preencherLista('borda' + i, Bordas);
}
//Pizza 2 sabores é um produto novo, identificador em "Notas/novosProdutos.txt"

for(let i = 71; i <= 113; i++){
    let item = get('nome'+i).innerHTML+" R$ "+get('valor'+i).innerHTML
    Pizzas.push(item);
}
preencherLista('sabor1148', Pizzas);
preencherLista('sabor2148', Pizzas);





