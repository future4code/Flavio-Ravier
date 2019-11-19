function CriarClick() {


    const local = document.getElementById("diaDaSemana").value + document.getElementById("tipoDeRefeicao").value
    const refeicao = document.getElementById("novaTask").value
    const divLocal = document.getElementById(local)

    if (refeicao == "") {
        alert("Insira um Valor não vazio!")
    }
    console.log("local: " + local)
    console.log("divLocal: " + divLocal.value)
    divLocal.innerHTML = '<ul class="content">' + refeicao + '</ul>'
    document.getElementById("novaTask").value = ""
}