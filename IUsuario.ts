//EXERCICIO 2

// Definindo a interface "Usuario"
interface Usuario {
  nome: string;
  idade: number;
  cidade: string;
  email: string;
  amigos: string[];
}

const usuario1: Usuario = {
    nome: "Leonardo",
    idade: 20,
    cidade: "Suamaré",
    email: "limaleo13@hotmail.com",
    amigos: ["Rhyan", "Allan", "Luciano"],
  };
  
  const usuario2: Usuario = {
    nome: "Eduardo",
    idade: 23,
    cidade: "São-Paulo",
    email: "du@gmail.com",
    amigos: ["Léo", "Victor"],
  };

  console.log("Informações do usuário 1:");
console.log("Nome: " + usuario1.nome);
console.log("Idade: " + usuario1.idade);
console.log("Cidade: " + usuario1.cidade);
console.log("Email: " + usuario1.email);
console.log("Amigos: " + usuario1.amigos.join(", "));

console.log("\nInformações do usuário 2:");
console.log("Nome: " + usuario2.nome);
console.log("Idade: " + usuario2.idade);
console.log("Cidade: " + usuario2.cidade);
console.log("Email: " + usuario2.email);
console.log("Amigos: " + usuario2.amigos.join(", "));



