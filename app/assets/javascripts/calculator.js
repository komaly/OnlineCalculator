var expression = ""
var toAdd = ""

function adding() {
	var s = expression.split(" ")

	if (s[s.length - 1] === "NEW")
		expression = expression.replace('NEW', '');

	if (s[s.length - 1] === "+" || s[s.length - 1] === "-" ||
		s[s.length - 1] === "*" || s[s.length - 1] === "/" ||
		s[s.length - 1] === "")
	{
		return;	
	}

	expression += " "
	expression += document.getElementById("plus").value
	expression += " "

	document.getElementById("equation").innerHTML = expression;
}

function subtracting() {
	var s = expression.split(" ")

	if (s[s.length - 1] === "NEW")
		expression = expression.replace('NEW', '');

	if (s[s.length - 1] === "+" || s[s.length - 1] === "-" ||
		s[s.length - 1] === "*" || s[s.length - 1] === "/" ||
		s[s.length - 1] === "")
	{
		return;	
	}

	expression += " "
	expression += document.getElementById("minus").value
	expression += " "

	document.getElementById("equation").innerHTML = expression;
}

function multiplying() {
	var s = expression.split(" ")

	if (s[s.length - 1] === "NEW")
		expression = expression.replace('NEW', '');

	if (s[s.length - 1] === "+" || s[s.length - 1] === "-" ||
		s[s.length - 1] === "*" || s[s.length - 1] === "/" ||
		s[s.length - 1] === "")
	{
		return;	
	}

	expression += " "
	expression += document.getElementById("times").value
	expression += " "

	document.getElementById("equation").innerHTML = expression;
}


function dividing() {
	var s = expression.split(" ")

	if (s[s.length - 1] === "NEW")
		expression = expression.replace('NEW', '');

	if (s[s.length - 1] === "+" || s[s.length - 1] === "-" ||
		s[s.length - 1] === "*" || s[s.length - 1] === "/" ||
		s[s.length - 1] === "")
	{
		return;	
	}

	expression += " "
	expression += document.getElementById("divide").value
	expression += " "

	document.getElementById("equation").innerHTML = expression;
}

function clearing(){
	document.getElementById("display").value = "";
	expression = "";
	document.getElementById("equation").innerHTML = "         ";
}

function equaling(){
	var s = expression.split(" ")

	if (s[s.length - 1] === "+" || s[s.length - 1] === "-" ||
		s[s.length - 1] === "*" || s[s.length - 1] === "/" ||
		s[s.length - 1] === "")
	{
		window.alert("Invalid calculation.");
		return;	
	}

	document.getElementById("display").value = eval(expression);	
	document.getElementById("equation").innerHTML = document.getElementById("display").value;
	expression = document.getElementById("display").value;
	expression += " NEW"
}


function displayCheck(numID) {
	var s = expression.trim().split(" ");

	if (s[s.length - 1] === "NEW")
	{
		document.getElementById("display").value = numID;
		expression = numID;
		document.getElementById("equation").innerHTML = expression;
		return;

	}

	if (s[s.length - 1] === "+" || s[s.length - 1] === "-" ||
		s[s.length - 1] === "*" || s[s.length - 1] === "/")
	{
		document.getElementById("display").value = numID;
	}

	expression += numID;

	document.getElementById("equation").innerHTML = expression;
}