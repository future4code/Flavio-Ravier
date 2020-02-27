import { readFile, writeFile } from 'fs'

const id: string = process.argv[2]
const credit: string = process.argv[3]
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
    json.map((element: any) => {
        if (id === element.id) {
            element.saldo = (parseFloat(element.saldo) + parseFloat(credit)).toFixed(2)
            element.transactions.push({
                date: new Date(),
                value: credit,
                description: `crédito adicionado de: "${parseFloat(credit).toFixed(2).toString()}`
            })
        }
    });
    const writeJSON = new Promise((resolve, reject) => {
        writeFile(basePath, JSON.stringify(json), 'utf-8', (err: Error) => {
            if (err) {
                reject("Erro no registro")
                return
            }
            resolve("Credito adicionado com sucesso")
        })
    })
    writeJSON.then((result) => {
        console.log(result)
    })
}).catch((e) => {
    console.error(e)
})

