var expression = ""

function adding() {
	expression += document.getElementById("display").value; 
	expression += " "
	expression += document.getElementById("plus").value
	window.alert(expression)
}

function subtracting() {
	expression += document.getElementById("display").value; 
	expression += " "
	expression += document.getElementById("minus").value
	window.alert(expression)
}

function multiplying() {
	expression += document.getElementById("display").value; 
	expression += " "
	expression += document.getElementById("times").value
	window.alert(expression)
}


function dividing() {
	expression += document.getElementById("display").value; 
	expression += " "
	expression += document.getElementById("divide").value
	window.alert(expression)
}

function clearing(){

}

function equaling(){

}


function test() {
	window.alert(document.getElementById("display").value)

}

