function cadastrar() {
    const valorNome = document.getElementById("nome").value
    const valorIdade = document.getElementById("idade").value
    const valorEmail = document.getElementById("email").value
    const localHTML = document.getElementById("dados")
    if (valorNome == "" || valorIdade == "" || valorEmail == "") {
        alert("Não deixe nenhum campo em branco")
    } else {
        cadastro.email = valorEmail
        cadastro.idade = valorIdade
        cadastro.nome = valorNome
        document.getElementById("nome").value = ""
        document.getElementById("idade").value = ""
        document.getElementById("email").value = ""
        localHTML.innerHTML += '<div class="dado-aluno"><p>Nome: ' + valorNome + '</p><p>Idade: ' + valorIdade + '</p><p>Email: ' + valorEmail + '</p><button onclick="deletar()">Deletar</button></div>'
        alert("Aluno registrado com sucesso")
    }
}

function deletar() {

}

function clearAll() {
    const localHTML = document.getElementById("dados")
    localHTML.innerHTML = ""
}