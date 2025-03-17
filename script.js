//Listagem dos adicionais, bordas, etc...______________________________________________________________________________
let recheiosDoces = [
    ["checkbox", 0],
    ["Aveia", 2.50],
    ["Cobertura de caramelo", 2.50],
    ["Cobertura de chocolate", 2.50],
    ["Cobertura de morango", 2.50],
    ["Mel", 2.50],
    ["Granulado", 2.50],
    ["Doce de leite", 2.50],
    ["Paçoca", 2.75],
    ["Banana", 3.00],
    ["Bis branco", 3.00],
    ["Bis preto", 3.00],
    ["Chantilly", 3.00],
    ["Coco ralado", 3.00],
    ["Granola", 3.00],
    ["Farinha lactea", 3.00],
    ["Sonho de valsa", 3.00],
    ["Sucrilhos", 3.00],
    ["Pó de guaraná", 3.00],
    ["Ouro branco", 3.00],
    ["Goiabada", 3.00],
    ["Abacaxi", 3.50],
    ["Chocolate branco", 3.50],
    ["Chocolate", 3.50],
    ["Confete", 3.50],
    ["Leite condensado", 3.50],
    ["Space boll", 3.50],
    ["Polpa de fruta abacaxi", 3.75],
    ["Polpa de fruta abacaxi ao vinho", 3.75],
    ["Polpa de fruta ameixa", 3.75],
    ["Polpa de fruta amora", 3.75],
    ["Polpa de frutas vermelhas", 3.75],
    ["Polpa de fruta maracujá", 3.75],
    ["Polpa de fruta morango", 3.75],
    ["Creme de paçoca", 3.99],
    ["Ovomaltine", 3.50],
    ["Leite Ninho", 4.00],
    ["Morango", 4.00],
    ["Manga", 4.50],
    ["Nutella", 4.50],
    ["Castanha", 4.50],
    ["Creme de ouro branco", 4.50],
    ["Cupuaçu", 4.50],
    ["Creme de valsa", 4.50],
    ["Kit kat", 4.99],
    ["Pasta de amendoim, sabor leite ninho", 4.99],
    ["Whey protein", 4.99],
    ["Kiwi", 5.00],
    ["Creme laka", 5.00],
    ["Creme de leite ninho", 5.00],
    ["Creme de lacta com óreo", 5.00],
    ["Chocolate suflair (NÃO INCLUSO)", 3.99],
    ["Creme de morango (NÃO INCLUSO)", 5.00],
    ["Creme de ovomaltine (NÃO INCLUSO)", 5.50],
    ["Creme de kit kat (NÃO INCLUSO)", 5.50],
    ["Cereja (NÃO INCLUSO)", 6.00],
    ["Creme de pistache (NÃO INCLUSO)", 6.50],
    ["Nutella x2 (NÃO INCLUSO)", 7.00],
    ["Ferrero rocher (NÃO INCLUSO)", 9.50],
    ["Kinder bueno (NÃO INCLUSO)", 9.50]
];
let recheiosSalgados = [
    ["checkbox", 1],
    ["Bacon", 4.99],
    ["Catupiry", 4.99],
    ["Cheddar", 4.99],
    ["Creme de alho", 3.00],
    ["Hambúrguer", 4.00],
    ["Mussarela", 4.00],
    ["Ovo", 2.00],
    ["Presunto", 4.00],
    ["Salada", 4.00],
];
let bordasPizza = [
    ["radio", 2],
    ["Borda: Doce de leite", 16.00],
    ["Borda: Goiabada", 16.00],
    ["Borda: Queijo com bacon", 21.00],
    ["Borda: Catupiry com bacon", 19.00],
    ["Borda: Chocolate com queijo", 20.00],
    ["Borda: Cheddar com bacon", 21.00],
    ["Borda: Musarela", 21.00],
    ["Borda: Catupiry", 16.00],
    ["Borda: Cheddar", 16.00],
    ["Borda: Nutella", 16.00]
];
let vazio = [
    "vazio"
];

let ADICIONAIS = [
    recheiosDoces,
    recheiosSalgados,
    bordasPizza
]

//Lista de dois sasores de pizza_______________________________________________________________________________________

let doisSaboresPizza = [
    ["Cupim acebolado", "Cupim desfiado, molho de tomate especial, mussarela, cebola, azeitona e orégano", 65.00],
    ["Cupim cremoso", "Cupim desfiado, molho especial, mussarela, catupiry, orégano", 70.00],
    ["Cupim ao alho", "Cupim desfiado, molho de tomate especial, cebola, alho frito, mussarela , azeite , azeitona", 68.00],
    ["Cupim especial", "Cupim desfiado, molho de tomate especial, cebola , catupiry, mussarela , tomate , bacon , azeitona e orégano", 73.00],
    ["Pizza Alho e óleo", "Mussarela, bacon, alho, tomate, cebola, orégano e azeitona ", 70.00],
    ["Pizza Baiana", "Mussarela, calabresa picada, parmesão, pimenta, ovos, pimentão, tomate, cebola, orégano e azeitona", 75.00],
    ["Pizza Brócolis", "Brócolis, bacon fatiado, mussarela e catupiry", 75.00],
    ["Pizza Calabresa", "Calabresa, mussarela, cebola, tomate, orégano, molho de tomate", 65.00],
    ["Pizza Carijó", "Mussarela, molho, frango, ovo, catupiry, milho, orégano e azeitona", 70.00],
    ["Pizza Fazendinha", "Presunto, mussarela, ovo, tomate, milho e cebola", 70.00],
    ["Pizza Frango com catupiry (Grande)", "Mussarela, frango, catupiry, orégano, tomate, azeitona e molho de tomate", 65.00],
    ["Pizza Frango cremoso", "Frango, catupiry, batata palha, azeitona fatiada, mussarela e orégano", 72.00],
    ["Pizza Franlone", "Frango, queijo provolone, tomate, mussarela, orégano, azeitona, milho e molho de tomate", 70.00],
    ["Pizza Hot Dog", "Salsicha ao molho, batata palha, catchup, maioneses, mussarela e milho", 65.00],
    ["Pizza Lombinho especial", "Lombo canadense, presunto, mussarela, tomate e orégano", 75.00],
    ["Pizza Lombo canadense", "Lombo canadense, presunto, mussarela, tomate, orégano, molho de tomate, palmito e catupiry", 70.00],
    ["Pizza Marajá", "Mussarela, lombo, canadense, catupiry, palmito, bacon, orégano, calabresa, champignon, azeitona e tomate", 78.00],
    ["Pizza Maromba", "Frango, catupiry, ovos, mussarela, orégano, bacon, tomate e molho especial", 75.00],
    ["Pizza Moda da casa", "Presunto, mussarela, calabresa, bacon, catupiry, tomate, cebola, orégano, e molho de tomate", 78.00],
    ["Pizza Mussarela", "Mussarela, molho gourmet de tomate, azeitona, tomate e orégano", 75.00],
    ["Pizza Napolitana", "Tomate, azeite, orégano, alho e mussarela", 65.00],
    ["Pizza Parmegiana", "Presunto, queijo, provolono, mussarela, molho de tomate, baconorégano, azeitona e tomate", 75.00],
    ["Pizza Portuguesa", "Presunto, mussarela, bacon, ovo, azeitona, tomate, palmito, cebola e molho de tomate", 65.00],
    ["Pizza Presunto Mussarela", "Presunto, mussarela, orégano, tomate e molho de tomate", 65.00],
    ["Pizza Quatro queijos", "Mussarela, queijo provolone, queijo parmesão, catupiry, tomate, orégano, azeitona e tomate", 78.00],
    ["Pizza Siciliana", "Mussarela, calabresa, parmesão, bacon, pimentão, cebola, tomate, orégano e azeitona", 75.00],
    ["Pizza Soft", "Mussarela, calabresa picada, champignon, cebola, bacon, tomate, catupiry, orégano e azeitona", 75.00],
    ["Pizza Vegetariana", "Milho, palmito, brócolis, champignon, mussarela e couve", 75.00],
    ["Açai com leite ninho", "Açai com leite ninho", 70.00],
    ["Açai com morango e nutella", "Açai com morango e nutella", 70.00],
    ["Banana, canela, queijo, calda de caramelo", "Banana, canela, queijo, calda de caramelo", 70.00],
    ["Creme ninho com morango", "Creme ninho com morango", 70.00],
    ["Diamante negro", "Diamante negro", 70.00],
    ["Doce de leite com queijo", "Doce de leite com queijo", 70.00],
    ["Goiabada com queijo", "Goiabada com queijo", 70.00],
    ["Laka", "Laka", 70.00],
    ["Laka óreo", "Laka óreo", 70.00],
    ["Nutella, morango, coco ralado, leite condensado e bis preto", "Nutella, morango, coco ralado, leite condensado e bis preto", 70.00],
    ["Nutella", "Nutella", 70.00],
    ["Nutella com kit kat", "Nutella com kit kat", 70.00],
    ["Nutella com morango", "Nutella com morango", 70.00],
    ["Nutella e confete", "Nutella e confete", 70.00],
    ["Nutella morango e confete", "Nutella morango e confete", 70.00],
    ["Ouro branco", "Ouro branco", 70.00],
    ["Prestígio", "Prestígio", 70.00],
    ["Sonho de valsa", "Sonho de valsa", 70.00]
];

//Listagem dos produtos________________________________________________________________________________________________

//AÇAI
let combos = [
    ["carrossel", "combos", "recheiosDoces"],
    ["1 Litro de açai", "Escolha até 4 adicionais", 36.90, 4],
    ["Copo 300ml de açai", "Escolha até 3 adicionais", 23.00, 3],
    ["Copo 400ml de açai", "Escolha até 3 adicionais", 25.00, 3],
    ["Copo 500ml de açai", "Escolha até 3 adicionais", 28.00, 3],
    ["Copo 700ml de açai", "Escolha até 3 adicionais", 30.00, 3]
];
let copos = [
    ["lista", "copos", "recheiosDoces"],
    ["Copo 300 ML", "Copo com 300 ml de açai", 12.00, 0],
    ["Copo 400 ML", "Copo com 400 ml de açai", 14.00, 0],
    ["Copo 500 ML", "Copo com 500 ml de açai", 18.00, 0],
    ["Copo 700 ML", "Copo com 700 ml de açai", 20.00, 0]
];
let barcas = [
    ["lista", "barcas", "recheiosDoces"],
    ["Barca 1 Litro", "Inclui até 8 adicionais", 55.00, 8],
    ["Barca 1.5 Litros", "Inclui até 8 adicionais", 65.00, 8]
];
let tigelas = [
    ["lista", "tigelas", "recheiosDoces"],
    ["Tigela 1 Litro", "Tigela com 1 litro de açai", 25.00, 0],
    ["Tigela 600 ML", "Tigela com 600 ml de açai", 19.00, 0]
];

//SORVETE
let litros = [
    ["lista", "litros", "recheiosDoces"],
    ["1 Litro de sorvete", "Ninho", 25.00, 0],
    ["1 Litro de sorvete", "Chocolate", 25.00, 0]
];
let bolas = [
    ["lista", "bolas", "recheiosDoces"],
    ["Sorvete Bola", "Corneto", 4.50, 0],
    ["Sorvete Bola", "Nozes com doce de leite", 4.50, 0],
    ["Sorvete Bola", "Abóbora com coco", 4.50, 0],
    ["Sorvete Bola", "Creme", 4.50, 0],
    ["Sorvete Bola", "Ninho trufado", 4.50, 0],
    ["Sorvete Bola", "Red Velvet", 4.50, 0],
    ["Sorvete Bola", "Sensação", 4.50, 0],
    ["Sorvete Bola", "Mousse de nutella", 4.50, 0],
    ["Sorvete Bola", "Delírio", 4.50, 0],
    ["Sorvete Bola", "Ameixa", 4.50, 0],
    ["Sorvete Bola", "Laka", 4.50, 0],
    ["Sorvete Bola", "Flocos", 4.50, 0],
    ["Sorvete Bola", "Mousse de goiaba", 4.50, 0],
    ["Sorvete Bola", "Mousse de maracujá", 4.50, 0],
    ["Sorvete Bola", "Milho verde", 4.50, 0],
    ["Sorvete Bola", "Banana com nutella", 4.50, 0],
    ["Sorvete Bola", "Morango silvestre 0", 4.50, 0],
    ["Sorvete Bola", "Coca Malasia", 4.50, 0],
    ["Sorvete Bola", "Torta chocolate", 4.50, 0],
    ["Sorvete Bola", "Cheesecake", 4.50, 0],
    ["Sorvete Bola", "Papaya com cassis", 4.50, 0]
];
let tacas = [
    ["carrossel", "tacas", "recheiosDoces"],
    ["Taça Cremoninho", "Açai cremoso, leite ninho e leite condensado", 20.00, 0],
    ["Taça Kit Kat", "Sorvete de ninho trufado, nutella e kit kat", 20.00, 0],
    ["Taça Moda da Casa", "Açai, chantilly, paçoca, nutella e morango", 21.00, 0],
    ["Taça Morango Supremo", "Morango picadinho, chocolate e chantilly", 18.00, 0],
    ["Taça Óreo", "Sorvete laka, creme laka oreo, chantilly, nutella e bolacha oreo", 21.00, 0],
    ["Taça Ovomaltine", "Sorvete torta de chocolate, creme de ovomaltine, chantilly e kinder bueno", 21.00, 0],
    ["Taça Sonhos", "Sorvete de corneto, chantilly, sonho de valsa e creme de valsa", 20.00, 0]
];

let precoMilks1 = 14.00;
let milks1 = [
    ["lista", "milks1", "recheiosDoces"],
    ["Milk Shake 300 Ml", "Corneto", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Nozes com doce de leite", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Abóbora com coco", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Creme", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Ninho trufado", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Red Velvet", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Sensação", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Mousse de nutella", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Delírio", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Ameixa", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Laka", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Flocos", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Mousse de goiaba", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Mousse de maracujá", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Milho verde", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Banana com nutella", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Morango silvestre 0", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Coca Malasia", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Torta chocolate", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Cheesecake", precoMilks1, 0],
    ["Milk Shake 300 Ml", "Papaya com cassis", precoMilks1, 0],
];

let precoMilks2 = 16.00;
let milks2 = [
    ["lista", "milks2", "recheiosDoces"],
    ["Milk Shake 400 Ml", "Corneto", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Nozes com doce de leite", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Abóbora com coco", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Creme", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Ninho trufado", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Red Velvet", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Sensação", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Mousse de nutella", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Delírio", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Ameixa", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Laka", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Flocos", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Mousse de goiaba", precoMilks2, 0],
    ["Milk Shake 400 Ml", " Mousse de maracujá", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Milho verde", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Banana com nutella", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Morango silvestre 0", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Coca Malasia", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Torta chocolate", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Cheesecake", precoMilks2, 0],
    ["Milk Shake 400 Ml", "Papaya com cassis", precoMilks2, 0]
];

let precoMilks3 = 17.00;
let milks3 = [
    ["lista", "milks3", "recheiosDoces"],
    ["Milk Shake 500 Ml", "Corneto", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Nozes com doce de leite", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Abóbora com coco", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Creme", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Ninho trufado", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Red Velvet", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Sensação", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Mousse de nutella", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Delírio", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Ameixa", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Laka", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Flocos", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Mousse de goiaba", precoMilks3, 0],
    ["Milk Shake 500 Ml", " Mousse de maracujá", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Milho verde", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Banana com nutella", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Morango silvestre 0", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Coca Malasia", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Torta chocolate", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Cheesecake", precoMilks3, 0],
    ["Milk Shake 500 Ml", "Papaya com cassis", precoMilks3, 0]
];

let precoMilks4 = 20.00;
let milks4 = [
    ["lista", "milks4", "recheiosDoces"],
    ["Milk Shake 700 Ml", "Corneto", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Nozes com doce de leite", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Abóbora com coco", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Creme", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Ninho trufado", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Red Velvet", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Sensação", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Mousse de nutella", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Delírio", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Ameixa", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Laka", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Flocos", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Mousse de goiaba", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Mousse de maracujá", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Milho verde", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Banana com nutella", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Morango silvestre 0", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Coca Malasia", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Torta chocolate", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Cheesecake", precoMilks4, 0],
    ["Milk Shake 700 Ml", "Papaya com cassis", precoMilks4, 0]
];

//BEBIDA
let refri2Litros = [
    ["lista", "refri2Litros", "vazio"],
    ["Refri 2 Litros", "Coca-Cola", 14.00, 0],
    ["Refri 2 Litros", "Coca-Cola 0", 14.00, 0],
    ["Refri 2 Litros", "Fanta Laranja", 13.00, 0],
    ["Refri 2 Litros", "Fanta Uva", 13.00, 0],
    ["Refri 2 Litros", "Sprite", 13.00, 0],
    ["Refri 2 Litros", "Guaraná Jaboti", 12.00]
];
let refri1Litro = [
    ["lista", "refri1Litro", "vazio"],
    ["Refri 1 Litro", "Coca-Cola", 9.00, 0],
    ["Refri 1 Litro", "Guaraná Antártica", 9.00, 0]
]
let refriLata = [
    ["lista", "refriLata", "vazio"],
    ["Refri Lata", "Coca-Cola", 6.00, 0],
    ["Refri Lata", "Fanta Laranja", 6.00, 0],
    ["Refri Lata", "Fanta Uva", 6.00, 0],
    ["Refri Lata", "Sprite", 6.00, 0],
    ["Refri Lata", "Guaraná Antártica", 6.00, 0]
]
let limoneto = [
    ["grande", "limoneto", "vazio"],
    ["Limoneto", "Refresque seu dia", 6.00, 0]
]
let sucos = [
    ["lista", "sucos", "vazio"],
    ["Suco", "Acerola", 9.00, 0],
    ["Suco", "Abacaxi", 9.00, 0],
    ["Suco", "Abacaxi com Hortelã", 9.00, 0],
    ["Suco", "Caju", 9.00, 0],
    ["Suco", "Cupuaçu", 9.00, 0],
    ["Suco", "Laranja", 9.00, 0],
    ["Suco", "Limão", 9.00, 0],
    ["Suco", "Pêssego", 9.00, 0],
    ["Suco", "Uva", 9.00, 0],
    ["Suco", "Tamarino", 9.00, 0],
];
let cervejas = [
    ["grande", "cervejas", "vazio"],
    ["Cerveja Heineken", "Cerveja Heineken 330 ml", 10.00, 0]
];
let vitaminas = [
    ["lista", "vitaminas", "vazio"],
    ["Vitamina", "Morango", 8.00, 0],
    ["Vitamina", "Maracujá", 8.00, 0],
    ["Vitamina", "Mista", 8.00, 0],
];

//LANCHE
let hamburguer = [
    ["lista", "hamburguer", "recheiosSalgados"],
    ["X-Bacon", "Pão, queijo, hambúrguer e bacon", 20.00, 0],
    ["X-Burguer", "Pão, 2 hambúrgueres e queijo", 18.00, 0],
    ["X-Egg", "Pão, queijo, hambúrguer e ovo", 15.00, 0],
    ["X-Salada", "Pão, queijo, hambúrguer, alface e tomate", 19.00, 0],
    ["X-Salada Egg", "Pão, queijo, hambúrguer, presunto, ovo, alface e tomate", 21.00, 0],
    ["X-Tudão", "Pão, presunto, queijo, catupiry, salsicha, 3 hambúrgueres, ovo, bacon, milho, batata palha, alface e tomate", 33.90, 0],
    ["X-Tudo", "Pão, presunto, queijo, 2 hambúrgueres, ovo, bacon, alface, catupiry e tomate", 28.00, 0]
];
let frango = [
    ["lista", "frango", "recheiosSalgados"],
    ["X-Frango", "Pão, queijo e frango", 22.00, 0],
    ["X-Frango Bacon", "Pão, queijo, frango e bacon", 28.00, 0],
    ["X-Frango cremoso", "Pão, queijo, frango, catupiry e bacon", 30.00, 0],
    ["X-Frango Egg", "Pão, queijo, frango e ovo", 24.00, 0],
    ["X-Frango Salada Egg", "Pão, queijo, frango, presunto, ovo, alface e tomate", 27.00, 0],
    ["X-Frango Salada", "Pão, queijo, frango, presunto, alface e tomate", 25.00, 0],
    ["X-Frango Tudo", "Pão, queijo, frango, alface, tomate, bacon, salsicha, ovo e presunto", 32.00, 0]
];
let combo = [
    ["grande", "combo", "recheiosSalgados"],
    ["Combo", "Lanche (2 hamburgueres, queijo, cheddar cremoso, alface e tomate) + Batata + Coca-Cola lata", 29.90, 0]
];
let file = [
    ["lista", "file", "recheiosSalgados"],
    ["X-Filé", "Pão, queijo e carne", 25.00, 0],
    ["X-Filé Bacon", "Pão, queijo, carne e bacon", 33.00, 0],
    ["X-Filé Egg", "Pão, queijo, carne e ovo", 27.00, 0],
    ["X-Filé Salada", "Pão, queijo, carne, presunto, alface e tomate", 29.00, 0],
    ["X-Filé Salada Egg", "Pão, queijo, carne, presunto, ovo, alface e tomate", 31.00, 0],
    ["X-Filé Tudo", "Pão, queijo, carne, presunto, bacon, ovo, salsicha, alface e tomate", 36.00, 0]
];
let lombo = [
    ["lista", "lombo", "recheiosSalgados"],
    ["X-Lombo", "Pão, queijo e Lombo", 22.00, 0],
    ["X-Lombo Bacon", "Pão, queijo, lombo e bacon", 29.00, 0],
    ["X-Lombo Egg", "Pão, queijo, lombo e ovo", 25.00, 0],
    ["X-Lombo Salada", "Pão, queijo, lombo, presunto, alface e tomate", 26.00, 0],
    ["X-Lombo Salada Egg", "Pão, queijo, lombo, presunto, ovo, alface e tomate", 28.00, 0],
    ["X-Lombo Tudo", "Pão, queijo, lombo, ovo, bacon, presunto, salsicha, alface e tomate", 33.00, 0]
];
let cupim = [
    ["lista", "cupim", "recheiosSalgados"],
    ["X-Cupim", "pão , cupim desfiado, queijo duplo", 25.00, 0],
    ["X-Cupim cremoso", "pão , cupim desfiado, queijo duplo, catupiry", 30.00, 0],
    ["X-Cupim tudo", "pão , ovo , cupim desfiado, bacon, salsicha, alface , tomate , queijo duplo , catupiry e presunto", 36.00, 0],
];
let costela = [
    ["lista", "costela", "recheiosSalgados"],
    ["X-Costela", "Pão, costela desfiada, queijo duplo", 28.00, 0],
    ["X-Costela Cremoso", "Pão, costela desfiada, queijo duplo, catupiry", 33.00, 0],
    ["X-Costela Tudo", "Pão , ovo , costela desfiada ,bacon, salsicha, alface , tomate , queijo duplo , catupiry e presunto", 39.00, 0]
];

//PIZZA
let salgadaGrande = [
    ["lista", "pizzas", "bordasPizza"],
    ["Carne seca acebolada (Grande)", "Carne seca desfiada , molho de tomate especial, mussarela, cebola, azeitona e orégano", 68.00, 0],
    ["Carne seca cremosa (Grande)", "Carne seca desfiada ,molho especial, mussarela, catupiry, orégano", 73.00, 0],
    ["Carne seca ao alho (Grande)", "Carne seca desfiada, molho de tomate especial, alho frito, mussarela , azeite , azeitona e cebola", 71.00, 0],
    ["Carne seca especial (Grande)", "Carne seca desfiada, molho de tomate especial, cebola , catupiry, mussarela , tomate , bacon , azeitona e orégano", 76.00, 0],
    ["Costela acebolada (Grande)", "Costela desfiado, molho de tomate especial, mussarela, cebola, azeitona e orégano", 68.00, 0],
    ["Costela cremosa (Grande)", "Costela desfiada ,molho especial, mussarela, catupiry, orégano", 73.00, 0],
    ["Costela ao alho (Grande)", "Costela desfiada, molho de tomate especial, alho frito, mussarela , azeite , azeitona e cebola", 71.00, 0] ,
    ["Costela especial (Grande)", "Costela desfiada, molho de tomate especial, cebola , catupiry, mussarela , tomate , bacon , azeitona e orégano", 76.00, 0],
    ["Cupim acebolado (Grande)", "Cupim desfiado, molho de tomate especial, mussarela, cebola, azeitona e orégano", 65.00, 0],
    ["Cupim cremoso (Grande)", "Cupim desfiado, molho especial, mussarela, catupiry, orégano", 70, 0],
    ["Cupim ao alho (Grande)", "Cupim desfiado, molho de tomate especial, cebola, alho frito, mussarela , azeite , azeitona", 68, 0],
    ["Cupim especial (Grande)", "Cupim desfiado, molho de tomate especial, cebola , catupiry, mussarela , tomate , bacon , azeitona e orégano", 73, 0],
    ["Pizza Alho e óleo (Grande)", "Mussarela, bacon, alho, tomate, cebola, orégano e azeitona ", 70.00, 0],
    ["Pizza Baiana (Grande)", "Mussarela, calabresa picada, parmesão, pimenta, ovos, pimentão, tomate, cebola, orégano e azeitona", 75.00, 0],
    ["Pizza Brócolis (Grande)", "Brócolis, bacon fatiado, mussarela e catupiry", 75.00, 0],
    ["Pizza Calabresa (Grande)", "Calabresa, mussarela, cebola, tomate, orégano, molho de tomate", 65.00, 0],
    ["Pizza Carijó (Grande)", "Mussarela, molho, frango, ovo, catupiry, milho, orégano e azeitona", 70.00, 0],
    ["Pizza Fazendinha (Grande)", "Presunto, mussarela, ovo, tomate, milho e cebola", 70.00, 0],
    ["Pizza Frango com catupiry (Grande)", "Mussarela, frango, catupiry, orégano, tomate, azeitona e molho de tomate", 65.00, 0],
    ["Pizza Frango cremoso (Grande)", "Frango, catupiry, batata palha, azeitona fatiada, mussarela e orégano", 72.00, 0],
    ["Pizza Franlone (Grande)", "Frango, queijo provolone, tomate, mussarela, orégano, azeitona, milho e molho de tomate", 70.00, 0],
    ["Pizza Hot Dog (Grande)", "Salsicha ao molho, batata palha, catchup, maioneses, mussarela e milho", 65.00, 0],
    ["Pizza Lombinho especial (Grande)", "Lombo canadense, presunto, mussarela, tomate e orégano", 75.00, 0],
    ["Pizza Lombo canadense (Grande)", "Lombo canadense, presunto, mussarela, tomate, orégano, molho de tomate, palmito e catupiry", 70.00, 0],
    ["Pizza Marajá (Grande)", "Mussarela, lombo, canadense, catupiry, palmito, bacon, orégano, calabresa, champignon, azeitona e tomate", 78.00, 0],
    ["Pizza Maromba (Grande)", "Frango, catupiry, ovos, mussarela, orégano, bacon, tomate e molho especial", 75.00, 0],
    ["Pizza Moda da casa (Grande)", "Presunto, mussarela, calabresa, bacon, catupiry, tomate, cebola, orégano, e molho de tomate", 78.00, 0],
    ["Pizza Mussarela (Grande)", "Mussarela, molho gourmet de tomate, azeitona, tomate e orégano", 75.00, 0],
    ["Pizza Napolitana (Grande)", "Tomate, azeite, orégano, alho e mussarela", 65.00, 0],
    ["Pizza Parmegiana (Grande)", "Presunto, queijo, provolono, mussarela, molho de tomate, baconorégano, azeitona e tomate", 75.00, 0],
    ["Pizza Portuguesa (Grande)", "Presunto, mussarela, bacon, ovo, azeitona, tomate, palmito, cebola e molho de tomate", 65.00, 0],
    ["Pizza Presunto Mussarela (Grande)", "Presunto, mussarela, orégano, tomate e molho de tomate", 65.00, 0],
    ["Pizza Quatro queijos (Grande)", "Mussarela, queijo provolone, queijo parmesão, catupiry, tomate, orégano, azeitona e tomate", 78.00, 0],
    ["Pizza Siciliana (Grande)", "Mussarela, calabresa, parmesão, bacon, pimentão, cebola, tomate, orégano e azeitona", 75.00, 0],
    ["Pizza Soft (Grande)", "Mussarela, calabresa picada, champignon, cebola, bacon, tomate, catupiry, orégano e azeitona", 75.00, 0],
    ["Pizza Vegetariana (Grande)", "Milho, palmito, brócolis, champignon, mussarela e couve", 75.00, 0]
];
let salgadaPequena = [
    ["lista", "pizzas", "bordasPizza"],
    ["Carne seca acebolada (Média)", "Carne seca desfiada , molho de tomate especial, mussarela, cebola, azeitona e orégano", 48.00, 0],
    ["Carne seca cremosa (Média)", "Carne seca desfiada ,molho especial, mussarela, catupiry, orégano", 48.00, 0],
    ["Carne seca ao alho (Média)", "Carne seca desfiada, molho de tomate especial, alho frito, mussarela , azeite , azeitona e cebola", 48.00, 0],
    ["Carne seca especial (Média)", "Carne seca desfiada, molho de tomate especial, cebola , catupiry, mussarela , tomate , bacon , azeitona e orégano", 48.00, 0],
    ["Costela acebolada (Média)", "Costela desfiado, molho de tomate especial, mussarela, cebola, azeitona e orégano", 48.00, 0],
    ["Costela cremosa (Média)", "Costela desfiada ,molho especial, mussarela, catupiry, orégano", 48.00, 0],
    ["Costela ao alho (Média)", "Costela desfiada, molho de tomate especial, alho frito, mussarela , azeite , azeitona e cebola", 48.00, 0] ,
    ["Costela especial (Média)", "Costela desfiada, molho de tomate especial, cebola , catupiry, mussarela , tomate , bacon , azeitona e orégano", 48.00, 0],
    ["Cupim acebolado (Média)", "Cupim desfiado, molho de tomate especial, mussarela, cebola, azeitona e orégano", 48.00, 0],
    ["Cupim cremoso (Média)", "Cupim desfiado, molho especial, mussarela, catupiry, orégano", 48, 0],
    ["Cupim ao alho (Média)", "Cupim desfiado, molho de tomate especial, cebola, alho frito, mussarela , azeite , azeitona", 48, 0],
    ["Cupim especial (Média)", "Cupim desfiado, molho de tomate especial, cebola , catupiry, mussarela , tomate , bacon , azeitona e orégano", 48, 0],
    ["Pizza Alho e óleo (Média)", "Mussarela, bacon, alho, tomate, cebola, orégano e azeitona ", 45.00, 0],
    ["Pizza Baiana (Média)", "Mussarela, calabresa picada, parmesão, pimenta, ovos, pimentão, tomate, cebola, orégano e azeitona", 48.00, 0],
    ["Pizza Brócolis (Média)", "Brócolis, bacon fatiado, mussarela e catupiry", 48.00, 0],
    ["Pizza Calabresa (Média)", "Calabresa, mussarela, cebola, tomate, orégano, molho de tomate", 45.00, 0],
    ["Pizza Carijó (Média)", "Mussarela, molho, frango, ovo, catupiry, milho, orégano e azeitona", 45.00, 0],
    ["Pizza Fazendinha (Média)", "Presunto, mussarela, ovo, tomate, milho e cebola", 45.00, 0],
    ["Pizza Frango com catupiry (Média)", "Mussarela, frango, catupiry, orégano, tomate, azeitona e molho de tomate", 45.00, 0],
    ["Pizza Frango cremoso (Média)", "Frango, catupiry, batata palha, azeitona fatiada, mussarela e orégano", 45.00, 0],
    ["Pizza Franlone (Média)", "Frango, queijo provolone, tomate, mussarela, orégano, azeitona, milho e molho de tomate", 45.00, 0],
    ["Pizza Hot Dog (Média)", "Salsicha ao molho, batata palha, catchup, maioneses, mussarela e milho", 45.00, 0],
    ["Pizza Lombinho especial (Média)", "Lombo canadense, presunto, mussarela, tomate e orégano", 48.00, 0],
    ["Pizza Lombo canadense (Média)", "Lombo canadense, presunto, mussarela, tomate, orégano, molho de tomate, palmito e catupiry", 45.00, 0],
    ["Pizza Marajá (Média)", "Mussarela, lombo, canadense, catupiry, palmito, bacon, orégano, calabresa, champignon, azeitona e tomate", 48.00, 0],
    ["Pizza Maromba (Média)", "Frango, catupiry, ovos, mussarela, orégano, bacon, tomate e molho especial", 48.00, 0],
    ["Pizza Moda da casa (Média)", "Presunto, mussarela, calabresa, bacon, catupiry, tomate, cebola, orégano, e molho de tomate", 48.00, 0],
    ["Pizza Mussarela (Média)", "Mussarela, molho gourmet de tomate, azeitona, tomate e orégano", 48.00, 0],
    ["Pizza Napolitana (Média)", "Tomate, azeite, orégano, alho e mussarela", 45.00, 0],
    ["Pizza Parmegiana (Média)", "Presunto, queijo, provolono, mussarela, molho de tomate, baconorégano, azeitona e tomate", 48.00, 0],
    ["Pizza Portuguesa (Média)", "Presunto, mussarela, bacon, ovo, azeitona, tomate, palmito, cebola e molho de tomate", 45.00, 0],
    ["Pizza Presunto Mussarela (Média)", "Presunto, mussarela, orégano, tomate e molho de tomate", 45.00, 0],
    ["Pizza Quatro queijos (Média)", "Mussarela, queijo provolone, queijo parmesão, catupiry, tomate, orégano, azeitona e tomate", 48.00, 0],
    ["Pizza Siciliana (Média)", "Mussarela, calabresa, parmesão, bacon, pimentão, cebola, tomate, orégano e azeitona", 48.00, 0],
    ["Pizza Soft (Média)", "Mussarela, calabresa picada, champignon, cebola, bacon, tomate, catupiry, orégano e azeitona", 48.00, 0],
    ["Pizza Vegetariana (Média)", "Milho, palmito, brócolis, champignon, mussarela e couve", 48.00, 0]
]
let doceGrande = [
    ["lista", "doces", "bordasPizza"],
    ["Pizza Doce(Grande)", "Açai com leite ninho", 70.00, 0],
    ["Pizza Doce(Grande)", "Açai com morango e nutella", 70.00, 0],
    ["Pizza Doce(Grande)", "Banana, canela, queijo, calda de caramelo", 70.00, 0],
    ["Pizza Doce(Grande)", "Creme ninho com morango", 70.00, 0],
    ["Pizza Doce(Grande)", "Diamante negro", 70.00, 0],
    ["Pizza Doce(Grande)", "Doce de leite com queijo", 70.00, 0],
    ["Pizza Doce(Grande)", "Goiabada com queijo", 70.00, 0],
    ["Pizza Doce(Grande)", "Laka", 70.00, 0],
    ["Pizza Doce(Grande)", "Laka óreo", 70.00, 0],
    ["Pizza Doce(Grande)", "Nutella, morango, coco ralado, leite condensado e bis preto", 70.00, 0],
    ["Pizza Doce(Grande)", "Nutella", 70.00, 0],
    ["Pizza Doce(Grande)", "Nutella com kit kat", 70.00, 0],
    ["Pizza Doce(Grande)", "Nutella com morango", 70.00, 0],
    ["Pizza Doce(Grande)", "Nutella e confete", 70.00, 0],
    ["Pizza Doce(Grande)", "Nutella morango e confete", 70.00, 0],
    ["Pizza Doce(Grande)", "Ouro branco", 70.00, 0],
    ["Pizza Doce(Grande)", "Prestígio", 70.00, 0],
    ["Pizza Doce(Grande)", "Sonho de valsa", 70.00, 0]
];
let docePequena = [
    ["lista", "doces", "bordasPizza"],
    ["Açai com leite ninho", "Açai com leite ninho", 48.00, 0],
    ["Açai com morango e nutella", "Açai com morango e nutella", 48.00, 0],
    ["Banana, canela, queijo, calda de caramelo", "Banana, canela, queijo, calda de caramelo", 48.00, 0],
    ["Creme ninho com morango", "Creme ninho com morango", 48.00, 0],
    ["Diamante negro", "Diamante negro", 48.00, 0],
    ["Doce de leite com queijo", "Doce de leite com queijo", 48.00, 0],
    ["Goiabada com queijo", "Goiabada com queijo", 48.00, 0],
    ["Laka", "Laka", 48.00, 0],
    ["Laka óreo", "Laka óreo", 48.00, 0],
    ["Nutella, morango, coco ralado, leite condensado e bis preto", "Nutella, morango, coco ralado, leite condensado e bis preto", 48.00, 0],
    ["Nutella", "Nutella", 48.00, 0],
    ["Nutella com kit kat", "Nutella com kit kat", 48.00, 0],
    ["Nutella com morango", "Nutella com morango", 48.00, 0],
    ["Nutella e confete", "Nutella e confete", 48.00, 0],
    ["Nutella morango e confete", "Nutella morango e confete", 48.00, 0],
    ["Ouro branco", "Ouro branco", 48.00, 0],
    ["Prestígio", "Prestígio", 48.00, 0],
    ["Sonho de valsa", "Sonho de valsa", 48.00, 0]
];
let doisSabores = [
    ["metade", "doisSabores", "bordasPizza"],
    ["Dois Sabores", "", 0.00, 0]
];

//ESPECIAL
let porcoesBatata = [
    ["carrossel", "porcoesBatata", "vazio"],
    ["Batata Frita Básica (Média)", "Porção grande de batata frita", 28.00, 0],
    ["Batata Frita Especial (Média)", "Porção grande de batata frita especial", 40.00, 0],
    ["Batata Frita Básica (Grande)", "Porção grande de batata frita", 35.00, 0],
    ["Batata Frita Especial (Grande)", "Porção grande de batata frita especial", 50.00, 0],
];
let porcoesCarne = [
    ["carrossel", "porcoesCarne", "vazio"],
    ["Porção de Filé", "Filé, bacon, cebola, alface e tomate", 60.00, 0],
    ["Porção de Frango", "Frango, bacon, cebola, alface e tomate", 48.00, 0],
    ["Porção de Lombo", "Lombo, bacon, cebola, alface e tomate", 50.00, 0],
    ["Porção Mista", "Filé vaca, filé frango, filé mignon, suíno, bacon, calabresa, cebola, 500gr batata frita", 65.00, 0]
]
let omeleteGrande = [
    ["lista", "omeletes", "vazio"],
    ["Omelete de filé (Grande)", "Filé, bacon, salsicha, presunto, queijo, catupiry, tomate e batata palha", 76.00, 0],
    ["Omelete de frango (Grande)", "Frango, bacon, salsicha, presunto, queijo, catupiry, tomate e batata palha", 63.00, 0],
    ["Omelete de Lombo (Grande)", "Lombo, bacon, salsicha, presunto, queijo, catupiry, tomate e batata palha", 61.00, 0]
];
let omeleteMedio = [
    ["lista", "omeletes", "vazio"],
    ["Omelete de filé (Médio)", "Filé, bacon, salsicha, presunto, queijo, catupiry, tomate e batata palha", 49.00, 0],
    ["Omelete de frango (Médio)", "Frango, bacon, salsicha, presunto, queijo, catupiry, tomate e batata palha", 41.00, 0],
    ["Omelete de Lombo (Médio)", "Lombo, bacon, salsicha, presunto, queijo, catupiry, tomate e batata palha", 43.00, 0]
];
let tapiocaSalgada = [
    ["lista", "tapiocaSalgada", "vazio"],
    ["Tapioca salgada", "Costela com queijo", 21.00, 0],
    ["Tapioca salgada", "Carne seca com queijo", 21.00, 0],
    ["Tapioca salgada", "Cupim com queijo", 21.00, 0],
    ["Tapioca salgada", "Frango com tomate", 18.00, 0],
    ["Tapioca salgada", "Frango com catupiry", 18.00, 0],
    ["Tapioca salgada", "Frango com bacon", 18.00, 0],
    ["Tapioca salgada", "Frango com mussarela", 18.00, 0],
    ["Tapioca salgada", "Frango com milho", 18.00, 0],
    ["Tapioca salgada", "Calabresa com tomate", 18.00, 0],
    ["Tapioca salgada", "Calabresa com caturpiry", 18.00, 0],
    ["Tapioca salgada", "Calabresa com bacon", 18.00, 0],
    ["Tapioca salgada", "Calabresaa com mussarela", 18.00, 0],
    ["Tapioca salgada", "Calabresa com milho e mussarela", 18.00],
    ["Tapioca salgada", "Presunto e mussarela", 18.00, 0],
    ["Tapioca salgada", "Presunto, mussarela e tomate", 18.00, 0],
    ["Tapioca salgada", "Presunto, mussarela e catupiry", 18.00, 0],
    ["Tapioca salgada", "Presunto, mussarela e milho", 18.00, 0],
    ["Tapioca salgada", "Presunto, mussarela e bacon", 18.00, 0],
    ["Tapioca salgada", "Moda da casa (bacon, presunto, queijo, catupiry, calabresa e tomate)", 20.00, 0]
];
let tapiocaDoce = [
    ["lista", "tapiocaDoce", "vazio"],
    ["Tapioca doce", "Chocolate ao leite com queijo", 18.00, 0],
    ["Tapioca doce", "Prestígio", 18.00, 0],
    ["Tapioca doce", "Morango com nutella", 18.00, 0],
    ["Tapioca doce", "Morango com leite condensado", 18.00, 0],
    ["Tapioca doce", "Morango, coco e leite condensado", 18.00, 0],
    ["Tapioca doce", "Nutella e coco", 18.00, 0],
    ["Tapioca doce", "Nutella com banana", 18.00, 0],
    ["Tapioca doce", "Banana com canela", 18.00, 0],
    ["Tapioca doce", "Goiabada com queijo", 18.00, 0],
    ["Tapioca doce", "Moda da casa (banana, nutella, coco, bis preto e sorvete de creme)", 20.00, 0]
];

//Lista geral
let PRODUTOS = [
    combos, copos, barcas, tigelas,
    litros, bolas, tacas, milks1, milks2, milks3, milks4,
    refri2Litros, refri1Litro, refriLata, limoneto, sucos, cervejas, vitaminas,
    hamburguer, frango, combo, file, lombo, cupim, costela,
    salgadaGrande, salgadaPequena, doceGrande, docePequena, doisSabores,
    porcoesBatata, porcoesCarne, omeleteGrande, omeleteMedio, tapiocaSalgada, tapiocaDoce
];

//Funções curinga______________________________________________________________________________________________________

//Retorna o elemento do id
function get(id) {
    return document.getElementById(id);
}

//Liga ou desliga o elemento 
function dijuntor(id) {
    if (get(id).style.display == 'flex') {
        get(id).style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    else {
        get(id).style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

//Retorna true no horário de funcionamento
let agora = new Date();
let horas = agora.getHours();
let minutos = agora.getMinutes();
let dia = agora.getDay();
let fechar;
let retorno = true;
function aberto() {
    switch (dia) {
        case 0:
            fechar = 22;
            break;
        case 1:
            fechar = 21;
            break;
        case 2:
            fechar = 21;
            break;
        case 3:
            fechar = 21
            break;
        case 4:
            fechar = 21;
            break;
        case 5:
            fechar = 22;
            break;
        case 6:
            fechar = 22
            break;
    }
    if ((horas >= 14) && (horas <= fechar)) {
        if ((horas == 14) && (minutos < 30)) {
            retorno = false;
        }
        if ((horas == fechar) && (minutos > 30)) {
            retorno = false;
        }
    }
    else{
        retorno = false;
    }
    return retorno;
}

//Funções auxiliares____________________________________________________________________________________________________

//Responsavel por montar a lista selecionada (PRODUTOS[x]) em um campo "produtos"+ x específico
let id = 0;
function montarItem(list) {
    let lista = PRODUTOS[list];
    let org = lista[0];
    let tip = org[1];
    let ext = org[2];
    let inclusos = org[3];
    for (let item = 1; item < lista.length; item++) {
        id++;
        let info = lista[item];
        get("produtos" + list).innerHTML += definirOrg(org[0], info[0], info[1], info[2], info[3], (tip + item), id, ext, inclusos);
    }
}

//Atualiza a lista de pedidos
function mostrarPedido() {
    get('listaPedido').innerHTML = ``;
    for (let i = 0; i < pedido.length; i++) {

        let itemMontado = pedido[i];

        //Listando os extras do pedido
        let extrasMontados = itemMontado[3];
        let totalItem = parseFloat(itemMontado[2]);
        let listExtras = `<h3>R$ <i>${itemMontado[2]}</i></h3>`;
        for (let j = 0; j < extrasMontados.length; j++) {
            let adicional = extrasMontados[j];
            totalItem += parseFloat(adicional[1]);
            listExtras += `
                <p class="adicional">${adicional[0]} <span>+ R$ <i>${adicional[1]}</i></span></p>
            `;
        }

        get('listaPedido').innerHTML += `
            <li>
                <h3>${itemMontado[0]}</h3>
                <h4>${itemMontado[1]}</h4>
                <h5>Lembrete: <br> ${itemMontado[4]}</h5>
                ${listExtras}
                <span>Total: R$ <i>${totalItem.toFixed(2)}</i></span>
                <button onclick="retirarItem(${i})">Retirar</button>
            </li>
        `
    }
    if (pedido.length == 0) {
        get('verPedido').style.display = 'none';
        get('finalizar').style.display = 'none';
    }
    else {
        get('verPedido').style.display = 'flex';
    }
}

//Montar link
let totalPedido = 0.0

//Link 
let link = "https://wa.me/551631723514?text=Novo%20pedido%0A%0A";
function montarLink() {

    //Reiciando o total
    totalPedido = 0.0;

    //Nome
    link += "Para:%20" + get('nome').value;

    for (let i = 0; i < pedido.length; i++) {
        link += "%0A%0A_____________________________";
        let adicionado = pedido[i];

        //Separando informações
        let titulo = adicionado[0];
        let descricao = adicionado[1];
        let valor = parseFloat(adicionado[2]);
        let adicionais = adicionado[3];
        let lembrete = adicionado[4];

        //Montando item do pedido
        link += "%0A%0A" + titulo;
        link += "%0A%0A" + descricao + "%0A";

        //Adicionando extras
        for (let j = 0; j < adicionais.length; j++) {
            let add = adicionais[j];
            link += "%0A%2B%20" + add[0] + "%20(%2B%20R$%20" + add[1] + ")"
            valor += parseFloat(add[1]);
        }
        link += "%0A%0ATotal%20do%20item:%20R$" + valor.toFixed(2);

        //Lembrete
        link += "%0A%0ALembrete:" + lembrete;

        totalPedido += valor;
    }

    moldarInfo();

    //Forma de recebimento
    link += "%0A%0A_____________________________%0A%0A" + info1;

    //Forma de pagamento
    link += "%0A%0A" + info2;
    link += "%0A%0ATotal%20do%20pedido:%20R$%20" + totalPedido.toFixed(2);
}

//Seleciona informações para o link
let info1;
let info2;
let taxaEntrega = 5.0;
get('taxaEntrega').innerHTML = taxaEntrega.toFixed(2);
function moldarInfo() {
    let retirar = get('retirar').checked;
    let consumo = get('consumo').checked;
    let entrega = get('entrega').checked;
    let cartao = get('cartao').checked;
    let pix = get('pix').checked;
    let dinheiro = get('dinheiro').checked;

    if (retirar) {
        info1 = "Retirar%20no%20local";
    }
    if (consumo) {
        info1 = "Consumir%20no%20local";
    }
    if (entrega) {
        info1 = "Para%20entrega%20(taxa:%20R$%20" + taxaEntrega.toFixed(2) + ")%0A%0A";
        totalPedido += taxaEntrega;
        for (let i = 1; i <= 4; i++) {
            info1 += get('end' + i).value + "%0A";
        }
    }
    if (cartao) {
        info2 = "Cartão"
    }
    if (pix) {
        info2 = "Pix%0A(envie%20para%2016993383633)%0AFavor%20enviar%20o%20comprovante"
    }
    if (dinheiro) {
        let troco = parseFloat(get('troco').value) - totalPedido;
        info2 = "Dinheiro%0A%0ATroco%20para%20R$%20" + (parseFloat(get('troco').value)).toFixed(2) + "%0ATroco=%20R$%20" + troco.toFixed(2);
    }
}

//Retira itens e atualiza o pedido
function retirarItem(posicao) {
    pedido.splice(posicao, 1);
    mostrarPedido();
}

//Adiciona extras a lista do pedido
let extras = [];
function interagirExtra(posicao, inclusos) {
    let listaAdicionais = ADICIONAIS[posicao];
    extras = [];
    let preco;
    let naoInclusos = 0;
    for (let i = 1; i < listaAdicionais.length; i++) {
        if (get("extra" + i).checked) {
            if ((get('nomeExtra' + i).innerHTML).slice(-13) == "(NÃO INCLUSO)") {
                naoInclusos++;
            }
            if (((extras.length) - naoInclusos) < inclusos && (get('nomeExtra' + i).innerHTML).slice(-13) != "(NÃO INCLUSO)") {
                preco = 0.0;
            }
            else {
                preco = get("valExtra" + i).innerHTML;
            }
            let novo = [
                get("nomeExtra" + i).innerHTML,
                preco
            ]
            extras.push(novo)
        }
    }
}

//Verifica se está tudo pronto para gerar o link

function verifica() {
    let retirar = get('retirar').checked;
    let consumo = get('consumo').checked;
    let entrega = get('entrega').checked;
    let cartao = get('cartao').checked;
    let pix = get('pix').checked;
    let dinheiro = get('dinheiro').checked;

    verificado = true;

    //Verificando o campo nome
    if (get('nome').value == "") {
        verificado = false;
        alert("Informe seu nome")
    }

    //Verificando endereço
    if (retirar || consumo || entrega) {
        if (entrega) {
            for (let i = 1; i <= 3; i++) {
                if (get('end' + i).value == "") {
                    verificado = false;
                    alert("Informações de endereço faltando")
                }
            }
        }
    }
    else {
        verificado = false;
        alert("Informe como devemos fornecer o pedido");
    }

    //Verificando pagamento
    if (cartao || pix || dinheiro) {
        if (dinheiro) {
            if (get('troco').value == "" || parseFloat(get('troco').value) < totalPedido) {
                verificado = false;
                alert("Valor para troco inválido");
            }
        }
    }
    else {
        verificado = false;
        alert("Informe o método de pagamento")
    }

}

//Contrutores html______________________________________________________________________________________________________

//Monta o item no cardápio com a organização prevista
function definirOrg(org, tit, desc, val, incl, posi, id, ext) {
    switch (org) {
        case "carrossel":
            return `
                <li>
                    <img src="Assets/Imagens/${posi}.jpg" alt="imagem ilustrativa do produto">
                    <h3 id="tit${id}">${tit}</h3>
                    <p id="desc${id}">${desc}</p>
                    <span>R$ <i id="val${id}">${val.toFixed(2)}</i></span>
                    <button onclick="pedir(${id}, ${ext}, ${incl})">Pedir</button>
                </li>
            `;
        case "lista":
            return `
                <li>
                    <h3 id="tit${id}">${tit}</h3>
                    <img src="Assets/Imagens/logo.jpg" alt="icone logo empório do açai">
                    <p id="desc${id}">${desc}</p>
                    <span>R$ <i id="val${id}">${val.toFixed(2)}</i></span>
                    <button onclick="pedir(${id}, ${ext}, ${incl})">Pedir</button>
                </li>
            `;
        case "grande":
            return `
               <li>
                    <img class="grandeImg" src="Assets/Imagens/${posi}.jpg" alt="imagem ilustrativa do produto">
                    <div class="grandeInfo">
                        <h3 id="tit${id}">${tit}</h3>
                        <p id="desc${id}">${desc}</p>
                        <span>R$ <i id="val${id}">${val.toFixed(2)}</i></span>
                        <button onclick="pedir(${id}, ${ext}, ${incl})">Pedir</button>
                        <img src="Assets/Imagens/logo.jpg" alt="icone logo empório do açai">
                    </div>
                </li>
            `;
        case "metade":
            return `
                <li>
                    <div class="metade">
                        <ul class="listaOpc" id="opcoesMetade">
                            ${doisSab(doisSaboresPizza, id)}
                        </ul>
                        <div id="metadeFinal" class="metadeFinal grandeInfo">
                            <h3 id="tit${id}">${tit}</h3>
                            <p id="desc${id}"></p>
                            <span>R$ <i id="val${id}"></i></span>
                            <button onclick="pedir(${id}, ${ext}, ${incl})">Pedir</button>
                            <img src="Assets/Imagens/logo.jpg" alt="icone logo empório do açai">
                        </div>
                    </div>
                </li>
            `;
    }
}

//Monta os sabores da pizza de 2 sabores
function montarSabores(id) {
    let contagem = 0;
    let sabor1 = [];
    let sabor2 = [];
    for (let j = 0; j < doisSaboresPizza.length; j++) {
        if (get("opc" + j).checked) {
            contagem++;
            if (contagem > 2) {
                get("opc" + j).checked = false;
                alert("Não é possível marcar mais de 2 sabores")
            }
            if (contagem == 1) {
                sabor1.push(get('opcTit' + j).innerHTML);
                sabor1.push(get('opcVal' + j).innerHTML);
            }
            if (contagem == 2) {
                get('metadeFinal').style.display = 'flex';
                sabor2.push(get('opcTit' + j).innerHTML);
                sabor2.push(get('opcVal' + j).innerHTML);

                if (sabor2[1] >= sabor1[1]) {
                    get('val' + id).innerHTML = sabor2[1];
                }
                else {
                    get('val' + id).innerHTML = sabor1[1];
                }

                get('desc' + id).innerHTML = sabor1[0] + " / " + sabor2[0];
            }
            else {
                get('metadeFinal').style.display = 'none';
            }
        }
    }
}

//Monta uma lista com opções para 2 sabores
function doisSab(lista, id) {
    let opc = ``;
    for (let i = 0; i < lista.length; i++) {
        let list = lista[i];
        opc += `
            <li>
                <div class="opcTit">
                    <input type="checkbox" id="opc${i}" onchange="montarSabores(${id})">
                    <label id="opcTit${i}" for="opc${i}">${list[0]}</label>
                </div>
                <p id="opcDesc${i}">${list[1]}</p>
                <span>R$ <i id="opcVal${i}">${list[2].toFixed(2)}</i></span>
            </li>
        `
    }
    return opc;
}

//Adiciona extras no modal de montar item
function montarExtras(tipo, inclusos) {
    if (tipo[0] != "vazio") {
        get('extras').innerHTML = ``;
        let atributo = tipo[0];
        for (let i = 1; i < tipo.length; i++) {
            let extraOrg = tipo[i]
            get('extras').innerHTML += `
                <li class="extra">
                    <input onchange="interagirExtra(${atributo[1]}, ${inclusos})" type="${atributo[0]}" name="extras" id="extra${i}">
                    <label for="extra${i}" id="nomeExtra${i}">${extraOrg[0]}</label>
                    <span>R$ <i id="valExtra${i}">${extraOrg[1].toFixed(2)}</i></span>
                </li>
            `
        }
    }
    else {
        get('btnAbrirExtras').style.display = 'none';
    }
}

//Funções principais_____________________________________________________________________________________________________

//Abre o modal para personalizar o item desejado
function pedir(id, ext, inclusos) {
    if(aberto()){
        dijuntor('montar');
        extras = [];
        get('montar').innerHTML = `

            <div class="fundoPedido"></div>
            <h2>BOA ESCOLHA</h2>
        
            <div class="montarInfo">
                
                <button class="voltar" onclick="dijuntor('montar')">
                    <img src="Assets/icons/voltar.png" alt="icone voltar">
                    Voltar
                </button>
                
                <h3 id="novoTit">${get('tit' + id).innerHTML}</h3>
                <p id="novoDesc">${get('desc' + id).innerHTML}</p>
                
                <input class="abrirListaEscondida" id="listaExtras" type="checkbox">
                <label id="btnAbrirExtras" class="abrirExtra" for="listaExtras">Adicionais</label>
                <ul id="extras" class="listaEscondida"></ul>
                <input id="campoLembrete" class="lembrete" placeholder="Lembrete">
                
                <span>R$ <i id="novoVal">${get('val' + id).innerHTML}</i></span>
                <button onclick="adicionarPedido()" class="btnMontar">+ Adicionar ao pedido</button>
            </div> 
        `;
        montarExtras(ext, inclusos);
    }
    else {
        alert("Agradecemos a preferência, abriremos as 14h30");
    }
}

//Adiciona o item desejado ao pedido
let pedido = [];
function adicionarPedido() {

    //Fecha o modal de montar itens
    dijuntor('montar');

    //Coleta o novo produto e o adiciona
    let novoProduto = [
        get('novoTit').innerHTML,
        get('novoDesc').innerHTML,
        get('novoVal').innerHTML,
        extras,
        get('campoLembrete').value
    ];
    pedido.push(novoProduto);

    mostrarPedido();
}

//Gera o link de enviar pedido

let verificado = true;
function gerarLink() {

    //Verificações necessárias
    link = "https://wa.me/551631723514?text=Novo%20pedido%0A%0A";
    montarLink()
    verifica();

    if (verificado) {

        //Fechando tudo e deixando apenas o link
        get('sairPedido').style.display = 'none';
        get('formulario').style.display = 'none';
        get('listaPedido').style.display = 'none';
        get('linkFinal').style.display = 'flex';
        get('linkFinal').innerHTML += `<a href="${link}">Enviar Pedido</a>`
    }
}

//Script geral___________________________________________________________________________________________________________

//Adicionando todos os itens em seus respectivos lugares 
for (let i = 0; i < PRODUTOS.length; i++) {
    montarItem(i);
}

//Atualiza o status de funcionamento
if(aberto()){
    get('status').innerHTML="Aberto";
}
else{
    get('status').innerHTML="Fechado";
}