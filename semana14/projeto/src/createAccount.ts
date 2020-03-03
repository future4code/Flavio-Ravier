

const basePath = "./bd/bdClients.json"

import { readFile, writeFile } from 'fs'

const id: string = process.argv[2]
const name = process.argv[3]
const age: number = Number(process.argv[4])
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

    var repete: boolean = false
    var idadeLimite: boolean = false
    if (age < 18) {
        idadeLimite = true
    }

    json.forEach((element: any) => {  //não sei o q eu deveria por aqui diferente de 'any' pra funcionar, por favor, digam qual é (:-)
        if (id === element.id) {
            repete = true
        }
    });
    if (repete) {
        console.log("Este cpf já foi cadastrado")
    } else {
        if (idadeLimite) {
            console.log("Não possue idade mínima")
        } else {
            json.push({
                "id": id,
                "name": name,
                "age": age,
                "saldo": 0,
                "transactions": []
            })
            const writeJSON = new Promise((resolve, reject) => {
                writeFile(basePath, JSON.stringify(json), 'utf-8', (err: Error) => {
                    if (err) {
                        reject("Erro no registro")
                        return
                    }
                    resolve("Conta Cadastrada com Sucesso")
                })
            })
            writeJSON.then((result) => {
                console.log(result)
            })
        }
    }
}).catch((e) => {
    console.error(e)
})








