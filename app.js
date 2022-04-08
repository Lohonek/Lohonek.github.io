function dodawanie() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);

  if (
    document.getElementById("n1").value.length == 0 ||
    document.getElementById("n2").value.length == 0
  ) {
    document.getElementById("wynik").innerHTML = 'Proszę uzupełnić dwie liczby'
  } else {
    var n3 = (n1 + n2)
    document.getElementById("wynik").innerHTML = 'Wynik dzialania wynosi: ' + n3;
  }
}

function odejmowanie() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  if (
    document.getElementById("n1").value.length == 0 ||
    document.getElementById("n2").value.length == 0
  ) {
    document.getElementById("wynik").innerHTML = 'Proszę uzupełnić dwie liczby'
  } else {
    var n3 = (n1 - n2)
    document.getElementById("wynik").innerHTML = 'Wynik dzialania wynosi: ' + n3;
  }
}

function mnozenie() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  if (
    document.getElementById("n1").value.length == 0 ||
    document.getElementById("n2").value.length == 0
  ) {
    document.getElementById("wynik").innerHTML = 'Proszę uzupełnić dwie liczby'
  } else {
    var n3 = (n1 * n2)
    document.getElementById("wynik").innerHTML = 'Wynik dzialania wynosi: ' + n3;
  }
}

function dzielenie() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);
  if (
    document.getElementById("n1").value.length == 0 ||
    document.getElementById("n2").value.length == 0
  ) {
    document.getElementById("wynik").innerHTML = 'Proszę uzupełnić dwie liczby'
  }
  else if(document.getElementById("n2").value == 0){ 
    document.getElementById("wynik").innerHTML = 'Nie wolno dzielić przez zero'
  } 
  else {
    var n3 = (n1 / n2)
    document.getElementById("wynik").innerHTML = 'Wynik dzialania wynosi: ' + n3;
  }
}
