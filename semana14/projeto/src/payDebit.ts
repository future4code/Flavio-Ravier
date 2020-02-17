import { readFile, writeFile } from 'fs'
import * as moment from "moment"

const id: string = process.argv[2]
const value: string = process.argv[3]
const description: string = process.argv[4]
const date = process.argv[5]
const dateTokens: string[] = process.argv[5].split("/")
var dateFormat1 = new Date(Number(dateTokens[2]), Number(dateTokens[1]) - 1, Number(dateTokens[0])).getTime()
const hoje = moment.now()
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
        if (id === element.id && value <= element.saldo && dateFormat1 > hoje) {
            element.saldo = (parseFloat(element.saldo) - parseFloat(value)).toFixed(2)
            element.transactions.push({
                date: date,
                value: -value,
                description: description
            })
        } 
    });
    const writeJSON = new Promise((resolve, reject) => {
        writeFile(basePath, JSON.stringify(json), 'utf-8', (err: Error) => {
            if (err) {
                reject("Erro no registro")
                return
            }
            resolve("Agendamento de pagamento feito com sucesso")
        })
    })
    writeJSON.then((result) => {
        console.log(result)
    })
}).catch((e) => {
    console.error(e)
})