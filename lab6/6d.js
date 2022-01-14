function addRow() {
  var numberOfColums = document.getElementById("table").rows[0].cells.length;
  var table = document.getElementById("table");
      var i, row = table.insertRow(0);
      for(i = 0; i<numberOfColums; i++)
      {
      var cell = row.insertCell(i);
      cell.innerHTML = "Cell " + (i+1);
    }
}
