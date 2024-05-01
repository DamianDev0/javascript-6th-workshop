// alert(`Intenta de predecir lo que va a hacer el siguiente codigo\n\n
// //vars call
// console.log("Valor de a:", a);
// console.log("Valor de b:", b);
// console.log("Valor de c:", c);

// // functions call
// console.log("Resultado de funcionDeclarada:", funcionDeclarada());
// console.log("Resultado de funcionExpresada:", funcionExpresada());

// // vars declaration
// var a = 1;
// let b = 2;
// const c = 3;

// // functions declarations
// function funcionDeclarada() {
//   return "Función declarada ha sido llamada.";
// }

// const funcionExpresada = function () {
//   return "Función expresada ha sido llamada.";
// };

// `);

let questionA = prompt(
  "Que crees que va a salir en `console.log(Valor de a:, a); 1:Undefiend, 2:Error`"
);
let questionB = prompt(
  "Que crees que va a salir en `console.log(Valor de b:, b);`"
);
let questionC = prompt(
  "Que crees que va a salir en `console.log(Valor de c:, c);`"
);

let questionD = prompt(
  "Que crees que va a salir en `console.log(Resultado de funcionDeclarada:, funcionDeclarada());`"
);
let questionE = prompt(
  "Que crees que va a salir en `console.log(Resultado de funcionExpresada:, funcionExpresada());`"
);

console.log(`Tus respuestas\n\n 1:${questionA}, 2:${questionB},3: ${questionC}, 4:${questionD}, 5:${questionE}`)

alert("Ahora veamos las respuestas, Oprime F12 para abrir la terminal")

console.log("Las variables creadas con `Var` tienen como resultado Undefiend al y igual que la funcion declarada debido a que son declaradas antes de definirlas")







//vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};
