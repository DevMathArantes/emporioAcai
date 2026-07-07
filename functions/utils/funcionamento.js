import { funcionamento, funcionamentoAtivo } from "../../config.js";
import { customAlert } from "./utils.js";

const semana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
];

// Helper to show a premium custom modal alert instead of standard browser alert
export function customAlertModal(titulo, mensagem) {
    customAlert(titulo, mensagem);
}

// Retorna se estamos abertos ou fechados
export function status() {
    // If system is explicitly deactivated, we are closed regardless of hours
    if (funcionamentoAtivo === false) {
        return false;
    }

    const agora = new Date();

    const dia = agora.getDay();
    const hora = agora.getHours();
    const minuto = agora.getMinutes();
    
    const diaAtual = funcionamento[dia];
    const abrir = diaAtual[0];
    
    if (abrir == null) {
        return false;
    }
    
    const fechar = diaAtual[1];
    
    // Convert current time, open time, close time to absolute minutes for easy comparison
    const minutosAtual = hora * 60 + minuto;
    const minutosAbrir = abrir[0] * 60 + abrir[1];
    const minutosFechar = fechar[0] * 60 + fechar[1];

    if (minutosFechar > minutosAbrir) {
        // Normal schedule (e.g. 18:00 to 23:30)
        return minutosAtual >= minutosAbrir && minutosAtual < minutosFechar;
    } else {
        // Overnight schedule (e.g. 18:00 to 01:00)
        return minutosAtual >= minutosAbrir || minutosAtual < minutosFechar;
    }
}

export function infoStatus() {
    let funcionamentoTxt = "Confira nossos horários de atendimento:\n";
    
    // Show Sunday first or Monday first? Loop:
    // Sunday (0) at the end, Mon-Sat (1-6) first
    for (let i = 1; i < semana.length; i++) {
        const diaSemana = funcionamento[i];
        const abrir = diaSemana[0];
        if (abrir != null) {
            const fechar = diaSemana[1];
            funcionamentoTxt += `\n• **${semana[i]}**: ${abrir[0].toString().padStart(2, '0')}h${abrir[1].toString().padStart(2, '0')} às ${fechar[0].toString().padStart(2, '0')}h${fechar[1].toString().padStart(2, '0')}`;
        } else {
            funcionamentoTxt += `\n• **${semana[i]}**: Fechado`;
        }
    }
    
    const diaSemanaDom = funcionamento[0];
    const abrirDom = diaSemanaDom[0];
    if (abrirDom != null) {
        const fecharDom = diaSemanaDom[1];
        funcionamentoTxt += `\n• **${semana[0]}**: ${abrirDom[0].toString().padStart(2, '0')}h${abrirDom[1].toString().padStart(2, '0')} às ${fecharDom[0].toString().padStart(2, '0')}h${fecharDom[1].toString().padStart(2, '0')}`;
    } else {
        funcionamentoTxt += `\n• **${semana[0]}**: Fechado`;
    }

    customAlert("Horários de Funcionamento", funcionamentoTxt);
}

export function avisoStatus() {
    const agora = new Date();
    const dia = agora.getDay();
    const diaAtual = funcionamento[dia];
    const abrir = diaAtual[0];
    
    let aviso = "Agradecemos a preferência.\n\n";
    if (abrir != null) {
        const fechar = diaAtual[dia]; // wait, in brancoLanches this was: const fechar = diaAtual[1]; - let's make it diaAtual[1]
        const fecharVal = diaAtual[1];
        aviso += `Nosso horário de funcionamento hoje é das ${abrir[0].toString().padStart(2, '0')}h${abrir[1].toString().padStart(2, '0')} às ${fecharVal[0].toString().padStart(2, '0')}h${fecharVal[1].toString().padStart(2, '0')}.`;
    } else {
        aviso += "Infelizmente não funcionamos hoje. Consulte nossos horários para outros dias da semana!";
    }
    
    customAlert("Estamos Fechados", aviso);
}

export function customAlert(titulo, mensagem) {
    // Check if modal already exists
    let alertModal = document.getElementById("customAlertModal");
    if (!alertModal) {
        alertModal = document.createElement("div");
        alertModal.id = "customAlertModal";
        alertModal.className = "custom-alert-overlay";
        document.body.appendChild(alertModal);
    }

    alertModal.innerHTML = `
        <div class="custom-alert-box">
            <div class="custom-alert-header">
                <h3>${titulo}</h3>
            </div>
            <div class="custom-alert-body">
                <p>${mensagem.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>")}</p>
            </div>
            <div class="custom-alert-footer">
                <button onclick="document.getElementById('customAlertModal').classList.remove('active')">Entendido</button>
            </div>
        </div>
    `;
    
    // Trigger animation
    setTimeout(() => {
        alertModal.classList.add("active");
    }, 10);
}
