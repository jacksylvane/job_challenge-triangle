function processForm(e) {
  if (e.preventDefault) e.preventDefault();

  var field1 = document.getElementById("field1").value;
  var field2 = document.getElementById("field2").value;
  var field3 = document.getElementById("field3").value;

  if (field1 == '' || field2 == '' || field3 == '') {
    alert("Please fill all the fields.");
    return;
  }

  // Checks for a string
  if (/[a-z]/i.test(field1) || /[a-z]/i.test(field2) || /[a-z]/i.test(field3) ) {
    alert("Please input only numeric characters.");
    return;
  }


  field1 = parseFloat(field1);
  field2 = parseFloat(field2);
  field3 = parseFloat(field3);

  if (checkSidesInequality(field1, field2, field3) == false) {
    return;
  }

  var result = "";

  // Checks for Equilateral triangle = 3 equal sides
  if (field1 === field2 && field1 === field3) {
    result = "Equilateral Triangle";
  }

  // Checks for Isosceles triangle = 2 equal sides 
  else if (field1 === field2 || field1 === field3 || field2 === field3) {
    result = "Isosceles Triangle";
  }

  // If first two checks failed, only Scalene Triangle is left = each side different
  else {
    result = "Scalene Triangle";
  }

  var node = document.createElement("h2");
  var textnode = document.createTextNode(result);
  node.appendChild(textnode);
  var node2 = document.createElement("h3");
  var textnode2 = document.createTextNode("Entered sides: " + field1 + " x " + field2 + " x " + field3);
  node.appendChild(textnode);
  node2.appendChild(textnode2);
  var resultNode = document.getElementById("result");
  while (resultNode.firstChild) {
    resultNode.removeChild(resultNode.firstChild);
  }
  document.getElementById("result").appendChild(node);
  document.getElementById("result").appendChild(node2);
  document.getElementById("result").style.opacity = 1;
  document.getElementById("form").reset();
  // You must return false to prevent the default form behavior
  return false;
}

// Triangle Inequality Theorem - Checks if triangle can exist 
function checkSidesInequality(f1, f2, f3) {
  console.log('checking if triangle can exist');

  if (f1 + f2 > f3 && f2 + f3 > f1 && f1 + f3 > f2) {
    console.log("good");
  }
  else {
    alert("This triangle can not exist. Sum of any two sides of a triangle must be greater than the third side. Please correct lengths.");
    return false;
  }
}

// Attaches a click event to submitted form
var form = document.getElementById('form');
if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}