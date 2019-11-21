class post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }

}
var arrayPost = []

function criarPost() {

    var valorTitulo = document.getElementById("titulo").value
    var valorAutor = document.getElementById("autor").value
    var valorConteudo = document.getElementById("conteudo").value
    console.log(valorTitulo)
    console.log(valorAutor)
    console.log(valorConteudo)
    arrayPost.push(new post(valorTitulo, valorAutor, valorConteudo))
    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("conteudo").value = ""
    console.log(arrayPost)
}

function addPost() {
    var localPost = document.getElementById("post")
    for (var postagem of arrayPost) {
        localPost.innerHTML += '<p>Titulo: ' + postagem.titulo + ' </p>'
        localPost.innerHTML += '<p>Autor: ' + postagem.autor + ' </p>'
        localPost.innerHTML += '<p>Conteúdo: ' + postagem.conteudo + ' </p>'
    }
}