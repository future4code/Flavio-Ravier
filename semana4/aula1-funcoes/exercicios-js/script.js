/* Exercicios Javascript 
E1.

Temos uma função cahamda conversorDeMoeda que recebe um valorEmDolar.
Essa função, quando chamada:
    abre um prompt que pede o valor da cotação do dolar
    retorna o valor de valorEmDolar  que foi posto como parâmetro no inicio multiplicado pela cotação

no console.lo vamos mostrar o valor de meuDinheiro, q é exatamente a função 'conversorDeMoeda(100), no caso, 100 é o valor em dolar que tenho que quero saber quanto da em R$.


E2.

for(var 1 =1;i<lista.lenght;i++){
    console.log(lista[i])
}
var i = 0
while (i<lista.lenght){
    console.log(lista[i])
    i++
}
for(var value of lista){
    console.log(value)
}

E3.

a - False
b - False
c - True
d - True
e - True


const alerta = function(){
    
    return alert("Hello Future4")
}
alerta()



*/

function SegundoMaiorMenor(arr) {
    let maior = arr[0]
    let menor = arr[0]

    for (let valorArr of arr) {
        if (valorArr > maior) {
            maior = valorArr
        }
        if (valorArr < menor) {
            menor = valorArr
        }
    }
    return console.log("Maior: " + maior + " Menor: " + menor)
}
SegundoMaiorMenor([100, 262, 2566, 18, -80, 698888, 411, 262])