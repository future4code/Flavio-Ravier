/**
 * Comece seu exercício aqui! :D
 * EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO
 * 
 * EXERCICIO 1 - 
    let sum = 0
    for(let i = 0; i < 11; i++) {
      sum += i
    }
    console.log(sum)

Neste código temos que a variavel sum irá somar a cada loop um valor de i, gerando ao final no console um valor de sum = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 +10 = 55


 * EXERCICIO 2 -
 * 
    const lista = [10, 11, 12, 15, 18, 19, 20, 23, 25, 27, 30]
    const novaLista = []
    const numero = 5
    for(const item of lista){
      if(item%numero === 0) {
        novaLista.push(item)
      }
    }
    console.log(novaLista)

a. O que o comando .push faz?

adiciona um valor a ultima casa de um array, neste caso, ele adiciona um item da lista para a novaLista
 
b. Qual o valor impresso no console?

 será impresso a novaLista, onde teremos apenas os itens divisiveis por 5.

c.  Qual seria imprimido no console se a variável numero tivesse o valor de 3? E se tivesse o valor de 4?

valor de 3: apenas o divisiveis por 3: [12,15,18,27,30]
valor de 4: apenas o divisiveis por 4: [12,20]

 */



/* Exercícios de escrita de código
EXERCICIO 1

Nas perguntas abaixo, considere que você tenha acesso a um array  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente. 

a. Escreva um programa que devolva o maior e o menor números contidos no array original

*/
// código A

arrOri = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
maior = arrOri[0]
menor = arrOri[0]
for (const itemA of arrOri){
  if (itemA > maior){
    maior = itemA
  }
  if (itemA < menor){
    menor = itemA
  }
}
console.log("O maior número é "+maior+" e o menor é "+menor)

/*
b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.

*/
// código B
let arr01 =[]
for (let i =0; i<arrOri.length;i++){
  arr01.push(arrOri[i]/10)
}
console.log(arr01)

/*

c. Escreva um programa que devolva um novo array contendo, somente, os números ímpares do array original.

*/
//Código C

let arrImp =[]
for (let i =0; i<arrOri.length;i++){
  if (arrOri[i]%2 !==0){
    arrImp.push(arrOri[i])
  }
}
console.log(arrImp)

/*

d. Escreva um programa que um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"

/*
//Código D
*/

let arrayStr =[]
const frase = "O elemento do índex "
for (let i =0; i<arrOri.length;i++){
  arrayStr[i] =frase+i+" é "+arrOri[i]
}
console.log(arrayStr)


/*
DESAFIOS

- INTERPRETAÇÃO DE CÓDIGO 

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}

Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

0
00
000
0000

bem, ver o que faz quando usuario digita 4 é facil, agora vou tentar explicar o que ocorre.

O primeiro while, é um loop para escrever em cada linha, e o for dentro do mesmo determina o que vamos escrever.
A ideia do cóódigo éé escrever um núúmero de zero de acordo com o núúmero da linha, logo, na linha 1, teremos 1 zero, na linha 2, teremos 2 zeros e assim por diante.

é como se tivessimos uma matriz com i e j, no caso i é as linhas onde será escrito o cóódigo, e o j é quantos zeros terá em cada linha.
*/

/*
DESAFIOS

- ESCRITA DE CÓDIGO 
- CÓDIGO 1


Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

Vamos jogar!
O número chutado foi: 3
Errrrrrrrou, é maior
O número chutado foi: 18
Errrrrrrrou, é menor
O número chutado foi: 15
Errrrrrrrou, é menor
O número chutado foi: 11
Acertou!!
O número de tentativas foi: 4 

Um resumo das funcionalidades são:
Solicitar que o primeiro jogador escolha um número, através do prompt. Neste momento, deve-se imprimir no console a mensagem Vamos jogar!

Um resumo das funcionalidades são:

Solicitar que o primeiro jogador escolha um número, através do prompt. Neste momento, deve-se imprimir no console a mensagem Vamos jogar!

A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do prompt. A cada chute, deve ser informado no console:

    O número chutado, com a mensagem: O número chutado foi: <número>

    Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: Errou. O número escolhido é maior/menor

Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: Acertou ; e, embaixo, O número de tentativas foi : <quantos chutes o usuário deu>

OBS

  Vocês tem a liberdade para serem 100% criativos quanto às mensagens deste exercício, mas lembrem-se de cobrir todos os casos pedidos!

*/ 
//código 1



let tentativa = 0
let numJ1 = Math.floor((Math.random()*100)+1) 
let numeroJ = 0

//prompt("Lets play!")
for (tentativa=0;tentativa <100000;tentativa++){
  let numJ2 = Number(prompt("Diga o seu chute"))
  if (numJ2 ===numJ1){
    console.log("O número chutado foi: "+numJ2)

  if (localStorage.getItem('nJ')===null){
    numeroJ = 1
  } else {
   numeroJ = localStorage.getItem('nJ')
  }

    var record = tentativa
    if (record > localStorage.getItem('record')){
      record = localStorage.getItem('record')
    }
    var recordN = tentativa
    if (recordN < localStorage.getItem('recordN')){
      recordN = localStorage.getItem('recordN')
    }
    
    if (localStorage.getItem('record')===null){
     console.log("Acertou!\nO número de tentativas foi de "+tentativa+"\nEste jogo está sendo jogado pela primeira vez neste navegador.\nAinda não há records registrado, por favor, jogue uma outra vez (:") 
    }else{
    console.log("Acertou!\nO número de tentativas foi de "+tentativa+"\nEste jogo já foi jogado um número de "+numeroJ+" vezes.\nO record foi de "+record+" tentativas\nO pior jogador tentou "+recordN+" vezes")
    }
    tentativa =100000
    numeroJ++
    localStorage.setItem('nJ', numeroJ);
    localStorage.setItem('record', record);
    localStorage.setItem('recordN', recordN);
 

  } else if (numJ2>numJ1){
    alert("O número chutado foi: "+numJ2+"\nErrou. O número escolhido é menor")
  } else if (numJ2<numJ1){
    alert("O número chutado foi: "+numJ2+"\nErrou. O número escolhido é maior")
  } 
}




