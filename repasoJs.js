
// Crear una funcion para Computadora
//Ejercicio 1
function Computadora(ram,cpu,disco,monitor,gpu) {

    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;


    this.mostrarDetalles = () => `Componentes: 
    RAM: ${this.ram}
    CPU: ${this.cpu}
    DISCO: ${this.disco}
    MONITOR: ${this.monitor}
    TIENE GPU: ${this.gpu ? "Si" : "No" }
    `

}

//Ejercicio 2
const computadora1 = new Computadora("16GB", "3.5GHz", "solido", "16 pulgadas", false)
const computadora2 = new Computadora("32GB", "4.0GHz", "solido", "16 pulgadas", false)
const computadora3 = new Computadora("64GB", "2.5GHz", "solido", "16 pulgadas", true)
const computadora4 = new Computadora("8GB", "4.0GHz", "solido", "16 pulgadas", true)
const computadora5 = new Computadora("4GB", "3.5GHz", "solido", "16 pulgadas", false)


let computadoras = [computadora1,computadora2,computadora3,computadora4,computadora5];

console.log(`En stock hay ${computadoras.length} computadoras`);

 computadoras.forEach(function (computadora) {
     console.log(computadora.mostrarDetalles());
 })

console.log(computadora1.mostrarDetalles());

//Ejercicio 3
 let computadorasGpu = computadoras.filter(computadora => computadora.gpu)

 console.log(computadorasGpu);

 //Ejercicio 4

 function LitrosDeNafta(cantKmRecorridos) {
     return (cantKmRecorridos * 2)/100

 }

 function cantidadDePesos(precio, kmRecorridos) {
    return (precio * LitrosDeNafta(kmRecorridos));

 }

 console.log("La cantidad de pesos que debe pagar es: $"+ cantidadDePesos(30, 100))

//Ejercicio 5

/* Crear un array que contenga números del 1 al 10.
Retornar un nuevo array que contenga todos los números multiplicados por dos*/

let numeros = []
    for (let i = 0; i< 100; i++) {
        numeros.push(i + 1);
    }



let numerosMultiplicados = numeros.map(function(numero) {
    return numero * 2

})

let numerosMayores = numerosMultiplicados.filter(numero => numero > 5)
console.log(numerosMayores)

let primerNumeroMayor = numerosMayores.find(numero => numero > 10)
console.log(primerNumeroMayor)



//Ejercicio 8

let pokemones = [

    { nombre: 'pikachu', poder: 12 },
     { nombre: 'bulbasaur', poder: 6 },
     { nombre: 'charizard', poder: 19 },
     { nombre: 'squirtle', poder: 3 },
     { nombre: 'metwo', poder: 6 },

]

let pokemonPoder = pokemones.filter(pokemon => pokemon.poder < 10)
    console.log(pokemonPoder)
