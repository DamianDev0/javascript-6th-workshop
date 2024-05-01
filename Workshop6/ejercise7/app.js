let optionUser =
  prompt(`Ingresa en qué orden se ejecutará cada línea de código, ingresa los números separados por comas\n
 1)console.log("Inicio del script");

setTimeout(() => {
  2)console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  3)console.log("Segundo setTimeout");
}, 0);

4)Promise.resolve("Promesa resuelta").then(console.log);

5)console.log("Fin del script");`);

let optionUserSplit = optionUser.split(",");
let rightAnswers = ["1", "5", "4", "2", "3"];

if (optionUserSplit.toString() === rightAnswers.toString()) {
  console.log("¡Has adivinado todas, maquinola!");
} else {
  console.log("no has acertado")
  console.log("El orden correcto es: " + rightAnswers.join(", "));
  console.log(
    "El event loop le da priorida a los console log que no estan dentro de nada, debido a que son micro tareas"
  );
  console.log(
    "Las promesas van primero que los setTimeout por que son microtareas"
  );
  console.log(
    "Los setTimeout se ejcutan por ultimo debido a que son macro tareas"
  );
}
