/*
Runs calculations based on what button is pressed.
*/

var expression = ""

//Returns true if the expression to be calculated currently ends with
//an operator
function checkEndingForOperator(s){
	return s[s.length - 1] === "+" || s[s.length - 1] === "-" ||
		   s[s.length - 1] === "*" || s[s.length - 1] === "/" ||
		   s[s.length - 1] === "";
}

//If it's a new expression, it removes keyword NEW to begin calculations.
function removeNEW(s) {
	if (s[s.length - 1] === "NEW")
		expression = expression.replace('NEW', '');
}

//Updates the expression to be calculated and current equation displayed 
//based on the operator
function updateExpressionandEquation(operator)
{
	expression += " ";
	expression += document.getElementById(operator).value;
	expression += " ";

	document.getElementById("equation").innerHTML = expression;
}

//Runs operations so that a number can be added
function adding() {
	var s = expression.split(" ");
	removeNEW(s);
	if (checkEndingForOperator(s))
		return;

	updateExpressionandEquation("plus");
}

//Runs operations so that a number can be subtracted
function subtracting() {
	var s = expression.split(" ");
	removeNEW(s);
	if (checkEndingForOperator(s))
		return;

	updateExpressionandEquation("minus");
}

//Runs operations so that a number can be multiplied
function multiplying() {
	var s = expression.split(" ");
	removeNEW(s);
	if (checkEndingForOperator(s))
		return;

	updateExpressionandEquation("times");
}

//Runs operations so that a number can be divided
function dividing() {
	var s = expression.split(" ");
	removeNEW(s);
	if (checkEndingForOperator(s))
		return;

	updateExpressionandEquation("divide");
}

//Clears the main display, the equation display, and the
//current expression to be calculated
function clearing(){
	document.getElementById("display").value = "";
	expression = "";
	document.getElementById("equation").innerHTML = "         ";
}

//Solves the expression and updates the main display, equation display,
//and expression with the answer to the calculation
function equaling(){
	var s = expression.split(" ")

	console.log(s);
	if (checkEndingForOperator(s) || s.length === 1 || s[s.length - 1] === "NEW"){
		window.alert("Invalid calculation.");
		return;	
	}

	document.getElementById("display").value = eval(expression);	
	document.getElementById("equation").innerHTML = document.getElementById("display").value;
	expression = document.getElementById("display").value;
	expression += " NEW"
}

//Checks use cases to determine how the main display needs to be changed
function displayCheck(numID) {
	var s = expression.trim().split(" ");

	//If the last character in the current expression is a decimal, and the current
	//button pressed is a decimal, ignore.
	if (expression.trim().substr(expression.length - 1) === "." && numID === ".")
		return;

	//If the current button pressed is a decimal and the current number already has
	//a decimal, ignore. Otherwise, update the display to include the decimal. 
	if (numID == "."){
		if (s[s.length - 1].includes("."))
			return;

		document.getElementById("display").value += numID;
	}

	//If this a new expression after just solving a prior one, update the main display, 
	//equation display, and expression to reflect this
	if (s[s.length - 1] === "NEW")
	{
		document.getElementById("display").value = numID;
		expression = numID;
		document.getElementById("equation").innerHTML = expression;
		return;

	}

	if (checkEndingForOperator(s))
		document.getElementById("display").value = numID;

	expression += numID;

	document.getElementById("equation").innerHTML = expression;
}