function calcular() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let result = document.getElementById("res");

    if (n1 > 0 && n2 > 0) {
        let op = n1 * n2;
    mensaje("Operacion Exitosa","","success");
      result.innerHTML = 'El resultado de la operacion es: '+ op;
    } else {
        mensaje("Precaucion!","Los numeros deben ser mayores a 0", "warning");
    }
}

function limpiar(){
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  let result = document.getElementById("res");
  result.innerHTML = "";
}

function mensaje(titulo, text, icono){
    Swal.fire({
        title: titulo,
        text: text,
        icon: icono
      });
}
