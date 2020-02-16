"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const basePath = "./bd";
const pegarJSON = new Promise((resolve, reject) => {
    fs_1.readFile(`${basePath}/bdClientes.json`, (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data.toString());
    });
});
pegarJSON.then((json) => {
    let obj = JSON.parse(json);
    console.log(obj.bdClient.clients);
});
//# sourceMappingURL=banco.js.map