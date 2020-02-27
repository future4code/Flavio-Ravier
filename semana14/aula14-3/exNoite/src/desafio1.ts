import { readdir, readFile, writeFile } from 'fs'

const basePath = "./textos"

const pegaNomeDosArquivos = new Promise((resolve,reject) => {
    readdir(basePath,(err: Error, files: string[]) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(files);
    })
})


pegaNomeDosArquivos.then((filesNames: string[]) => {
    const todasAsPromessas : Promise<string>[] = []
    filesNames.forEach((fileName) => {
        const pegarTextoDosArquivos : Promise<string> = new Promise((resolve,reject) => {
            readFile(`${basePath}/${fileName}`,(err:Error, text: Buffer) => {
                if (err) {
                    reject(err)
                    return;
                }
                resolve(text.toString())
            })
        })
        todasAsPromessas.push(pegarTextoDosArquivos)
    })
    Promise.all(todasAsPromessas).then((dentroDosArquivos) =>{
        console.log(dentroDosArquivos.join(""))
    })
})


