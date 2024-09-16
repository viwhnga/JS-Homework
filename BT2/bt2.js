var id = 0;
var sum = 0;
function addProduct() {
  id++;
  var pname = document.getElementById("productName").value;
  var qty = document.getElementById("productQuantity").value;
  var price = document.getElementById("productPrice").value;
  var sub = qty * price;
  var row = "<tr>";
  row += "<td>" + id + "</td>";
  row += "<td>" + pname + "</td>";
  row += "<td>" + qty + "</td>";
  row += "<td>" + price + "</td>";
  row += "<td>" + sub + "</td>";
  row += "</tr>";
  sum += sub;
  document.getElementById("tbd").innerHTML += row;
  document.getElementById("sumTotal").innerHTML = sum;
}
