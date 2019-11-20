/*exercicio1. Sem rodar o trecho de código a seguir, analise-o e descreva o que ele faz, como faz e qual será a mensagem impressa no console . 

O código é uma calculadora de investimentos.
Ela vai retornar dois valores no console, um de 150 investido em ações e uma de 200 investidos em Tesouro direto.

O código possui uma função para retornar esses valores, essa função recebe dois parâmetros:
o tipo de investimento
o valor investido

Dentro da função, existe um switch que voltara um código diferente para cada tipo de tipo de investimento inserido.


*/

/* exercicio2
Arrays e objetos são estruturas que existem, não só no js, para manipularmos nossas informações. Guardar valores. Acessar e escrever novos.
Arrays e objetos são extremamente uteis para execução de qualquer algoritimo, eles permitem que acessemos diferentes informações dando apenas a informação de key, ou de index.  


*/
/* exercicio3 */
function criarRetangulo(lado1, lado2) {
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado2 + lado1),
        area: lado1 * lado2,
    }
}

/*  exercicio4 */

var pessoa = {
    nome: "",
    idade: "",
    email: "",
    endereco: "",

}

function anonimizarPessoa() {
    var pessoaAnonima = {
        nome = "Anonimo",
        idade = pessoa.idade,
        email = pessoa.email,
        endereco = pessoa.endereco,
    }
}
/*  exercicio5 */
function filmeAparecer() {
    var filme = {
        nome: "nome",
        ano: "1200",
        diretor: "diretor",
        elenco: ["acb", "acb2", "acv3", "acv4"]

    }
    const localHTML = document.getElementById("texto")
    localHTML.innerHTML = '<p>Venha assistir ao filme ' + filme.nome + ', de ' + filme.ano + ', dirigido por ' + filme.diretor + ' e estrelado por ' + filme.elenco + '</p>'
}