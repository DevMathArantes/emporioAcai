//Listas

    let Doces = [
        "Abacaxi R$ 3.50", "Aveia R$ 2.50", "Banana R$ 3.00", 
        "Bis branco R$ 3.00", "Bis preto R$ 3.00", "Chantilly R$ 3.00", 
        "Chocolate branco R$ 3.50", "Chocolate R$ 3.50", "Cobertura de caramelo R$ 2.50", 
        "Cobertura de chocolate R$ 2.50", "Cobertura de morango R$ 2.50", "Coco ralado R$ 3.00", 
        "Confete R$ 3.50", "Mel R$ 2.50", "Farinha lactea R$ 3.00",
        "Granola R$ 3.00", "Granulado R$ 2.50", "Kinder chocolate (ao leite) R$ 3.00",  
        "Leite condensado R$ 3.50", "Doce de leite R$ 2.50", "Goiabada R$ 3.00",
        "Paçoca R$ 2.75", "Pó de guaraná R$ 3.00", "Sonho de valsa R$ 3.00",
        "Space boll R$ 3.50", "Sucrilhos R$ 3.00", "Ovomaltine R$ 3.50", 
        "Ouro branco R$ 3.00",
          
        "Nutella x2 R$ 7.00", "Nutella R$ 4.50", "Castanha R$ 4.50",
        "Cereja R$ 6.00", "Chocolate suflair R$ 3.99", "Creme de ovomaltine R$ 5.50", 
        "Creme de paçoca R$ 3.99", "Creme de pistache R$ 6.50", "Leite Ninho R$ 4.00", 
        "Morango R$ 4.00", "Cupuaçu R$ 4.50", "Creme de morango R$ 5.00",
        "Creme de kit kat R$ 5.50", "Kit kat R$ 4.99", "Kiwi R$ 5.00",
        "Pasta de amendoim, sabor leite ninho R$ 4.99", "Whey protein R$ 4.99", "Creme laka R$ 5.00",
        "Creme de ouro branco R$ 4.50", "Creme de leite ninho R$ 5.00", "Creme de lacta com óreo R$ 5.00",
        "Creme de valsa R$ 4.50", "Creme diamante negro R$ 5.00", 

        "Ferrero rocher R$ 9.50", "Kinder bueno R$ 9.50", "Kinder ovo R$ 9.50"
    ];

    let Lanches = [ 
        "Bacon R$ 4.99", "Catupiry R$ 4.99","Cheddar R$ 4.99",
        "Creme de alho R$ 3.00", "Hambúrguer R$ 4.00", "Mussarela R$ 4.00",
        "Ovo R$ 2.00","Presunto R$ 4.00","Salada R$ 4.00"
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

//Funções coringa

    //Coleta id
    function get(id){
        return document.getElementById(id);
    }

    //Abre e fecha o modal
    function interagirModal(modal){
        if(get(modal).style.display == 'block'){
            get(modal).style.display='none';
            document.body.style.overflow='visible';
        }
        else{
            get(modal).style.display='block';
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
                if(parseFloat(lista[i].slice(-5)) < 3.99){
                    get(campo).innerHTML+=`<option value="${lista[i].slice(0, -8)}">${lista[i].slice(0, -8)}</option>`;
                }
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

    //Adiciona valores do select a descrição do produto
    function adicionarDescricao(identificador){
        let alteraValor = parseFloat(get('valor'+identificador).innerHTML)-parseFloat((get('descricao'+identificador).innerHTML).slice(-6));
        get('valor'+identificador).innerHTML= alteraValor.toString();
        get('descricao'+identificador).innerHTML = (get('descricao'+identificador).innerHTML).slice(0, -17);
        get('descricao'+identificador).innerHTML += get('borda'+identificador).value;
        alteraValor = parseFloat(get('valor'+identificador).innerHTML)+parseFloat((get('descricao'+identificador).innerHTML).slice(-6));
        get('valor'+identificador).innerHTML= (alteraValor.toFixed(2)).toString();
    }
    
    //Muda o titulo e preço do produto de acordo com o tamanho
    function mudarTamanho(identificador, maior, menor){
        let novoNome = (get('nome'+identificador).innerHTML).slice(0, -7);
        get('nome'+identificador).innerHTML=novoNome;
        if(get('tamanho'+identificador).value == 1){
            get('valor'+identificador).innerHTML=maior;
            get('nome'+identificador).innerHTML+="Grande)";
        }
        else{
            get('valor'+identificador).innerHTML=menor;
            get('nome'+identificador).innerHTML+="Média) ";
        }
    }

//Funções principais

    //abre o modal para confirmar o pedido
    let lista;
    function confirmar(identificador, adicionaisInclusos, adicionaisExtra, tipoLista){

        if(aberto()){
            //Reiniciando contagem de adicionais
            adicionais = 0;

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
                <p><span>R$ ${get('valor'+identificador).innerHTML}</span></p>
                <input id="lembrete" type="text" placeholder="Deseja adicionar algum lembrete ?">
                <button onclick="subirCarrinho('${identificador}', ${adicionaisInclusos})" class="pedir">
                    Confirmar
                </button>
            `;

            //Chamando funções auxiliares de verificação
            verificarExtras(adicionaisExtra);

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
        else{
            alert("No momento não estamos recebendo pedidos, agradecemos pela preferência! (Horário de funcionamento: 14h30 ás 22h00)")
        }
    }

    //Envia o produto para o carrinho
    let totalProdutos = 0;
    totalIds = 0;
    function subirCarrinho(identificador, adicionaisInclusos){
        
        //Adicionando contagem
        totalProdutos++;
        totalIds++;
        get('pedido').innerHTML+=`
            <div id="produtoCarrinho${totalIds}" class="produtoCarrinho">
                <h3 id="nomeCarrinho${totalIds}">${get('nome'+identificador).innerHTML}</h3>
                <p id="descricaoCarrinho${totalIds}">${get('descricao'+identificador).innerHTML}</p>
                <p id="adicionaisCarrinho${totalIds}"></p>
                <p id="lembreteCarrinho${totalIds}">${get('lembrete').value}</p>
                <span>Total: R$ <i id="valorCarrinho${totalIds}">${totalProduto(identificador)}</i></span>
                <button id="esquecer${totalIds}" onclick="esquecer('${totalIds}')">Esquecer</button>
            </div>
        `
        for(let i = 1; i <= adicionaisInclusos; i++){
            get('adicionaisCarrinho'+totalIds).innerHTML+=`${get('adicionarIncluso'+i).value} |`;
        }
        for(let i = 1; i <= adicionais; i++){
            get('adicionaisCarrinho'+totalIds).innerHTML+=`${get('adicionalExtra'+i).value} |`
        }

        //Chamando funções auxiliares
        interagirModal('confirmarPedido');
        
        get('totalItens').innerHTML=totalProdutos.toString();
    }

    //Gera o link do pedido
    let totalPedido = 0.0
    let link = "https://wa.me/551631723514?text=Pedido%20para:%20";
    let nulo;
    let verificado;
    function gerarPedido(){
        
        //Executa as devidas verificações
        verificado = true;
        verificaCampo('nome', 'Nome');
        verificaCampo('formaPagamento', 'Forma de pagamento');
        if(get('endereco').checked){
            verificaCampo('endereco1', 'Bairro');
            verificaCampo('endereco2', 'Rua');
            verificaCampo('endereco3', 'Número');
        }
        if(get('troco').style.display=='block'){
            verificaCampo('troco', 'Troco');
        }

        if(verificado){
            //Inserindo dados do formulário ao link
            link +=get('nome').value +"%0AEndereço:%0A";
            for(let i = 1; i <= 4; i++){
                link+=get('endereco'+i).value+"%0A";
            }
            link+="________________________%0A";
    
            //Inserindo dados do pedido ao link
            for(let i = 1; i <= totalIds; i++){
                if(get('produtoCarrinho'+i).style.display != 'none'){
                    
                    //Retirando as modificações de pedido
                    get('esquecer'+i).style.display='none';
    
                    //Adicionando o pedido ao link
                    link+="%0A"+get('nomeCarrinho'+i).innerHTML+"%0A";
                    link+=get('descricaoCarrinho'+i).innerHTML+"%0A";
                    link+=get('adicionaisCarrinho'+i).innerHTML+"%0A";
                    link+=get('lembreteCarrinho'+i).innerHTML+"%0A";
                    link+="R$%20"+get('valorCarrinho'+i).innerHTML+"%0A%0A";
    
                    totalPedido+=parseFloat(get('valorCarrinho'+i).innerHTML);
                }
            }
            link+="________________________%0A";
    
            //Inserindo valor do pedido e forma de pagamento ao link
            adicionarPagamento();
            link+="%0ATotal%20do%20pedido:%20R$%20"+(totalPedido.toFixed(2)).toString()+"%0A%0A";
    
            //Trocando final por link
            get('gerarLista').style.display='none';
            get('informacoesCliente').style.display='none';
    
            //Adicionando link e total do pedido
            get('pedido').innerHTML+=`
                <span>Total do pedido: R$ ${(totalPedido.toFixed(2)).toString()}</span>
                <a href="${link}">Enviar Pedido</a>
            `;
        }
        else{
            alert("Campo "+nulo+" está incorreto!")
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
  
    //Retirar do carrinho
    function esquecer(identificador){
        get('produtoCarrinho'+identificador).style.display='none';
        totalProdutos--;
        get('totalItens').innerHTML=totalProdutos.toString();
    }

    //Calcula total do produto
    function totalProduto(identificador){
        let valorTotal = parseFloat(get('valor'+identificador).innerHTML);
        for(let i = 1; i <= adicionais; i++){
            let valorAdicional = parseFloat((get('adicionalExtra'+i).value).slice(-5));
            valorTotal += valorAdicional;
        }
        return (valorTotal.toFixed(2)).toString();
    }

    //Verifica o método de pagamento
    let tipoPagamento;
    function verificaPagamento(){
        switch(get('formaPagamento').value){
            case "2":
                tipoPagamento = "Dinheiro";
                get('troco').style.display='block';
                break;
            case "3":
                get('troco').style.display='none';
                tipoPagamento = "Cartão";
                break;
            case "4":
                get('troco').style.display='none';
                tipoPagamento = "Pix";
                break;
        }
    } 

    //Adiciona os dados de pagamento ao link
    function adicionarPagamento(){
        switch(get('formaPagamento').value){
            case "1":
                break;
            case "2":
                let troco = parseFloat(get('troco').value) - totalPedido;
                link += "Dinheiro%0ATroco:%20"+(troco.toFixed(2))+"%20(troco%20para%20R$%20"+(parseFloat(get('troco').value)).toFixed(2)+")%0A";
                break;
            case "3":
                link +="Cartão%0A"
                break;
            case "4":
                link+="Pix%0AEnvie%20para:%2016993383633%0A(enviar%20comprovante%20neste%20contato)%0A";
                break;
        }
    }

    //Verifica se o campo estão devidamente preenchidos
    function verificaCampo(campo, vazio){
        if(get(campo).value===""){
            verificado = false;
            nulo = vazio;
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

    //Bordas 
    for(let i = 71; i <= 113; i++){
        preencherLista('borda'+i, Bordas, false);
    }
