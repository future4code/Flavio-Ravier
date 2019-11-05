/* Exercícios de interpretação de código */

/* Exercício 1:
Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

Explique o que o código faz. 
------- >> O teste pega um valor digitado pelo usuário e verifica se o mesmo é par ou impar ao buscar qual 
é o valor do resto da divisão do valor por 2. Caso o resto da divisão dê 0, o número é Par e ele retorna no
terminal que  "Passou no teste" 
Qual o teste que ele realiza? 
Verificar se o número dado é par ou impar
Para que tipos de números ele imprime no console "Passou no teste"?
Números Pares
Para que tipos, a mensagem é "Não passou no teste"? 
Números Impares

*/

/*
Exercício 2:
Leia o código abaixo:
let fruta = prompt("Escolha uma fr")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM d.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a. Para que serve o código acima?

O código tem a função de indicar o valor de determinadas frutas de um supermercado.

b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

O preço da fruta Maçã é R$ 2.25

c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. 
Qual seria o preço que você pagaria?

2*3.5 + 2*2.25 + 3*5 + 1*0.30 = R$26,80

d. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos 
o break que está logo acima do deafult (o break indicado pelo comentário "BREAK PARA O ITEM d.")?

Com a falta deste break o código iria continuar rodando até o Default, pegando um novo valor de preco = 5, logo
teríamos impresso o valor de R$5,00

*/

/*
Exercício 3:

const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)

Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá 
algum erro? Justifique usando os conceitos de bloco ou escopo.

O terminal retornará um erro devido ao fato de let mensagem está sendo definida dentro do bloco pai do
primeiro if, isso fará com que mensagem só possa ser utilizada dentro do bloco pai citado aqui e os blocos
filhos abaixo deste. Por exemplo, mensagem = "Número 1 é maior que o 2!"; dentro do segundo if está ok.
O erro realmente surge ao tentar gerar um console.log(mensagem), o erro aqui será dizendo que 'mensagem is not
defined'. 

Uma solução paliativa seria definir mensagem por meio de var e não let, que assim ela seria definido para 
todo escopo.

*/

/* Exercícios de escrita de código */

// TODOS OS CÓDIGOS ESTÃO ATIVADOS, MAS PARA EXECUTA-LOS, DEVEM SER VISTOS INDIVIDUALMENTE, COMENTANDO OS CÓDIGOS
// ANTERIORES.

/*
Exercício 1:

1. Nos exercícios abaixo, será necessário que você trabalhe com a comparação de números. Leia abaixo:

a. Crie um programa que receba dois números do usuário através do prompt e imprima-os na ordem 
decrescente. O que acontece com o seu programa se os 2 números forem iguais?

b. . Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem decrescente. 
O que acontece como seu programa se os 3 números forem iguais?

c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso 
ao usuário indicando que ele deve, ao menos, inserir um número diferente.

*/

// CODIGO 1
let nu1 = 1;
let nu2 = 2;
let nu3 = 3;
let x = 0;

do {
  console.log(nu1 === nu2 && nu2 === nu3 && nu2 === nu3);
  if (nu1 === nu2 && nu2 === nu3 && nu2 === nu3) {
    console.log(
      "Digite pelo menos um valor de número diferente entre os três valores"
    );

    x = 1;

    nu1 = Number(
      prompt(
        "Digite pelo menos um valor diferente dentre os 3\nDigite o primeiro número: "
      )
    );
    nu2 = Number(prompt("Digite o segundo número: "));
    nu3 = Number(prompt("Digite o terceiro número: "));

    if (nu1 >= nu2 && nu2 >= nu3) {
      console.log(nu1);
      console.log(nu2);
      console.log(nu3);
    } else if (nu1 >= nu3 && nu3 >= nu2) {
      console.log(nu1);
      console.log(nu3);
      console.log(nu2);
    } else if (nu2 >= nu1 && nu1 >= nu3) {
      console.log(nu2);
      console.log(nu1);
      console.log(nu3);
    } else if (nu2 >= nu3 && nu3 >= nu1) {
      console.log(nu2);
      console.log(nu3);
      console.log(nu1);
    } else if (nu3 >= nu2 && nu2 >= nu1) {
      console.log(nu3);
      console.log(nu2);
      console.log(nu1);
    } else if (nu3 >= nu1 && nu1 >= nu2) {
      console.log(nu3);
      console.log(nu1);
      console.log(nu2);
    }
  } else {
    nu1 = Number(prompt("Digite o primeiro número: "));
    nu2 = Number(prompt("Digite o segundo número: "));
    nu3 = Number(prompt("Digite o terceiro número: "));

    if (nu1 >= nu2 && nu2 >= nu3) {
      console.log(nu1);
      console.log(nu2);
      console.log(nu3);
    } else if (nu1 >= nu3 && nu3 >= nu2) {
      console.log(nu1);
      console.log(nu3);
      console.log(nu2);
    } else if (nu2 >= nu1 && nu1 >= nu3) {
      console.log(nu2);
      console.log(nu1);
      console.log(nu3);
    } else if (nu2 >= nu3 && nu3 >= nu1) {
      console.log(nu2);
      console.log(nu3);
      console.log(nu1);
    } else if (nu3 >= nu2 && nu2 >= nu1) {
      console.log(nu3);
      console.log(nu2);
      console.log(nu1);
    } else if (nu3 >= nu1 && nu1 >= nu2) {
      console.log(nu3);
      console.log(nu1);
      console.log(nu2);
    }
  }
} while (nu1 === nu2 || nu2 === nu3 || nu2 === nu3);

/*
Exercício 2:
LINK PARA DIAGRAMA:
https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=diagrama_animais.drawio#R7Vtdk6I4FP01PM4WISDJI9r0tFV%2B9Kg9M%2FvISFqYRuNiHHV%2F%2FQYMIoHuoatXQ%2BHwIrmQr3suJycX1GBvuf8ce%2BtgSH0SaYbu7zV4pxn8sCD%2FSSyHowUYwD5aFnHoC1tumIb%2FEmHUhXUb%2BmRTuJFRGrFwXTTO6WpF5qxg8%2BKY7oq3PdOo2OvaW5CSYTr3osz6l5Xbv4U%2BC4QddHB%2B4YGEi0B0jgwxwx%2Fe%2FGUR0%2B1K9KgZ8Dk9jpeXXtaWmOom8Hy6OzNBV4O9mFJ2PFvueyRK3Js57ljv%2FpWrp%2FnEZMXqVPCeXLzdTf%2FZxIPlt5cu3llj9AmLWW7YIXMJ8bmHRJHGLKALuvIiN7d200mTpFmdl%2FJ7BpSuuRFw40%2FC2EHA7W0Z5aaALSNxlY84PnxP6nP3i%2BLform0cLcvlA6idBxrMsBXfSBMG7qN5%2BSNiVvWCQIe3YQuCe%2BIV4xJ5LHwV7EDT0TZ4nTfqeojDXnXhi4eiY4t0BYPhKnrxSaYFy8IE7VytPjJ2TByU4rhO%2FAEOrhpQDl9pA5%2B40YbfhD5AmbvBSgb5i8v2pKMOCTA4oAuf2x5z91dEDIyXXvpzHecg4tuF02RmJH92w4sT1dUQJ1iwBpZAO%2FOyBAJW3DOg%2FqFPJQR75mH3OmXJ3fgzsYavC95i8%2BdFd2yYTF9IT0a0ZhbVnSVxPhzGEWSyYvCxYoX59xXhNu7iSdDvjg44sIy9P30AanCofjQ%2FA9QYFiEAuplKMwKJIxLIQH0cmzeBpnYsC6ZfHQZ%2BSBAt7p81wYIvfLMXQegbJhNYXsAdEmfINV0b5slFz26g%2FG01VQPgKQTLaCc6%2BGtUkld4YiVUgnQzT8A%2FWYxtpVyfcOVfcdQTvWdCqofOe2melnVdyzlTG8pJRJQoJGcVa5AJHZd0ahY1XdulenrAmRjpUxvN4vpLVSkGNtUzvSo5KGZO5m409nEbS%2FVn6g9w6Eil3ZlqrfVMok6qsd1qf6jmrH6PQCSQgFbEsYXfw%2BAVCCvBEG1a0E5W92otQBXJBauuxZkDZ95yBl2%2B%2B5oxpcC3fny5Mz6vTE%2FnXVbvRGQVwdcsUpfd3XIQuPmdCbKPjX4bcpH7UYAKHmZq8TRSlM32TCbQuIAmk3L3SCj5KKJ0%2BuPR86g1awNTNCw%2FA2qk2csuOHyASvHq%2FodKKrKNfa%2Ft3j3KQeq8t0nqpMmuXKgyknxBsjjcqrEGd1rPaihu25%2F3N54lRPjyvUwqrOVu3K8yts5oCv%2FPguX93OTNFzx46w%2FaG%2B8yvu3%2FFsKVQGL68hWxQSrXgngsnJ1vrZYB8i8qlwH4AYKVgAkxYqU77BwWbEOnWH%2F3p0kybFRSrEwOX14GjqjFgsDYEhKFqnecuEGKllgNe77DlyWsq2P1U7jPu8ADaRbWcaaFdLpurEKQJlu%2B6Ov7mTmdifOXYtDVtaxJrxYxPJi%2Fv%2B246vN%2FH%2BE0P0P


*/

// CÓDIGO 2

let vert = prompt("Vertebrado ou Invertebrado?");
let pelo;
let pena;
let terrestre;
let aquatico;
let racional;

if (vert === "Vertebrado") {
  pelo = prompt("Pelos [s/n]?");
  if (pelo === "s") {
    racional = prompt("Racional [s/n]?");
    if (racional === "s") {
      console.log("Este animal é um Humano");
    } else {
      console.log("Este animal é um mamífero não humano");
    }
  } else {
    pena = prompt("Penas [s/n]");
    if (pena === "s") {
      console.log("Este animal é uma Ave");
    } else {
      terrestre = prompt("Vive em ambiente terrestre [s/n]?");
      if (terrestre === "s") {
        aquatico = prompt(
          "Pode viver parte da vida em ambiente aquático [s/n]"
        );
        if (aquatico === "s") {
          console.log("Este animal é um anfíbio");
        } else {
          console.log("Este animal é um Réptil");
        }
      } else {
        console.log("Este animal é um Peixe");
      }
    }
  }
} else {
  console.log("Este é um animal ", vert);
}

/*
Exercício 3:


*/

let nome = prompt("Qual seu nome completo?");
let tipoJogo = prompt("Qual tipo de jogo? [IN/DO]");
let etapaJogo = prompt("Qual etapa do jogo? [SF/DT/FI]");
let cat = prompt("Qual categoria? [1/2/3/4]");
let quant = Number(prompt("Quantidade de ingressos?"));

console.log(
  "---Dados da compra---\nNome do cliente: ",
  nome,
  "\nTipo do Jogo: ",
  tipoJogo,
  "\nEtapa do jogo: ",
  etapaJogo,
  "\nCategoria: ",
  cat,
  "\nQuantidade de Ingressos: ",
  quant,
  " ingressos"
);
let valorIng;
let valorTot;

switch (etapaJogo) {
  case "SF":
    switch (cat) {
      case "1":
        valorIng = 1320;
        break;
      case "2":
        valorIng = 880;
        break;
      case "3":
        valorIng = 550;
        break;
      case "4":
        valorIng = 220;
        break;
      default:
        break;
    }
    break;

  case "DT":
    switch (cat) {
      case "1":
        valorIng = 660;
        break;
      case "2":
        valorIng = 440;
        break;
      case "3":
        valorIng = 330;
        break;
      case "4":
        valorIng = 170;
        break;
      default:
        break;
    }
    break;
  case "FI":
    switch (cat) {
      case "1":
        valorIng = 1980;
        break;
      case "2":
        valorIng = 1320;
        break;
      case "3":
        valorIng = 880;
        break;
      case "4":
        valorIng = 330;
        break;
      default:
        break;
    }
    break;
  default:
    break;
}

switch (tipoJogo) {
  case "IN":
    valorIng = (valorIng * 4.1).toFixed(2);
    break;
  default:
    break;
}

valorTot = (quant * valorIng).toFixed(2);
console.log(
  "---Valores---\nValor do ingresso: R$ ",
  String(valorIng),
  "\nValor Total: $ ",
  String(valorTot)
);
