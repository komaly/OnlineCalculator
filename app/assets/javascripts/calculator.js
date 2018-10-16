var expression = ""
var toAdd = ""

function adding() {
	var s = expression.split(" ")

	if (s[s.length - 1] === "+" || s[s.length - 1] === "-" ||
		s[s.length - 1] === "*" || s[s.length - 1] === "/" ||
		s[s.length - 1] === "")
	{
		return;	
	}

	expression += " "
	expression += document.getElementById("plus").value
	expression += " "
}

function subtracting() {
	var s = expression.split(" ")

	if (s[s.length - 1] === "+" || s[s.length - 1] === "-" ||
		s[s.length - 1] === "*" || s[s.length - 1] === "/" ||
		s[s.length - 1] === "")
	{
		return;	
	}

	expression += " "
	expression += document.getElementById("minus").value
	expression += " "
}

function multiplying() {
	var s = expression.split(" ")

	if (s[s.length - 1] === "+" || s[s.length - 1] === "-" ||
		s[s.length - 1] === "*" || s[s.length - 1] === "/" ||
		s[s.length - 1] === "")
	{
		return;	
	}

	expression += " "
	expression += document.getElementById("times").value
	expression += " "
}


function dividing() {
	var s = expression.split(" ")

	if (s[s.length - 1] === "+" || s[s.length - 1] === "-" ||
		s[s.length - 1] === "*" || s[s.length - 1] === "/" ||
		s[s.length - 1] === "")
	{
		return;	
	}

	expression += " "
	expression += document.getElementById("divide").value
	expression += " "
}

function clearing(){
	document.getElementById("display").value = "";
	expression = "";
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

}


function displayCheck(numID) {
	var s = expression.trim().split(" ");

	if (s[s.length - 1] === "+" || s[s.length - 1] === "-" ||
		s[s.length - 1] === "*" || s[s.length - 1] === "/")
	{
		document.getElementById("display").value = numID;
	}

	expression += numID;
}