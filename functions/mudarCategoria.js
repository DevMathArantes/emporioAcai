import { get } from "./utils.js";
import { grupos } from "../script.js";

let valorSelect;

//Altera a categoria de produtos visiveis
export function mudarCategoria(){
    
    valorSelect = get("grupoAtual").value;

    get("imagemGrupo").style.backgroundImage="url(../assets/images/"+ valorSelect +".png)";
        
    if(valorSelect == "tudo"){

        for(let i = 0; i < grupos.length; i++){

            get(grupos[i]).style.display="block";

        }

    } else{
        for(let i = 0; i < grupos.length; i++){

            if(valorSelect == grupos[i]){

                get(grupos[i]).style.display="block";

            } else{

                get(grupos[i]).style.display="none";

            }

        }
    }

}