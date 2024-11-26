//Coletar id 
function get(id){
    return document.getElementById(id);
}

//Abre ou fecha o modal
function interagirModal(modal){
    if(get(modal).style.display == 'none'){
        get(modal).style.display='block';
        document.body.style.overflow='hidden';
    }
    else{
        get(modal).style.display='none';
        document.body.style.overflow='visible';
    }
}