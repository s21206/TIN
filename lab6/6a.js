function convertToFahrenheit() {
  var c = document.getElementById("value").value;
  if(c.length == 0 || isNaN(c))
  {
    document.getElementById("p").innerHTML = "Error";
  }else
  {
    var f = c*1.8 + 32;
    document.getElementById("p").innerHTML = "Fahrenheit: " + f;
  }
}
