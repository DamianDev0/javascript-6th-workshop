// Ruta del archivo data.json
const url = "./seccion5/data.json"; // Cambiar por la ruta correcta
let rooms = [];
const reservas = [];
const roomTypesNew = [];

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
          roomTypesNew.push(...data.roomTypes);
          resolve({ rooms, roomTypesNew });
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    }, 3000);
  });
}

// Función para crear una reserva
function crearReserva(rooms, roomTypesNew, reservas) {
  //muestro al usuario la habitacion
  const userInput = parseInt(prompt(
    "Ingrese el número de habitación a reservar: " +
    rooms
    .map((room) => {
      const roomType = roomTypesNew.find(
        (search) => search.id === room.roomTypeId
      );
      return `\nRoom Number: ${room.number} - Capacity: ${roomType.capacity}`;
    })
    .join(", ")
  ));

  const repeatRoom = reservas.find((reser) => reser.number === userInput);
  if (repeatRoom) {
    alert("La habitación ya se encuentra reservada");
    return crearReserva(rooms, roomTypesNew, reservas);
  }

  const selectedRoom = rooms.find(
    (room) => room.number === userInput
  );
  if (!selectedRoom) {
    alert("Número de habitación no válido.");
    return;
  }

  const numberHuesped = parseInt(prompt("Ingrese el número de huéspedes"));
  const roomType = roomTypesNew.find(
    (roomType) => roomType.id === selectedRoom.roomTypeId
  );

  if (numberHuesped > roomType.capacity) {
    alert(
      "No se pueden reservar más huéspedes de los que permite la habitación"
    );
    const move = confirm("¿Desea volver a hacer la reserva?");
    if (move) {
      return crearReserva(rooms, roomTypesNew, reservas);
    } else {
      return;
    }
  }

  const id = generarId();
  const fechaInicio = prompt(
    "Ingrese la fecha de inicio en formato (YYYY-MM-DD): "
  );
  const fechaFin = prompt(
    "Ingrese la fecha de fin en formato (YYYY-MM-DD): "
  );
  const huesped = prompt("Ingrese el nombre del huésped: ");

  const reserva = {
    id,
    number: selectedRoom.number,
    fechaInicio,
    fechaFin,
    huesped,
    numberHuesped,
  };
  reservas.push(reserva);
  alert("Reserva creada:\n" + JSON.stringify(reserva));

  return reserva;
}

// Función para mostrar las reservas
function showReservas(reservas) {
  alert("Los nombres de las personas que han hecho reservas\n" +
    reservas.map((reserva) => reserva.huesped).join("\n"));

  const nameHuesped = prompt(
    "Ingrese el nombre completo para buscar la reserva:"
  ).toLowerCase();

  const foundReservas = reservas.filter((reserva) => reserva.huesped.toLowerCase() === nameHuesped);
  if (foundReservas.length > 0) {
    alert("Reservas encontradas:\n" + JSON.stringify(foundReservas));
  } else {
    alert("No se encontraron reservas para el huésped: " + nameHuesped);
  }
}

// Función para cancelar una reserva
function cancelarReserva(reservas) {
  alert(JSON.stringify(reservas));

  const idReserva = parseInt(prompt("Ingrese el ID de la reserva que desea cancelar:"));

  const index = reservas.findIndex((reserva) => reserva.id === idReserva);
  if (index !== -1) {
    reservas.splice(index, 1);
    alert("Reserva cancelada exitosamente.");
  } else {
    alert("No se encontró ninguna reserva con ese ID.");
  }
}

// Función para editar una reserva
function editarReserva(reservas) {
  alert(JSON.stringify(reservas));

  const idUpdate = parseInt(prompt("Ingrese el ID de la reserva que desea actualizar"));
  const reserva = reservas.find((reser) => reser.id === idUpdate);

  if (reserva) {
    const option = prompt(
      "Ingrese qué desea cambiar de la reserva, 'fechainicio' o 'fechafin'"
    ).toLowerCase();

    if (option === "fechainicio") {
      const newFechaInicio = prompt(
        "Ingrese la nueva fecha de inicio (YYYY-MM-DD)"
      );
      reserva.fechaInicio = newFechaInicio;
    } else if (option === "fechafin") {
      const newFechaFin = prompt("Ingrese la nueva fecha de fin (YYYY-MM-DD)");
      reserva.fechaFin = newFechaFin;
    } else {
      alert("Opción inválida. Por favor, ingrese 'fechainicio' o 'fechafin'");
      return;
    }
    alert("La reserva ha sido actualizada:\n" + JSON.stringify(reserva));
  } else {
    alert(
      "No se encontró una reserva con ese ID. Verifique si lo está escribiendo correctamente."
    );
  }
}

// Función para generar un ID único para las reservas
function generarId() {
  let id = 1;
  return function () {
    return id++;
  };
}

// Inicialización del generador de IDs
const generarIdReserva = generarId();

// Carga inicial de datos
cargarYMostrarData()
  .then(({ rooms, roomTypesNew }) => {
    alert("Bienvenido al hotel Ya no aguanto mas");
    let init = true;
    while (init) {
      const optionUser = prompt(`
            1: para agregar reserva
            2: ver reservas y buscar,
            3: editar reservas
            4: cancelar reserva`);
      switch (optionUser) {
        case "1":
          crearReserva(rooms, roomTypesNew, reservas);
          break;
        case "2":
          showReservas(reservas);
          break;
        case "3":
          editarReserva(reservas);
          break;
        case "4":
          cancelarReserva(reservas);
          break;
        default:
          alert("Opción inválida. Por favor, ingrese '1', '2', '3' o '4'");
          break;
      }
      init = confirm("¿Desea realizar otra operación?");
    }
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });
