import { readFile } from 'fs'

const id: string = process.argv[2]
const basePath = "./bd/bdClients.txt"

const getJSON: Promise<any> = new Promise((resolve, reject) => {
    readFile(basePath, (err: Error, data: Buffer) => {
        if (err) {
            reject(err)
            return;
        }
        resolve(JSON.parse(data.toString()))
    })
})

getJSON.then((json) => {

    var notFind = true
    let balance = 0
    json.forEach((element: any) => {
        if (id === element.id) {
            notFind = false
            balance = element.saldo
        }
    });
    if (notFind) {
        console.log("Não há cpf registrado em nosso banco")
    } else {
        console.log("R$ ",balance)
    }

}).catch((e) => {
    console.error(e)
})

