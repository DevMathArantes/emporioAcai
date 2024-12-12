//Listas

    let Doces = [
        "Abacaxi R$ 3.50", "Nutella R$ 4.50", "Nutella x2 R$ 7.00",
        "Aveia R$ 2.50", "Banana R$ 3.00", "Bis branco R$ 3.00",
        "Bis preto R$ 3.00", "Castanha R$ 4.50", "Cereja R$ 6.00",
        "Chantilly R$ 3.00", "Chocolate branco R$ 3.50", "Chocolate R$ 3.50",
        "Cobertura de caramelo R$ 2.50", "Cobertura de chocolate R$ 2.50","Cobertura de morango R$ 2.50",
        "Coco ralado R$ 3.00", "Confete R$ 3.50", "Creme de kit kat R$ 5.50",
        "Creme de lacta com óreo R$ 5.00", "Creme de leite ninho R$ 5.00", "Creme de ouro branco R$ 4.50",
        "Creme de valsa R$ 4.50", "Creme diamante negro R$ 5.00", "Creme laka R$ 5.00",
        "Cupuaçu R$ 4.50", "Chocolate suflair R$ 3.99", "Creme de morango R$ 5.00",
        "Creme de ovomaltine R$ 5.50", "Creme de paçoca R$ 3.99", "Creme de pistache R$ 6.50",
        "Doce de leite R$ 2.50", "Farinha lactea R$ 3.00", "Ferrero rocher R$ 9.50",
        "Goiabada R$ 3.00", "Granola R$ 3.00", "Granulado R$ 2.50",
        "Kinder bueno R$ 9.50", "Kinder chocolate (ao leite) R$ 3.00", "Kinder ovo R$ 9.50",
        "Kit kat R$ 4.99", "Kiwi R$ 5.00", "Leite condensado R$ 3.50",
        "Leite Ninho R$ 4.00", "Mel R$ 2.50", "Morango R$ 4.00",
        "Ouro branco R$ 3.00", "Ovomaltine R$ 3.50", "Paçoca R$ 2.75",
        "Pasta de amendoim, sabor leite ninho R$ 4.99", "Pó de guaraná R$ 3.00", "Sonho de valsa R$ 3.00",
        "Space boll R$ 3.50", "Sucrilhos R$ 3.00", "Whey protein R$ 4.99" 
    ];

    let Lanches = [ 
        "Bacon R$ 4.99", "Catupiry R$ 4.99","Cheddar R$ 4.99",
        "Creme de alho R$ 3.00", "Hambúrguer R$ 4.00", "Mussarela R$ 4.00",
        "Ovo R$ 2.00","Presunto R$ 4.00","Salada R$ 4.00"
    ];

    let Bordas = [
        "Borda mussarela R$ 21.00",
        "Borda catupiry R$ 16.00",
        "Borda cheddar R$ 16.00",
        "Borda de nutella R$ 16.00"
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

//Funções coringa

    //Coleta id
    function get(id){
        return document.getElementById(id);
    }

    //Abre e fecha o modal
    function interagirModal(modal){
        if(get(modal).style.display == 'flex'){
            get(modal).style.display='none';
            document.body.style.overflow='visible';
        }
        else{
            get(modal).style.display='flex';
            document.body.style.overflow='hidden';
        }
    }

    //Retorna o horário de funcionamento (true para aberto e false para fechado)
    let dataAtual = new Date();
    let horaAtual = dataAtual.getHours();
    let minutoAtual = dataAtual.getMinutes();

    function aberto(){
        if((horaAtual > 14) && (horaAtual < 21)){
            return true;
        }
        else if(((horaAtual == 14) && (minutoAtual > 30)) || ((horaAtual==21) && (minutoAtual < 30))){
            return true;
        }
        else{
            return false;
        }
    }

    //Preenche um select com uma lista de adicionais, inclusos ou não
    function preencherLista(campo, lista, incluso){
        if(incluso){
            for(let i = 0; i < lista.length; i++){
                get(campo).innerHTML+=`<option value="${lista[i].slice(0, -8)}">${lista[i].slice(0, -8)}</option>`;
            }
        }
        else{
            for(let i = 0; i < lista.length; i++){
                get(campo).innerHTML+=`<option value="${lista[i]}">${lista[i]}</option>`;
            }
        }
        
    }

    //Mudar descrição de acordo com value de um select
    function mudarDescricao(identificador){
        get('descricao'+identificador).innerHTML=`${get('mudarDescricao'+identificador).value}`;
    }
    
    //Muda o titulo e preço do produto de acordo com o tamanho
    function mudarTamanho(identificador, maior, menor){
        if(get('tamanho'+identificador).value == 1){
            get('valor'+identificador).innerHTML='R$ '+ maior;
            get('mostrarTamanho'+identificador).innerHTML= "(Grande)"
        }
        else{
            get('valor'+identificador).innerHTML='R$ '+ menor;
            get('mostrarTamanho'+identificador).innerHTML="(Meia)"
        }
    }

//Funções principais

    //abre o modal para confirmar o pedido
    let lista;
    function confirmar(identificador, adicionaisInclusos, adicionais, tipoLista){

        //Chamando funções auxiliares
        interagirModal('confirmarPedido');
        mostrarLista(tipoLista);
        

        //Preenchendo o modal com informações do produto
        get('confirmarPedido').innerHTML=`
            <img src="Assets/Imagens/logo.jpg" alt="logo empório do açai">
            <button onclick="interagirModal('confirmarPedido')" class="voltar">Voltar</button>
            <h2>Boa escolha</h2>
            <h3>${get('nome'+identificador).innerHTML}</h3>
            <p>${get('descricao'+identificador).innerHTML}</p>
            <div id="adicionaisInclusos"></div>
            <div id="adicionais"></div>
            <button id="criarAdicional" class="pedir" onclick="criarAdicional()">+ Adicional</button>
            <span>${get('valor'+identificador).innerHTML}</span>
            <input id="lembrete" type="text" placeholder="Deseja adicionar algum lembrete ?">
            <button onclick="" class="pedir">Confirmar</button>
        `;

        //Chamando funções auxiliares de verificação
        verificarExtras(adicionais);

        //Adicionando selects inclusos
        for(let i = 1; i <= adicionaisInclusos; i++){
            get('adicionaisInclusos').innerHTML+=`
                <select id="adicionarIncluso${i}" class="adicionalIncluso">
                    <option value="Nenhum">Nenhum</option>
                </select>
            `;
            preencherLista('adicionarIncluso'+i, lista, true);
        }
    }

//Funções auxiliares

    //Adiciona um select de adicional extra ao modal de confirmação com itens de uma lista
    let adicionais = 0;
    function criarAdicional(){
        adicionais++;
        get('adicionais').innerHTML+=`
            <select id="adicionalExtra${adicionais}" class="adicionalExtra">
                <option value="Nenhum R$ 00.00">Nenhum R$ 00.00</option>
            </select>
        `;
        preencherLista('adicionalExtra'+adicionais, lista, false);
    }

    //Define o tipo de lista a preencher os adicionais
    function mostrarLista(tipoLista){
        switch(tipoLista){
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

    //Define se o produto possui ou não adicionais
    function verificarExtras(extras){
        if(extras){
        }
        else{
            get('adicionais').style.display='none';
            get('criarAdicional').style.display='none';
        }
    }
  

//Script geral, separados em trechos com funções específicas

    //Muda o painel de Aberto/Fechado de acordo com o horário
    if(aberto()){
        get('status').innerHTML = "Aberto";
    }
    else{
        get('status').innerHTML = "Fechado";   
    }

    //Adicionando as opções de select

    //Sorvetes
    for(let i = 15; i<= 19; i++){
        preencherLista('mudarDescricao'+i, SaborSorvetes, false);
    }
    for(let i = 27; i<= 30; i++){
        preencherLista('mudarDescricao'+i, SaborSorvetes, false);
    }







//Enviar para o pedido
function pedir(identificador){
    totalPedidos++;
    get('pedido').innerHTML+=`
        <div id="itemAdicionado${totalPedidos}" class="itemFinal">
            <h2 id="itemNome${totalPedidos}">${get('nome'+identificador).innerHTML}</h2>
            <p id="itemDescricao${totalPedidos}">${get('descricao'+identificador).innerHTML}</p>
            <p id="itemAdicionais${totalPedidos}" class="adicionais"></p>
            <p id="itemLembrete${totalPedidos}"></p>
            <span id="itemValor${totalPedidos}">Total do item: ${get('valor'+identificador).innerHTML}</span>
            <button onclick="esquecer('itemAdicionado${totalPedidos}')">Esquecer</button>
        </div>
    `;
    totalItens++;
    get('totalItens').innerHTML=totalItens.toString();
}

function esquecer(item){
    get(item).style.display='none';
    totalItens--;
    get('totalItens').innerHTML=totalItens.toString();
}
//
function pedidoPersonalizado(adicionaisInclusos){
    let listaAdicionais = "";
    totalPedidos++;
    let totalDoItem = parseFloat((get('precoItem').innerHTML).slice(2));
    for(let i = 1; i <= adicionaisInclusos; i++){
        listaAdicionais+= get('adicionar'+i).value+" | ";
    }
    for(let i = 1; i <= totalExtras; i++){
        listaAdicionais += get('adicionalExtra'+i).value+" | ";
        totalDoItem +=parseFloat((get('adicionalExtra'+i).value).slice(-4));
    }
    get('pedido').innerHTML+=`
        <div id="itemAdicionado${totalPedidos}" class="itemFinal">
            <h2 id="itemNome${totalPedidos}">${get('confirmarNome').innerHTML}</h2>
            <p id="itemDescricao${totalPedidos}">${get('confirmarDescricao').innerHTML}</p>
            <p id="itemAdicionais${totalPedidos}" class="adicionais">${listaAdicionais}</p>
            <p id="itemLembrete${totalPedidos}">${get('lembrete').value}</p>
            <span id="itemValor${totalPedidos}">Total do item: R$ ${(totalDoItem.toFixed(2)).toString()}</span>
            <button onclick="esquecer('itemAdicionado${totalPedidos}')">Esquecer</button>
        </div>
    `;
    totalItens++;
    totalExtras = 0;
    get('totalItens').innerHTML=totalItens.toString();
    alert("Adicionado ao carrinho com sucesso!")
    interagirModal('confirmarPedido');
}

//
function gerarPedido(){
    let verificador = true;
    if(formaPagamento == ""){
        alert("informe o método de pagamento!")
        verificador = false;
    }
    if(get('nome').value == ""){
        alert("Informe seu nome!")
        verificador= false
    }
    if(get('endereco').checked){
       for(let i = 1; i<=4; i++){
            if(get('endereco'+i).value == ""){
                verificador = false;
                alert('Endereço incompleto!')
            }
       }
    }
  
    if(verificador == true){
        let totalValor = 0.0;
        for(let i = 1; i <= totalPedidos; i++){
            if(get('itemAdicionado'+i).style.display != 'none'){
                get('pedido').innerHTML+=`
                    <div class="listaFinal">
                        <h3>${get('itemNome'+i).innerHTML}</h3>
                        <p>${get('itemDescricao'+i).innerHTML}</p>
                        <p>${get('itemAdicionais'+i).innerHTML}</p>
                        <p>${get('itemLembrete'+i).innerHTML}</p>
                        <span>${get('itemValor'+i).innerHTML}</span>
                    </div>
                `;
                get('informacoesCliente').style.display='none';
                get('itemAdicionado'+i).style.display='none';
                totalValor+= parseFloat((get('itemValor'+i).innerHTML).slice(-5));
                get('gerarLista').style.display='none';
            }
        }
        get('gerarLista').style.display='none';
        get('informacoesCliente').style.display='none';
        get('pedido').innerHTML=`<h2>Total: R$${(totalValor.toFixed(2)).toString()}</h2>`
    }
}

let formaPagamento = "";
function verificaPagamento(){
    let valor = get('formaPagamento').value;
    switch(valor){
        case '1':
            formaPagamento ="";
            break;
        case '2':
            formaPagamento = "Dinheiro";
            get('troco').style.display="block";
            break;
        case '3':
            formaPagamento = "Cartão";
            break;
        case '4':
            formaPagamento = "Pix"
            break;
    }
}