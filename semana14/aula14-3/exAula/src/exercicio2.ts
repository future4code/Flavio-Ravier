import { readFile } from 'fs'

const nomeDoArquivo = "meuTexto.txt";

const minhaPromessa = new Promise((resolve, reject) => {
    readFile(nomeDoArquivo, (err: Error, data: Buffer) => {
        if(err){
            reject (err)
            return
        }
        console.log(data)
        resolve(data.toString())
    })
   
})

try {
    minhaPromessa.then((result) => {
        console.log(result)
    })
} catch (e){
    console.error(e)
}

