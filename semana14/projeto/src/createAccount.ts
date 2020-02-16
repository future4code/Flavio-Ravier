import { readdir, readFile, writeFile } from 'fs'


const operacao = process.argv[2]

const basePath = "./bd/bdClients.json"

var accountData : any = {
    bdClient: []
}
 
accountData.bdClient.push({
    "id": "10664816670",
    "name":"Flavio Ravier",
    "age": 29,
    "saldo": 0,
    "transactions":{
        "156032021":{ 
            "date":"16/02/2020",
            "value":50,
            "description":"deposito de 50 reais"
            },
        "12065151":{
            "date":"14/02/2020",
            "value":-20,
            "description":"compra de comida"
            }
        }
    })

    var json = JSON.stringify(accountData)

    writeFile(basePath,json,function err(params:any) {
        
    });
