

// calculator
const operacao = process.argv[2]

const add = Number(process.argv[3])+Number(process.argv[4]);
const sub = Number(process.argv[3])-Number(process.argv[4]);
const mult = Number(process.argv[3])*Number(process.argv[4]);
const div = Number(process.argv[3])/Number(process.argv[4])

try{
    switch (operacao) {
        case "add":
            return console.log("Resposta da ",operacao," é: ",add);
        case "sub":
            return console.log("Resposta da ",operacao," é: ",sub);
        case "mult":
            return console.log("Resposta da ",operacao," é: ",mult);
        case "div":
            return console.log("Resposta da ",operacao," é: ",div);
        default:
            break;
    }
}catch(e){
	console.error(e);
}
