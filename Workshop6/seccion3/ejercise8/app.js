
function contador() {
  let _cont = 0
  
  function incremntar() {
    return _cont++
  }

  function show() {
    return _cont
  }

  return{incremntar,show}
}

alert("Bienvenido al contador")

let init = true

contador.show()
