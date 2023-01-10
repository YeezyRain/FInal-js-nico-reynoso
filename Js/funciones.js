function limpiar() {
    document.getElementById('miFormulario').reset();
}

function sumar() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x+y;
}
function restar() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x-y;
}
function multiplicar() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x*y;
}
function dividir() {
    var x = parseInt(document.getElementById('valor1').value);
    var y = parseInt(document.getElementById('valor2').value);
    document.getElementById('el-resultado').innerHTML = x/y;
}

let nombre = "bebida"
let cantidad = 2
let precioProducto

if (nombre == "bebida") {
    precioProducto = 1
} else if (nombre == "cerveza") {
    precioProducto = 2.2
} else if (nombre == "Papas Fritas") {
    precioProducto = 5
}

let precioTotal = cantidad * precioProducto

console.log("tiene que pagar " + precioTotal + " dolares")

let i;

for(i=1;i<=10;i=i+1){
    console.log(i);
}

const reynoso = [" Nico"," toto", " leo"," Franco"," julieta"]
const numero = [1,2,3,4,5,6]
let total = 0;

function contarBucle(a) {
    return console.log("hola" + a);
}

function acumular(num) {
    total += num; 
}

porCadaUno(reynoso, contarBucle);
porCadaUno(numero, acumular);
console.log(total);


function porCadaUno(arr, fn) {
    for (const i of arr) {
        fn(i);
    }
}


numero. forEach( (num)=> {
    console.log(num)
});

const producto = [
    {nombre: 'Grafica', precio: 200000},
    {nombre: 'Ssd', precio: 10000},
]
const resultado2 = producto.find( (el) => el.nombre === "Grafica" );
const resultado3 = producto.find( (el) => el.nombre === "Ssd" );
const resultado4 = producto.find( (el) => el.precio < 12000 );

console.log (resultado2);
console.log (resultado3);
console.log (resultado4);


const productitos = [
    {nombre: 'Grafica', precio: 200000},
    {nombre: 'Ssd', precio: 10000},
    {nombre: 'Procesador', precio: 12000},
    {nombre: 'Gabinete', precio: 8000},
]

const resultado5 = productitos.filter( (el) => el.nombre.includes (' PC') );
const resultado6 = productitos.filter( (el) => el.precio < 20000);

console.log (resultado5);
console.log (resultado6);

const nombres = productitos.map ( (el) => el.nombre );

console.log (nombres);

const actualizado = productitos.map( (el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
}); 

console.log (actualizado);

const miCompra = [
    {nombre: 'Grafica', precio: 200000},
    {nombre: 'Ssd', precio: 10000},
    {nombre: 'Procesador', precio: 12000},
    {nombre: 'Gabinete', precio: 8000},
]
const total2 = miCompra.reduce( (acc, el) => acc + el.precio, 0 ); 

console.log (total2);

const nombres2 = prompt ('hola, ¿cual es tu nombre? ');

alert(' bienvenido ' + nombres2 );

const peso = prompt (' Indique su peso ');

alert(' Su peso es de ' + peso + ' Kg ' );

const pesoLunar =  ( peso / 9.81 ) * 1.6;

alert (' Tu Peso en la luna es de ' + pesoLunar + ' kg ');


const cars = `
[
    {
        "modelo": "ford mustang",
        "Produccion": 2010,
        "Km": 12000
    },

    {
        "modelo": "honda accord",
        "Produccion": 2021,
        "Km": 4500
    },

    {
        "modelo": "volkswagen Golf",
        "Produccion": 2016,
        "Km": 45000
    }
    
]
`;

console.log (typeof cars);

const jsonData = JSON.parse(cars);
console.log(typeof jsonData);

const carrosNuevos = jsonData.filter(
    (carro) => carro.produccion > 2010 && carro.km < 30000
);

const newCars = JSON.stringify(carrosNuevos);
console.log(typeof newCars);

const fs = require('fs');

const carrosNuevo = {
    modelo: 'mini cooper',
    produccion: 2022,
    km: 500
}

const newCar = JSON.stringify (carrosNuevo); 

fs.writeFile('cars,json', newCar, (error)=>{
    if(error) throw error;
    console.log('informacion recibida');  
})
