import { get } from "../utils/utils.js";
import { calculoTotal } from "./calculoTotal.js";
import { linkMontado } from "./link.js";
import { customAlert } from "../utils/funcionamento.js";

export function montarLink() {
    const nomeVal = get('nome') ? get('nome').value.trim() : "";
    if (nomeVal === "") {
        customAlert("Nome obrigatório", "Por favor, informe o seu nome para continuarmos.");
        return;
    }

    if (verificaEntrega() && verificaPagamento()) {
        get('controlesCarrinho').innerHTML = `
            <button onclick="globalMontarFormulario()" class="carrinho-nav-btn voltar-carrinho-btn">
                <img src="assets/icons/setaEsquerda.png" alt="Voltar">
                <span>Voltar</span>
            </button>
        `;

        get('compra').innerHTML = `
            <div class="checkout-step-intro">
                <h2>Tudo Pronto!</h2>
                <p>O link com todos os detalhes do seu pedido foi gerado com sucesso.</p>
            </div>

            <div class="checkout-success-pane">
                <img class="imgPd success-logo" src="assets/images/logo.png" alt="Logo">
                
                <div class="order-summary-box">
                    <p>Total do pedido: <strong>R$ ${calculoTotal().toFixed(2)}</strong></p>
                </div>

                <a href="${linkMontado()}" target="_blank" class="primary-btn-pizza whatsapp-btn">
                    <img src="assets/icons/enviar.png" alt="Enviar">
                    Enviar via WhatsApp
                </a>

                <p class="whatsapp-instruction">
                    Clique no botão acima para abrir o WhatsApp e nos enviar o texto gerado automaticamente.
                </p>
            </div>
        `;
    }
}

function verificaEntrega() {
    const entregaRadio1 = get('entrega1');
    const entregaRadio2 = get('entrega2');
    const entregaRadio3 = get('entrega3');

    if (!entregaRadio1 || !entregaRadio2 || !entregaRadio3) return false;

    if (entregaRadio1.checked) {
        // Delivery
        const bairro = get('endereco1') ? get('endereco1').value.trim() : "";
        const rua = get('endereco2') ? get('endereco2').value.trim() : "";
        const numero = get('endereco3') ? get('endereco3').value.trim() : "";

        if (bairro === "" || rua === "" || numero === "") {
            customAlert("Endereço Incompleto", "Por favor, preencha todos os campos obrigatórios do endereço (Rua, Número e Bairro).");
            return false;
        }
        return true;
    } else if (entregaRadio2.checked || entregaRadio3.checked) {
        // Pickup or Estoy no Local
        return true;
    }

    customAlert("Modo de Entrega", "Por favor, selecione um modo de entrega.");
    return false;
}

function verificaPagamento() {
    const pag1 = get('pagamento1'); // Dinheiro
    const pag2 = get('pagamento2'); // Cartão
    const pag3 = get('pagamento3'); // Pix

    if (!pag1 || !pag2 || !pag3) return false;

    if (pag1.checked) {
        const trocoVal = get('troco') ? get('troco').value.trim() : "";
        if (trocoVal !== "") {
            const troco = parseFloat(trocoVal);
            const total = calculoTotal();
            if (isNaN(troco) || troco < total) {
                customAlert("Troco Inválido", `O valor informado para troco (R$ ${troco.toFixed(2)}) é menor que o total do pedido (R$ ${total.toFixed(2)}).`);
                return false;
            }
        }
        return true;
    } else if (pag2.checked) {
        const cartao1 = get('cartao1'); // Crédito
        const cartao2 = get('cartao2'); // Débito
        if ((cartao1 && cartao1.checked) || (cartao2 && cartao2.checked)) {
            return true;
        }
        customAlert("Opção do Cartão", "Por favor, selecione o tipo do cartão (Crédito ou Débito).");
        return false;
    } else if (pag3.checked) {
        return true;
    }

    customAlert("Forma de Pagamento", "Por favor, selecione uma forma de pagamento.");
    return false;
}
