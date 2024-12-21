// O código resolve um problema de processamento de dados, onde deseja calcular 
// o preço de desconto em uma lista. O objetivo é calcular 
// os preços finais, filtrar os valores abaixo de um limite (R$100,00) e somar os valores 
// resultantes. 

// Utilizando as funções funcionais map, filter e reduce para resolver o problema.
// Cada função realiza uma operação específica, simplificando 
// o código e reduzindo o número de variáveis.

// Vantagens da abordagem funcional:
// O código é mais fácil de entender, pois cada função tem um propósito claro.
// As operações não alteram os dados originais, garantindo maior segurança.
// Funções menores e focadas facilitam alterações e depuração no código.

// Dados dos produtos
const produtos = [
  { nome: "Produto A", preco: 100.0, desconto: 0.1 },
  { nome: "Produto B", preco: 200.0, desconto: 0.15 },
  { nome: "Produto C", preco: 50.0, desconto: 0.2 },
  { nome: "Produto D", preco: 80.0, desconto: 0.05 }
];

// Usando map para calcular os preços com desconto
const precosComDesconto = produtos.map(p => p.preco * (1 - p.desconto));
console.log("Preços com desconto:", precosComDesconto);

// Usando filter para selecionar preços abaixo de 100
const precosFiltrados = precosComDesconto.filter(preco => preco < 100);
console.log("Preços filtrados:", precosFiltrados);

// Usando reduce para calcular a soma total dos preços filtrados
const total = precosFiltrados.reduce((acc, preco) => acc + preco, 0);
console.log("Soma total dos preços filtrados:", total);

  