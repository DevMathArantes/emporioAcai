//Coletar id 
function get(id){
    return document.getElementById(id);
}

//Abre ou fecha o modal
function interagirModal(modal){
    if(get(modal).style.display == 'none'){
        get(modal).style.display='flex';
        document.body.style.overflow='hidden';
    }
    else{
        get(modal).style.display='none';
        document.body.style.overflow='visible';
    }
}

//Script geral

//Status aberto ou fechado
let dataAtual = new Date();
let horaAtual = dataAtual.getHours();
let minutoAtual = dataAtual.getMinutes();

if(horaAtual >= 14 && horaAtual < 22){
    if(((horaAtual == 14) && (minutoAtual >= 30)) || horaAtual > 14){
        get('status').innerHTML="Aberto";
    }
    else{
        get('status').innerHTML="Fechado";
    }
}
else{
    get('status').innerHTML="Fechado";
}

//Adicionais para açai  e sorvete 
let Doces = ["Nenhum",
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

//Adiciona a lista de adicionais a um select
function adicionarAdicionais(campo, lista){
    for(let i = 0; i < lista.length; i++){
        get(campo).innerHTML+=`
            <option value="">${lista[i]}</option>
        `;
    }
}

//Abre o modal de confirmar pedido com os dados do produto
function confirmarPedido(identificador, adicionaisInclusos, tipo){

    switch(tipo){
        case 1: lista = Doces;
    }

    modal = get('confirmarPedido');
    nome = get('nome'+identificador).innerHTML;
    descricao = get('descricao'+identificador).innerHTML;
    valor = get('valor'+identificador).innerHTML;

    modal.style.display='flex';
    modal.innerHTML=`
        <img src="Assets/Imagens/logo.jpg" alt="logo empório do açai">
        <h2>Boa escolha</h2>
        <h3>${nome}</h3>
        <p>${descricao}</p>
    `
    
    for(let i = 1; i <= adicionaisInclusos; i++){
        modal.innerHTML+=`
            <select id="adicionar${i}" class="adicionalIncluso" name="" id="">
                <option value="">Nenhum</option>
            </select>
        `;
        adicionarAdicionais('adicionar'+i, lista);
    }

    modal.innerHTML+=`
        <div class="adicionaisExtra" id="adicionaisExtra"></div>
        <button onclick="maisAdicional()">+ Adicional</button>
        <span>${valor}</span>
        <button>Confirmar</button>
    `
}

    //Adiciona mais adicionais ao modal de confirmar pedido
    function maisAdicional(){
        get('adicionaisExtra').innerHTML+=`
            <select class="adicionalExtra" name="" id="">
                <option value="">Nenhum</option>
            </select>
        `
    }