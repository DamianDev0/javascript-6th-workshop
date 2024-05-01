let init = true;
let _contador = 0;

alert("Binvenido al progrma contador");
while (init) {
  function cont() {
    function incrementar() {
      return _contador++;
    }
    function show() {
      return _contador;
    }
    return { incrementar, show };
  }

  let userOPtion = prompt(
    `Ingrese la opcion que desea hacer\n1:incremntar contador\n2:mostrar contador`
  );
  switch (userOPtion) {
    case "1":
      alert(cont().incrementar());
      break;
    case "2":
      alert(cont().show());
      break;
    default:
      alert("opcion no valida");
      break;
  }
  let ask = confirm("Deseas continuar?");
  if (ask) {
    init = true;
  } else {
    init = false;
  }
}
