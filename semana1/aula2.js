/**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 
 * EXERCÍCIO 1
 * a. false
 * b. false
 * c. true
 * d. false
 * e. boolean
 */

/**
 * EXERCÍCIO 2
 * I.  undefined
 * II.  null
 * III.  11
 * IV.  3  e  4
 * V.  19  e  9
 * VI.  3
 * VII.  1
 *
 * * O que é array e como se declara em JS?
 * Arrray é como uma matriz onde podemos guardar memória de forma organizada, com valores alocados em linhas e colunas (falando de forma simplista numa matriz quadratica, mas ela poderia ser cubica e ter mais que linhas e colunas)
 *
 *  Qual o index inicial de um array?
 *  0
 *
 * Como se determinar o tamanho do array?
 * array.lenght
 *
 */

/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 * EXERCÍCIO 1
 */

function f_to_k(f) {
  let kelv = ((f - 32) * 5) / 9 + 273.15;
  return kelv;
}

function c_to_f(c) {
  let fahr = (c * 9) / 5 + 32;
  return fahr;
}
// a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
//GRAUS_FAHRENHEIT - 32)*5/9 + 273,15
console.log("O valor de 77°F em K é: ", f_to_k(77), " K");

console.log("O valor de 80°C em ºF é: ", c_to_f(80), " °F");

console.log(
  "O valor de 30°C em ºF e K é: ",
  c_to_f(30),
  " e em K é: ",
  f_to_k(c_to_f(30)),
  " K"
);

let graus_c = prompt("Insira um valor de Graus Celcius: ");
console.log(
  "O valor de ",
  graus_c,
  "°C em ºF e K é: ",
  c_to_f(Number(graus_c)),
  " e em K é: ",
  f_to_k(c_to_f(Number(graus_c))),
  " K"
);

/**
 * EXERCÍCIO 2
 */
const arrayP = [
  "Qual é o nome do seu filme preferido: ",
  "Qual o genero de filme preferido? ",
  "Seu ator ou atriz preferido",
  "Qual sua animação preferida ",
  "Já assistiu alguma novela? Qual? "
];
let arrayR = [0, 1, 2, 3, 4];
for (const key in arrayP) {
  arrayR[key] = prompt(arrayP[key]);
  console.log(arrayP[key] + "\nResposta: " + arrayR[key]);
}

/**
 * EXERCÍCIO 3
 * a. Calcule e mostre o valor de cada quilowatt-hora, considerando o atual valor do salário mínimo;

 * b. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;

 * c. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.

 */
function sm_to_kwh(sm) {
  let c_kwh = sm / 5;
  return c_kwh;
}

console.log(
  "a. O valor de cada quilowatt-hora considerando o atual valor do salário mínimo de R$ 998,00 é: R$",
  sm_to_kwh(998).toFixed(2)
);

console.log(
  "b. O valor a ser pago por uma residência que consuma 280 quilowatt-hora é : R$",
  (280 * sm_to_kwh(998)).toFixed(2)
);

console.log(
  "c. O valor a ser pago pela residência anterior com 15$ de desconto é : R$",
  (0.85 * 280 * sm_to_kwh(998)).toFixed(2)
);
