"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const nomeDoArquivo = "meuTexto.txt";
const minhaPromessa = new Promise((resolve, reject) => {
    fs_1.readFile(nomeDoArquivo, (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        console.log(data);
        resolve(data.toString());
    });
});
try {
    minhaPromessa.then((result) => {
        console.log(result);
    });
}
catch (e) {
    console.error(e);
}
//# sourceMappingURL=exercicio2.js.map