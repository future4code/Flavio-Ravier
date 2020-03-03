
type car = {
    modelo: string,
    capacComb:number,
    motorFlex: boolean,
};

const carroLegal: car ={
    modelo: "Up",
    capacComb: 100,
    motorFlex: true,
};

const carroVelho: car ={
    modelo: "Santana",
    capacComb: 20,
    motorFlex: false,
};

const estacionamento: car[] = [carroLegal,carroVelho]
