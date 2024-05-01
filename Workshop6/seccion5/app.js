// // Ruta del archivo data.json
// const url = "./seccion5/data.json"; // Cambiar por la ruta correcta
// const roomsbro = []
// const reservas =[]
// // Función para cargar y mostrar el contenido de data.json
// function cargarYMostrarData() {
//   // Retorna una nueva promesa que se resuelve después del setTimeout
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Realiza la solicitud fetch dentro del setTimeout
//       fetch(url)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Error al cargar los datos.");
//           }
//           return response.json();
//         })
//         .then((data) => {
//           console.log("Habitaciones:", data.rooms);
//           roomsbro.push(data.rooms)

//           console.log("Tipos de Habitaciones:", data.roomTypes);
//           resolve(data); // Resuelve la promesa con los datos cargados
//         })
//         .catch((error) => {
//           console.error(error);
//           reject(error); // Rechaza la promesa si hay un error
//         });
//     }, 3000);
//   });
// }

// // Llamar a la función para cargar y mostrar el contenido de data.json
// cargarYMostrarData(rooms)
//   .then(({ rooms, roomTypes }) => {
//     // Mostrar el contenido de las habitaciones después de cargar los datos
//     const userInput = prompt(
//       "Ingrese el numero de habitacion a reservar: " +
//         rooms
//           .map((room) => {
//             return `\nRoom Number: ${room.number} (${
//               roomTypes.find((type) => type.id === room.type).name
//             })`;
//           })
//           .join(", ")
//     );
//     // ... Continuar con la lógica de la app
//   })
//   .catch((error) => {
//     console.error("Error al manejar la promesa:", error);
//   });



// function crearReserva() {
//     const id = generarId();
//     let numeroHabitacion = prompt("ingrese el numero de habitacion ")
//     let fechaInicio = prompt("ingrese la fecha de inicio ")
//     let fechaFin = prompt("ingrese la fecha de fin ")
//     let huesped = prompt("ingrese el numero de huspedes")
//     const reserva = {
//       id,
//       numeroHabitacion: numeroHabitacion,
//       fechaInicio: fechaInicio,
//       fechaFin: fechaFin,
//       huesped: huesped,
//     };
//     reservas.push(reserva);


//   }

//   function generarGeneradorId() {
//     let id = 1; // Variable id se inicializa fuera de la función interna

//     return function () {
//       return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve
//     };
//   }

//   const generarId = generarGeneradorId(); // Se obtiene la función interna generarId()


// crearReserva()
// console.log(reservas)
//   // Pruebas


// Ruta del archivo data.json
const url = "./seccion5/data.json"; // Cambiar por la ruta correcta
const rooms = [];
const reservas = [];

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          rooms.push(...data.rooms);

          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    }, 3000);
  });
}

// Función para mostrar las habitaciones disponibles y permitir al usuario seleccionar una
// Función para mostrar las habitaciones disponibles y permitir al usuario seleccionar una
