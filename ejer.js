const booleano1 = true;
const booleano2 = false;

// // Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 AND booleano2
const booleanoAnd = booleano1 && booleano2;
console.log(booleanoAnd)
// // Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1  OR booleano2
const booleanoOr = booleano1 || booleano2;
console.log(booleanoOr)

// Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1
const booleanoNot = !booleano1
console.log(booleanoNot)
// // Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && booleano2))
console.log(booleanoMix0)
// // 2.Operadores
// // Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado
const valorDivision = 17 / 3
console.log(valorDivision.toFixed(2))
// // Crear variable valorResto cuyo valor sea el resto de 17 entre 7
const valorResto = 17 % 7
console.log(valorResto)
// // 3.Lógica de programación
// // Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?
const A = 9
const B = "9"
if (A == B) {
  console.log("Son iguales")
}
if (A === B) {
  console.log("Son iguales")
}
// No sale porque ahi estas pidiendo si es tambien si son los dos objetos o nnumeros
// Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”
const mochila = ["libros", "estuche", "libretas", "paraguas", "credencial"]
if (mochila.length > 10) {
  console.log("No puedo cargar tantas cosas");
} else if ((mochila.length >= 2) && (mochila.length <= 10)) {
  console.log("Que bien voy con mi mochila")
} else {
  console.log("Creo q no necesito una mochila")
}
// Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10
const contarHasta10 = 0
for (let i = 0; i <= 10; i++) {
  console.log(i)
}
console.log(contarHasta10)
// Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’
let diaFestivo = true
diaFestivo ? console.log('Hoy no trabajo') : console.log('Hoy trabajo');
// Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle
const arrayBucle = []
for (let i = 4; i <= 18; i++) {
  arrayBucle.push(i)
}

console.log(arrayBucle)
// Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado
let resultado = 0;

for (let i = 0; i < arrayBucle.length; i++) {
  resultado += arrayBucle[i];
}

console.log(resultado);

// Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos
const arrayejer = ["Con", "Sofia", "aprendiendo", "bucles"]
for (const strings of arrayejer) {
  console.log(strings)
}

for (const palabras in arrayejer) {
  console.log(arrayejer[palabras]);
}
// Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3
let i = 0;

while (i <= 20) {
  if (i % 3 === 0) {
    console.log("Patata");
  }
  i++;
}
// Utiliza la siguiente array para resolver los próximos ejercicios: 
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];
console.log(typeof gente)

//   Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.
let genteConCuatroLetras = [];

for (let i = 0; i < gente.length; i++) {
  if (gente[i].nombre.length === 4) {
    genteConCuatroLetras.push(gente[i]);
  }
}

console.log(genteConCuatroLetras);
//   Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.
let genteConJMenoresDe40 = [];

for (let i = 0; i < gente.length; i++) {
  if (gente[i].nombre[0] === "J" && gente[i].edad < 40) {
    genteConJMenoresDe40.push(gente[i]);
  }
}

console.log(genteConJMenoresDe40);
// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'
const ordenador = {
  marca: "La pava",
  tipo: "portátil",
  perifericos: ["", "touchPad"],
  almacenamiento: {
    discos: ['CD', 'HDD'],
    maestro: 0
  }

}
// TEST 1
if (typeof ordenador === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (ordenador.marca === "La pava") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (ordenador.tipo === "portátil") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}


// Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes'
// TEST 1
const arr = [{
  name: "pepito",
  age: 25
},
{
  name: "pepito",
  age: 10
},
{
  name: "Jarlos",
  age: 4
}]
if (typeof arr === "object" && arr.length >= 0) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 2
if (typeof arr[0] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 3
if (typeof arr[1] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 4
if (typeof arr[2] === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 5
if (arr.length === 3) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 6
if (arr[0].name === arr[1].name) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}


// TEST 6
if (arr[1].name === "pepito") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}


// TEST 7
if (arr[1].age > arr[2].age) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 8
if (arr[0].age === 25) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
// TEST 9
if (typeof arr[2].name === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}


// TEST 10
if (arr[2].name[0] === "J") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}

