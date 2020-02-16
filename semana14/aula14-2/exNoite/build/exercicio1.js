const arr = {
    qtdNumeros: (numeros) => {
        return numeros.length;
    },
    qtdImpar: (numeros) => {
        let impares = [];
        numeros.forEach(element => {
            if (element % 2 === 1) {
                impares.push(element);
            }
        });
        return impares.length;
    },
    somaNumeros: (numeros) => {
        let soma = 0;
        numeros.forEach(element => {
            soma = soma + element;
        });
        return soma;
    }
};
const arrayNumero = [1, 2, 3, 5, 6, 2, 123];
try {
    console.log("Lenght: ", arr.qtdNumeros(arrayNumero), "\nLenght Impar: ", arr.qtdImpar(arrayNumero), "\nSoma: ", arr.somaNumeros(arrayNumero));
}
catch (e) {
    console.error(e);
}
//# sourceMappingURL=exercicio1.js.map