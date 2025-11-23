/*
let litros = [
    [2, "litros", "Litro de Sorvete", [1], 1],
    ["Ninho", "1 Litro de sorvete", 25.00, 0],
    ["Chocolate", "1 Litro de sorvete", 25.00, 0]
];
*/
let bolas = [
    [5, "bolas", "Monte seu sorvete", [1], 3],
    ["", "", 0.0, 0]
];
let tacas = [
    [3, "tacas", "Taças Deliciosas", [1], 1],
    ["Taça Cremoninho", "Açai cremoso, leite ninho e leite condensado", 25.00, 0],
    ["Taça Kit Kat", "Sorvete de ninho trufado, creme de avelã e kit kat", 25.00, 0],
    ["Taça Moda da Casa", "Açai, chantilly, paçoca, creme de avelã e morango", 28.00, 0],
    ["Taça Morango Supremo", "Morango picadinho, creme de avelã e chantilly", 25.00, 0],
    ["Taça Óreo", "Sorvete laka, creme laka oreo, chantilly, creme de avelã e bolacha oreo", 28.00, 0],
    ["Taça Ovomaltine", "Sorvete torta de chocolate, creme de ovomaltine, chantilly e kinder bueno", 28.00, 0],
    ["Taça Sonhos", "Sorvete de corneto, chantilly, sonho de valsa e creme de valsa", 25.00, 0]
];

let precoMilks1 = 14.00;
let milks1 = [
    [2, "milks1", "Milk Shakes 300Ml", [1], 1],
    ["Corneto","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Creme","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Ninho trufado","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Red Velvet","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Sensação","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Mousse de nutella","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Ameixa","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Laka","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Flocos","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Mousse de goiaba","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Mousse de maracujá","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Milho verde","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Morango silvestre zero lactose","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Torta chocolate","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Cheesecake","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Papaya com cassis","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Ferrero Rocher","Milk Shake 300 Ml",  precoMilks1, 0],
    ["Pistache", "Milk Shake 300 Ml", precoMilks1, 0],
    ["Floresta branca", "Milk Shake 300 Ml", precoMilks1, 0],
    ["Prestígio ", "Milk Shake 300 Ml", precoMilks1, 0],
    ["Ouro Branco", "Milk Shake 300 Ml", precoMilks1, 0],
    ["Limão siciliano zero lactose", "Milk Shake 300 Ml", precoMilks1, 0],
    ["Pudim", "Milk Shake 300 Ml", precoMilks1, 0],
    ["Iogurte com frutas vermelhas zero açúcar ", "Milk Shake 300 Ml", precoMilks1, 0],
    ["Ninho com nutella zero açúcar ", "Milk Shake 300 Ml", precoMilks1, 0],
    ["Cupuaçu", "Milk Shake 300 Ml", precoMilks1, 0],
];

let precoMilks2 = 16.00;
let milks2 = [
    [2, "milks2", "Milk Shakes 400Ml", [1], 1],
    ["Corneto","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Creme","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Ninho trufado","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Red Velvet","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Sensação","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Mousse de nutella","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Ameixa","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Laka","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Flocos","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Mousse de goiaba","Milk Shake 400 Ml",  precoMilks2, 0],
    [" Mousse de maracujá","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Milho verde","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Morango silvestre 0","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Torta chocolate","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Cheesecake","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Papaya com cassis","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Ferrero Rocher","Milk Shake 400 Ml",  precoMilks2, 0],
    ["Pistache", "Milk Shake 400 Ml", precoMilks2 , 0],
    ["Floresta branca", "Milk Shake 400 Ml", precoMilks2 , 0],
    ["Prestígio ", "Milk Shake 400 Ml", precoMilks2 , 0],
    ["Ouro Branco", "Milk Shake 400 Ml", precoMilks2 , 0],
    ["Limão siciliano zero lactose", "Milk Shake 400 Ml", precoMilks2 , 0],
    ["Pudim", "Milk Shake 400 Ml", precoMilks2 , 0],
    ["Iogurte com frutas vermelhas zero açúcar ", "Milk Shake 400 Ml", precoMilks2 , 0],
    ["Ninho com nutella zero açúcar ", "Milk Shake 400 Ml", precoMilks2 , 0],
    ["Cupuaçu", "Milk Shake 400 Ml", precoMilks2 , 0],
];

let precoMilks3 = 17.00;
let milks3 = [
    [2, "milks3", "Milk Shakes 500Ml", [1], 1],
    ["Corneto","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Creme","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Ninho trufado","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Red Velvet","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Sensação","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Mousse de nutella","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Ameixa","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Laka","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Flocos","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Mousse de goiaba","Milk Shake 500 Ml",  precoMilks3, 0],
    [" Mousse de maracujá","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Milho verde", precoMilks3,"Milk Shake 500 Ml",  0],
    ["Morango silvestre 0","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Torta chocolate","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Cheesecake","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Papaya com cassis","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Ferrero Rocher","Milk Shake 500 Ml",  precoMilks3, 0],
    ["Pistache", "Milk Shake 500 Ml", precoMilks3, 0],
    ["Floresta branca", "Milk Shake 500 Ml", precoMilks3, 0],
    ["Prestígio ", "Milk Shake 500 Ml", precoMilks3, 0],
    ["Ouro Branco", "Milk Shake 500 Ml", precoMilks3, 0],
    ["Limão siciliano zero lactose", "Milk Shake 500 Ml", precoMilks3, 0],
    ["Pudim", "Milk Shake 500 Ml", precoMilks3, 0],
    ["Iogurte com frutas vermelhas zero açúcar ", "Milk Shake 500 Ml", precoMilks3, 0],
    ["Ninho com nutella zero açúcar ", "Milk Shake 500 Ml", precoMilks3, 0],
    ["Cupuaçu", "Milk Shake 500 Ml", precoMilks3, 0],
];

let precoMilks4 = 20.00;
let milks4 = [
    [2, "milks4", "Milk Shakes 700Ml", [1], 1],
    ["Corneto", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Creme", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Ninho trufado", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Red Velvet", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Sensação", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Mousse de nutella", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Ameixa", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Laka", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Flocos", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Mousse de goiaba", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Mousse de maracujá", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Milho verde", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Morango silvestre 0", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Torta chocolate", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Cheesecake", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Papaya com cassis", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Ferrero Rocher", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Pistache", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Floresta branca", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Prestígio ", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Ouro Branco", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Limão siciliano zero lactose", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Pudim", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Iogurte com frutas vermelhas zero açúcar ", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Ninho com nutella zero açúcar ", "Milk Shake 700 Ml", precoMilks4, 0],
    ["Cupuaçu", "Milk Shake 700 Ml", precoMilks4, 0],
];

export let sorvetes = ["sorvetes", "Ver Sorvetes", bolas, tacas, milks1, milks2, milks3, milks4]