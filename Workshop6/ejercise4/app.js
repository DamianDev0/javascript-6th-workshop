console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Error:", error.message);
  }
  
  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }
  
  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
  
  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());
  
  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());


//¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
//La funcion declarada puede ser utilizada sin antes ser definida, pero cuando se trato de llamar a la funcion expresada salio un error
// de que no puede ser llamada sin antes haber sido inicializada


// ¿Cómo difieren los resultados entre la función declarada y la función expresada?
//Una funcion declarada puede ser llama en cualquier parte del scope sin ser definida antes definida, mientras
//la declarada si o si necsita ser defina antes para utilizarse


// ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
// las expresadas No pueden ser invocadas antes de su definición debido a que no son "hoisted" como si lo son las funciones declaradas.