import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para receber os dados de nome e CPF
const getUserData = () => {
  return new Promise((resolve) => {
    rl.question('Insira o nome completo: ', (fullName) => {
      rl.question('Insira o CPF: ', (cpf) => {
        resolve({ fullName, cpf });
        rl.close();
      });
    });
  });
};

getUserData().then((userData) => {
  // Criando uma instância da classe Cliente
  const cliente = new Cliente(userData.fullName, userData.cpf);

  // Exibindo os dados armazenados
  console.log(`Cliente Created:`);
  console.log(`Name: ${cliente.nome}`);
  console.log(`CPF: ${cliente.cpf}`);
});

//let nomeCompleto = prompt("Informe o nome completo para cadastro: ");
//
//let cpf = prompt("Informe o CPF: ");

//const cliente1 = new Cliente("Ricardo", 11122233309);
//const cliente2 = new Cliente("Alice",88822233309 );
//
//
//const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
//
//
//const contaCorrenteAlice = new ContaCorrente(1002, cliente2);
//
//
//
//console.log(cliente1);
//console.log(contaCorrenteRicardo);
//console.log(cliente2);
//console.log(contaCorrenteAlice);
//
//
//console.log(ContaCorrente.numeroDeContas);



