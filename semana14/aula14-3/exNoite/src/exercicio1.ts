type arrNumeros = {
    qtdNumeros: (numeros:number[]) => number,
    qtdImpar: (numeros:number[]) => number,
    somaNumeros: (numeros: number[]) => number
}

const arr: arrNumeros = {
    qtdNumeros:(numeros:number[]) =>{
        return numeros.length
    },
    qtdImpar: (numeros:number[]) =>{
        let impares: number[] = []
        numeros.forEach(element => {
            if (element%2 === 1) {
                impares.push(element)
            }
        });
        return impares.length
    },
    somaNumeros: (numeros:number[]) =>{
        let soma: number = 0
        numeros.forEach(element => {
            soma = soma +element
        });
        return soma
    }
}

const arrayNumero: number[] = [1,2,3,5,6,2,123];

try{
    console.log("Lenght: ",arr.qtdNumeros(arrayNumero),"\nLenght Impar: ",arr.qtdImpar(arrayNumero),"\nSoma: ",arr.somaNumeros(arrayNumero))
}catch(e){
	console.error(e);
}




