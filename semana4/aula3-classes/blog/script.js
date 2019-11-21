var arrayPost = []
const valorTitulo = document.getElementById("titulo").value
const valorAutor = document.getElementById("autor").value
const valorConteudo = document.getElementById("conteudo").value


class post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.auto = autor
        this.conteudo = conteudo
    }

}

function criarPost() {
    arrayPost.push(new post(valorTitulo, valorAutor, valorConteudo))
    valorTitulo = ""
    valorAutor = ""
    valorConteudo = ""
}