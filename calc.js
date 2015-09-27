var numArray = [];
var func = "";
var answer = 0;
var lastButton = "func";
var counter = 0;



var solve = function(func, numArray){
	if(func == "add"){
		return add(numArray);
	}
}

var add = function(numArrary){
	var sum = 0;
	if(counter === 0){
		for(i=0; i < numArray.length; i++){
		sum = numArray[i] + sum;
		}
	}else{
		sum = numArray[numArray.length - 1] + numArray[numArray.length - 2]
	}

	return sum;

}

var addToArray = function(num, numArray){
	lastButton = "num";
	numArray.push(num);
	return numArray;
}

var display = function (num){
	document.getElementById('screen').innerHTML = num.toString();
}

var one = document.getElementById('one');
one.onclick = function() {
    console.log(1);
    display(1);
    numArray = addToArray(1, numArray);
}
var two = document.getElementById('two');
two.onclick = function() {
    console.log(2);
    display(2);
    numArray = addToArray(2, numArray);
}
var three = document.getElementById('three');
three.onclick = function() {
    console.log(3);
    display(3);
    numArray = addToArray(3, numArray);
}
var four = document.getElementById('four');
four.onclick = function() {
    console.log(4);
    display(4);
    numArray = addToArray(4, numArray);
}
var five = document.getElementById('five');
five.onclick = function() {
    console.log(5);
    display(5);
    numArray = addToArray(5, numArray);
}
var six = document.getElementById('six');
six.onclick = function() {
    console.log(6);
    display(6);
    numArray = addToArray(6, numArray);
}
var seven = document.getElementById('seven');
seven.onclick = function() {
    console.log(7);
    display(7);
    numArray = addToArray(7, numArray);
}
var eight = document.getElementById('eight');
eight.onclick = function() {
    console.log(8);
    display(8);
    numArray = addToArray(8, numArray);
}
var nine = document.getElementById('nine');
nine.onclick = function() {
    console.log(9);
    display(9);
    numArray = addToArray(9, numArray);
}
var zero = document.getElementById('zero');
zero.onclick = function() {
    console.log(0);
    display(0);
    numArray = addToArray(0, numArray);
}

var clear = document.getElementById('clear');
clear.onclick = function() {
	numArray = [];
	func = "";
	answer = 0;
	display(0);
	counter = 0;
}

var addButton = document.getElementById('add');
addButton.onclick = function() {
    func = "add";
    lastButton = "func";
}

var equals = document.getElementById('equals');
equals.onclick = function() {
    answer = solve(func, numArray);
    display(answer);
    console.log("before: " + numArray);
    if(lastButton == "num"){
    	numArray = [numArray.pop(), answer];
    }else{
    	numArray = [numArray[0], answer];
    }
    console.log("after: " + numArray);
    
    lastButton = "func";
    counter++;
}