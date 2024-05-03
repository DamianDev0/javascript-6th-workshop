// function crearSumador(num) {
//   return function (otherNum) {
//     return num + otherNum;
//   };
// }

// let sumarCinco = crearSumador(5);
// console.log(sumarCinco(3));

// experimentacion
function crearSumador(num, num2, num3, num4) {
  return function (otherNum) {
    return num + num2 + num3 + num4 + otherNum;
  };
}

let sumOtherNumbers = crearSumador(5, 4, 6, 7);
console.log("La suma de todos los numeros es " + sumOtherNumbers(20));

//experimentacion con otras operaciones

function operation(num, num2, num3, num4) {
  let suma = function (otherNum) {
    return num + num2 + num3 + num4 + otherNum;
  };
  let div = function (otherNum) {
    return num + num2 + num3 + num4 / otherNum;
  };
  let mult = function (otherNum) {
    return num + num2 + num3 + num4 * otherNum;
  };
  return {suma, div,mult}
}

let result = operation(2, 3, 4, 5);

console.log("el resultado de la suma es " + result.suma(3));

console.log("el resultado de la division es " + result.div(2));

console.log("el resultado de la multiplicacion es " + result.mult(2));


