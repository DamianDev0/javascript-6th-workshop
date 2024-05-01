console.log("Mensaje 1: Inmediatamente");

setTimeout(() => {
  console.log("Mensaje 2: Con timeout de 0 segundos");
}, 0);

setTimeout(() => {
  console.log("Mensaje 3: Con timeout de 1 segundo");
}, 1000);

//  ¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos ? - ¿Que nos dicen este comportamiento
//   sobre el event loop, las macro y micro tareas, y la forma en que JavaScript maneja las operaciones asíncronas ?

//Por que el mensaje 2 esta en un setTimeout, que es una macro tarea,
//a pesar de tener un retraso de 0 segundos, le da la prioridad al mensaje 1, que es una microtarea
