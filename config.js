// Central configuration file for Empório do Açaí

export const titulo = "Empório do Açaí";

export const whatsapp = "https://wa.me/551631723514";

export const pix = "16993383633";

export const facebook = "https://www.facebook.com/profile.php?id=100064760106360&mibextid=ZbWKwL";

export const instagram = "https://www.instagram.com/omelhordoacai?igsh=emJlOWdvaHF4cWQ2";

export const endereco = "https://maps.app.goo.gl/rpcVGbXBotXaR6qG8";

export const taxaEntrega = 5.00;

// If true, the system checks the operating hours schedule normally.
// If false, the system ignores the schedule and stays closed at all times.
export const funcionamentoAtivo = true;

// Operating hours for each day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
// [ [openHour, openMinutes], [closeHour, closeMinutes] ] or [null] if closed
export const funcionamento = [
    [[15, 0], [22, 50]], // Domingo
    [[15, 0], [22, 50]], // Segunda-feira
    [[15, 0], [22, 50]], // Terça-feira
    [[15, 0], [22, 50]], // Quarta-feira
    [[15, 0], [22, 50]], // Quinta-feira
    [[15, 0], [22, 50]], // Sexta-feira
    [[15, 0], [22, 50]]  // Sábado
];
