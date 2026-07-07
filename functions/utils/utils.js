// Retorna o ID desejado
export function get(id){
    return document.getElementById(id);
}

// Muda o display de itens entre "none" e "block" (ou outro valor de display, controlando scroll do body)
export function toggleModal(id){
    const element = get(id);
    if (!element) return;

    if (element.style.display === "block" || element.classList.contains("active")) {
        document.body.style.overflow = "auto";
        element.style.display = "none";
        element.classList.remove("active");
    } else {
        document.body.style.overflow = "hidden";
        element.style.display = "block";
        element.classList.add("active");
    }
}

// Escapa caracteres especiais do HTML para evitar ataques XSS
export function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, (match) => {
        const escapeMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;'
        };
        return escapeMap[match];
    });
}

// Limita a frequência com que uma função pode ser disparada (performance)
export function debounce(fn, delay) {
    let timer = null;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}
