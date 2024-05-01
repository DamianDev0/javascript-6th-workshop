
function manejarAsincronia(callback, promise) {
  const myPromise = new promise((resolve, reject) => {
    setTimeout(() => {
      resolve(callback)
    }, 2000);
  })

  myPromise
    .then((callback) => {
      callback()
    })
    .catch((err) => {
      console.error(err);
    });
}

let saludar = function () {
  return console.log("¡Promesa cumplida y callback ejecutado!");
};

manejarAsincronia(saludar, Promise);
