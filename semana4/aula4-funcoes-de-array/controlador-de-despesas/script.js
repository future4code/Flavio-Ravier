let listaDespesa = []
let listaFiltradaDespesa = []
let listaDespesaFinal = []

class despesa {
    constructor(valor, tipo, descricao) {
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }

}

function cadastrarDespesa() {
    const localValor = document.getElementById("input-valor")
    const localTipoCadastro = document.getElementById("select-tipo-cadastro")
    const localDescricao = document.getElementById("input-descricao")

    const localLista = document.getElementById("lista-despesa")


    if (localValor.value == "" || localTipoCadastro.value == "" || localDescricao.value == "") {
        alert("Não deixe campos vazios")
    } else {



        listaDespesa.push(new despesa(localValor.value, localTipoCadastro.value, localDescricao.value))

        localValor.value = ""
        localTipoCadastro.value = ""
        localDescricao.value = ""

        localLista.innerHTML = ""
        listaDespesa.forEach((item, i, arr) => {
            return localLista.innerHTML += '<p> Descrição: ' + item.descricao + '</p><br><p> Tipo: ' + item.tipo + '</p><br><p> Valor: R$ ' + item.valor + '</p><hr><br>'


        })

        extrato()
    }
}

function filtrarDespesa() {
    const localValorMin = document.getElementById("input-valorMin")
    const localValorMax = document.getElementById("input-valorMax")
    const localTipoFiltro = document.getElementById("select-tipo-filtro")

    const localLista = document.getElementById("lista-despesa")


    if (localValorMin == "" || localValorMax == "" || localTipoFiltro == "") {
        alert("Não deixe campos vazios")
    } else {



        listaFiltradaDespesa = listaDespesa.filter((item) => {
            return item.tipo == localTipoFiltro.value
        })

        listaFiltradaDespesa = listaFiltradaDespesa.filter((item) => {

            return item.valor >= localValorMin.value
        })

        listaFiltradaDespesa = listaFiltradaDespesa.filter((item) => {

            return item.valor <= localValorMax.value
        })

        localLista.innerHTML = ""
        listaFiltradaDespesa.forEach((item, i, arr) => {
            return localLista.innerHTML += '<p> Descrição: ' + item.descricao + '</p><br><p> Tipo: ' + item.tipo + '</p><br><p> Valor: R$ ' + item.valor + '</p><hr><br>'


        })

        localValorMin.value = ""
        localValorMax.value = ""
        localTipoFiltro.value = ""

        extrato()
    }
}

function limparFiltro() {
    const localLista = document.getElementById("lista-despesa")
    listaDespesa.forEach((item, i, arr) => {
        return localLista.innerHTML += '<p> Descrição: ' + item.descricao + '</p><br><p> Tipo: ' + item.tipo + '</p><br><p> Valor: R$ ' + item.valor + '</p><hr><br>'

    })
    extrato()
}

function extrato() {
    const localExtrato = document.getElementById("extrato")
    let extrato = listaDespesa.reduce((total, dinheiro) => parseInt(total) + parseInt(dinheiro.valor), 0)
    localExtrato.innerHTML = "R$ " + extrato
}

function sort() {
    const localLista = document.getElementById("lista-despesa")
    console.log(listaDespesa)
    listaDespesa.sort(function(a, b) {
        return parseInt(a.valor) > parseInt(b.valor) ? -1 : parseInt(a.valor) < parseInt(b.valor) ? 1 : 0
    })
    console.log(listaDespesa)
    localLista.innerHTML = ""
    listaDespesa.forEach((item, i, arr) => {
        return localLista.innerHTML += '<p> Descrição: ' + item.descricao + '</p><br><p> Tipo: ' + item.tipo + '</p><br><p> Valor: R$ ' + item.valor + '</p><hr><br>'


    })
}