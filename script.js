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