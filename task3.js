document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {

    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

  if (fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    } else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }


