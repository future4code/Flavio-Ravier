import { readdir, readFile, writeFile } from 'fs'

const basePath = "./bd/bdClients.json"

const pegarJSON : Promise<any> = new Promise((resolve,reject) => {
    readFile(basePath,(err:Error, data: Buffer) => {
        if (err) {
            reject(err)
            return;
        }
        resolve(data.toString())
    })
})


pegarJSON.then((json:any) =>{
    let obj: any = JSON.parse(json)
    console.log(obj.bdClient.clients)
})