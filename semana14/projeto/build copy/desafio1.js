"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const basePath = "./textos";
const pegaNomeDosArquivos = new Promise((resolve, reject) => {
    fs_1.readdir(basePath, (err, files) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(files);
    });
});
pegaNomeDosArquivos.then((filesNames) => {
    const todasAsPromessas = [];
    filesNames.forEach((fileName) => {
        const pegarTextoDosArquivos = new Promise((resolve, reject) => {
            fs_1.readFile(`${basePath}/${fileName}`, (err, text) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(text.toString());
            });
        });
        todasAsPromessas.push(pegarTextoDosArquivos);
    });
    Promise.all(todasAsPromessas).then((dentroDosArquivos) => {
        console.log(dentroDosArquivos.join(""));
    });
});
//# sourceMappingURL=desafio1.js.map