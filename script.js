function tabuada() {
  var num = document.getElementById("numero");
  var tab = document.getElementById("selec");
  if (num.value.length == 0) {
    alert("Digite um número!");
  } else {
    var n1 = Number(numero.value);
    tab.innerHTML = "";
    for (var c = 1; c <= 100; c++) {
      var item = document.createElement("option");
      item.text = `${n1}  x  ${c}  = ${n1 * c}`;
      tab.appendChild(item);
   
    }
  }

  
  
}




