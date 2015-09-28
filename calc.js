var numArray = [];
var func = "";
var answer = 0;
var lastButton = "func";
var counter = 0;
var currentNum = "";

var equalsButton = function(){
    numArray = addToArray(currentNum, numArray);
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
}

var solve = function(func, numArray){
    switch (func){
        case "add": return add(numArray);
        break;

        case "subtract": return subtract(numArray);
        break;
    }
}

var subtract = function(numArray){
    if(counter === 0){
        var sum = parseFloat(numArray[0]);
        console.log("FOR!");
        for(i=1; i < numArray.length; i++){
            sum = sum - parseFloat(numArray[i]);
        }
    }else{
        sum = parseFloat(numArray[numArray.length - 1]) - parseFloat(numArray[numArray.length - 2]);
    }
    return sum;
}

var add = function(numArrary){
	var sum = 0;
	if(counter === 0){
		for(i=0; i < numArray.length; i++){
		  sum = parseFloat(numArray[i]) + sum;
		}
	}else{
		sum = parseFloat(numArray[numArray.length - 1]) + parseFloat(numArray[numArray.length - 2])
	}
	return sum;
}

var addToArray = function(num, numArray){
	//lastButton = "num";
    if(num !== ""){
        numArray.push(parseFloat(num));        
    }
    currentNum = "";
	return numArray;
}

var addToCurrentNum = function(num){
    currentNum += num;
}

var display = function (num){
	document.getElementById('screen').innerHTML = num.toString();
}

var one = document.getElementById('one');
one.onclick = function() {
    console.log(currentNum);
    addToCurrentNum("1");
    display(currentNum);
    //numArray = addToArray("1", numArray);
}
var two = document.getElementById('two');
two.onclick = function() {
    console.log(currentNum);
    addToCurrentNum("2");
    display(currentNum);
    //numArray = addToArray("2", numArray);
}
var three = document.getElementById('three');
three.onclick = function() {
    console.log(3);
    addToCurrentNum("3");
    display(currentNum);
}
var four = document.getElementById('four');
four.onclick = function() {
    console.log(4);
    addToCurrentNum("4");
    display(currentNum);
}
var five = document.getElementById('five');
five.onclick = function() {
    console.log(5);
    addToCurrentNum("5");
    display(currentNum);
}
var six = document.getElementById('six');
six.onclick = function() {
    console.log(6);
    addToCurrentNum("6");
    display(currentNum);
}
var seven = document.getElementById('seven');
seven.onclick = function() {
    console.log(7);
    addToCurrentNum("7");
    display(currentNum);
}
var eight = document.getElementById('eight');
eight.onclick = function() {
    console.log(8);
    addToCurrentNum("8");
    display(currentNum);
}
var nine = document.getElementById('nine');
nine.onclick = function() {
    console.log(9);
    addToCurrentNum("9");
    display(currentNum);
}
var zero = document.getElementById('zero');
zero.onclick = function() {
    console.log(0);
    addToCurrentNum("0");
    display(currentNum);
}

var clear = document.getElementById('clear');
clear.onclick = function() {
	numArray = [];
	func = "";
	answer = 0;
	display(0);
	counter = 0;
    var currentNum = "";
}

var addButton = document.getElementById('add');
addButton.onclick = function() {
    func = "add";
    numArray = addToArray(currentNum, numArray);
    if(numArray.length >= 2 && counter === 0){
        numArray = [numArray[numArray.length-2],numArray[numArray.length-1]]
        equalsButton();
    }
    lastButton = "func";
}

var subtractButton = document.getElementById('subtract');
subtractButton.onclick = function() {
    func = "subtract";
    numArray = addToArray(currentNum, numArray);
    if(numArray.length >= 2 && counter === 0){
        numArray = [numArray[numArray.length-2],numArray[numArray.length-1]]
        equalsButton();
    }
    lastButton = "func";
}

var equals = document.getElementById('equals');
equals.onclick = function() {
    counter++;
    equalsButton();
}

display("0");