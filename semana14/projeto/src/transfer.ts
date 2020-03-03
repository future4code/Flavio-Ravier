import { readFile, writeFile } from 'fs'

const idOwner: string = process.argv[2]
const idTransfer: string = process.argv[3]
const value: string = process.argv[4]
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
        if ((idOwner === element.id && value <= element.saldo) || idTransfer === element.id && idOwner !== idTransfer) {
            switch (element.id) {
                case idOwner:
                    element.saldo = (parseFloat(element.saldo) - parseFloat(value)).toFixed(2)
                    element.transactions.push({
                        date: new Date(),
                        value: -value,
                        description: `Transferencia para ${idTransfer}, no valor de ${value}`
                    })
                case idTransfer:
                    element.saldo = (parseFloat(element.saldo) + parseFloat(value)).toFixed(2)
                    element.transactions.push({
                        date: new Date(),
                        value: value,
                        description: `Transferencia RECEBIDA de ${idOwner}, no valor de ${value}`
                    })
                default:
            }
        }
    });
    const writeJSON = new Promise((resolve, reject) => {
        writeFile(basePath, JSON.stringify(json), 'utf-8', (err: Error) => {
            if (err) {
                reject("Erro no registro")
                return
            }
            resolve("Transferencia feita com sucesso")
        })
    })
    writeJSON.then((result) => {
        console.log(result)
    })
}).catch((e) => {
    console.error(e)
})

// com alguns bugs. tem hora que a mesma trasnferência so funciona pra um lado.