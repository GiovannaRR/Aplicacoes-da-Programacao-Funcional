# Sistema de Desconto e Filtragem de Preços

Este projeto implementa um sistema para calcular o preço de desconto de produtos, filtrar os preços abaixo de R$100,00 e somar os valores resultantes, utilizando programação funcional.

## Funcionalidades

- Calcular o preço com desconto de cada produto
- Filtrar os preços abaixo de R$100,00
- Calcular a soma total dos preços filtrados

## Sobre o Projeto

O sistema trabalha com uma lista fixa de produtos, onde cada produto possui um nome, preço original e desconto. As operações são feitas utilizando funções funcionais (`map`, `filter`, `reduce`), que realizam as seguintes ações:

1. **`map`**: Aplica o desconto no preço de cada produto.
2. **`filter`**: Filtra os produtos com preço final abaixo de R$100,00.
3. **`reduce`**: Calcula a soma dos preços filtrados.

### Exemplo de Execução

```javascript
const produtos = [
  { nome: "Produto A", preco: 100.0, desconto: 0.1 },
  { nome: "Produto B", preco: 200.0, desconto: 0.15 },
  { nome: "Produto C", preco: 50.0, desconto: 0.2 },
  { nome: "Produto D", preco: 80.0, desconto: 0.05 }
];

const precosComDesconto = produtos.map(p => p.preco * (1 - p.desconto));
const precosFiltrados = precosComDesconto.filter(preco => preco < 100);
const total = precosFiltrados.reduce((acc, preco) => acc + preco, 0);

console.log("Preços com desconto:", precosComDesconto);
console.log("Preços filtrados:", precosFiltrados);
console.log("Soma total dos preços filtrados:", total);
```

#### Saídas
- Preços com desconto: [90, 170, 40, 76]
- Preços filtrados: [90, 40, 76]
- Soma total dos preços filtrados: 206

##### Vantagens da Progamação Funcional
- O uso de funções como map, filter e reduce torna o código mais legível e direto. Cada função tem um propósito claro, facilitando a compreensão do fluxo de dados.
- As operações são realizadas sem alterar os dados originais, garantindo maior segurança e evitando efeitos colaterais.
- A estrutura do código é modular e fácil de modificar sem comprometer outras partes do sistema, o que facilita a manutenção a longo prazo.


