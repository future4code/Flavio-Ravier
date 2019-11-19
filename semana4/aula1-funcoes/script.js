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

function ClearClick() {
    const localApagar = document.getElementsByClassName("interno-planner")
    for (valor of localApagar) {
        valor.innerHTML = ""
    }
}

function RiscarClick(clicked_id) {
    const localRiscar = document.getElementById(clicked_id)

    localRiscar.innerHTML += '< ul style="text-decoration: line-through;" class = "content" > teste< /ul>'

}