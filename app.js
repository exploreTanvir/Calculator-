function calculator(nValue) {
  document.getElementById("myResult").value += nValue;
}
function deleteMe() {
  document.getElementById("myResult").value = "";
}
function answer() {
  var a = document.getElementById("myResult").value;
  var b = eval(a);
  document.getElementById("myResult").value = b;
}
