// Dados dos produtos
const produtos = [
  { nome: "Produto A", preco: 100.0, desconto: 0.1 },
  { nome: "Produto B", preco: 200.0, desconto: 0.15 },
  { nome: "Produto C", preco: 50.0, desconto: 0.2 },
  { nome: "Produto D", preco: 80.0, desconto: 0.05 }
];

// 1. Usando `map`: Calcular os preços com desconto
const precosComDesconto = produtos.map(p => p.preco * (1 - p.desconto));
console.log("Preços com desconto:", precosComDesconto);

// 2. Usando `filter`: Selecionar preços abaixo de 100
const precosFiltrados = precosComDesconto.filter(preco => preco < 100);
console.log("Preços filtrados:", precosFiltrados);

// 3. Usando `reduce`: Calcular a soma total dos preços filtrados
const total = precosFiltrados.reduce((acc, preco) => acc + preco, 0);
console.log("Soma total dos preços filtrados:", total);

  