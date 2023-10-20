// Definindo a interface "Produto"
interface Produto {
    nome: string;
    preço: number;
    categoria: string;
  }

  // Criando dois objetos do tipo "Produto"
const produto1: Produto = {
    nome: "Camiseta Dc",
    preço: 100.00,
    categoria: "Vestuário",
  };
  
  const produto2: Produto = {
    nome: "Tenis Vans",
    preço: 499.99,
    categoria: "Vestuário",
  };

  // Criando um array chamado "listaProdutos" e adicionando os objetos
const listaProdutos: Produto[] = [produto1, produto2];

// Usando o Spread Operator para exibir as informações do array
console.log("Informações dos produtos na lista:");
listaProdutos.forEach((produto, index) => {
  console.log(`Produto ${index + 1}:`);
  console.log(`Nome: ${produto.nome}`);
  console.log(`Preço: R$ ${produto.preço.toFixed(2)}`);
  console.log(`Categoria: ${produto.categoria}`);
  console.log("---------------------------");
});

