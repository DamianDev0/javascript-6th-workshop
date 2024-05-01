alert(`Mira el siguente codigo y despues te hare unas preguntas\n\n
// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();`)

let ask = confirm("listo paras las preguntas?")
if (ask) {
  alert("Empezemos")
} else {
  alert("Vuelvelo a leer")
}

let questionOne = prompt("Crees que es posible acceder a `globalVariable` en cualquier parte de el codigo? si/no")
let questionTwo = prompt("Crees que es posible acceder a `functionVariable` en cualquier parte de el codigo? si/no")
let questionThree = prompt("Crees que es posible acceder a `blockVariable` en cualquier parte de el codigo? si/no")

if(questionOne == "si"){
  alert("Estas en lo correcto, la variable Global nos permite acceder en cualquier parte de el codigo")
}else{
  alert("Incorrecto, la variable Global puede ser llamada en caualquier parte de el codigo ")
}

if(questionTwo == "si"){
  alert("Incorrecto, la variable local solo puede ser llamada dentro de una funcion, si se tratase de llamar de manera global, arrojaria un error")
}else{
  alert("Estas en lo correcto, la variable local solo se puede llamar dentro de una funcion")
}

if(questionThree == "si"){
  alert("Incorrecto, la variable de bloque solo puede ser utilizada en condicionales `if` o en bucles `while")
}else{
  alert("Estas en lo correcto, la variable de bloque solo se puede llamar dentro de condicionales `if` o en bucles `while")
}