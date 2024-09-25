/*
var variable = 1;
let variable2 = 2;
const CONSTANTE = 3;

//tipos de datos
let cadena = "soy una cadena de texto";
let cadena2 = '';
console.log(cadena);
console.log(typeof cadena);

let numero = 10;
console.log(numero);
console.log(typeof numero);

let booleano = true; //false || true
console.log(booleano)
console.log(typeof booleano);

let nulo = null;
console.log(nulo)
console.log(typeof nulo);

let indefinido = undefined;
console.log(indefinido);
console.log(typeof indefinido)

let noEsUnNumero= NaN;
console.log(typeof noEsUnNumero);
console.log(noEsUnNumero)
*/

// Tipos de dato objeto

const lista = ["Jose", 24, true, ["carro", 5, 8]];
const lista2 = new Array ([1, 5, 18]);

const objeto = {nombre: "jose", edad: 24, estaAutenticado: true, elementos: ["carro", 5, 8] };

console.log(lista[3][1]);
console.log(objeto.elementos[2]);

//controles de flujo
//operadores

/*
variable = "5"; //asignación
let resultado = variable + 2;
console.log (resultado);

let resultado2 = variable - 2;
console.log (resultado2);

Math.PI;

let contador = 0;
contador ++; //incremento
contador --;

console.log(!variable==5.4);// igual a 
console.log(variable!=5); // diferente de

console.log(variable===5);
console.log(variable!==5);

console.log (3>5);

console.log(variable==5 && 3 > 5);
console.log(variable==5 || 3 > 5);

if (!variable ==5 ){
console.log("entró al if");
} else if (variable ==9 ){
    console.log("entró a la segunda operación");
} else {
    console.log("operación final"); 
}

const variable3 = variable ==6 ? console.log("entró al if") : console.log("no cumple con la condición");
*/

let variable = 1;
variable = "5";
variable = Math.PI;

switch (variable){
    case "5":
        console.log("El valor de la variable es 5");
        break; // o return

    case Math.PI:
        console.log("El valor de la variable es 3.1416");
        break;
    default:
        console.log("No pasó ninguna validación");
        break;

}