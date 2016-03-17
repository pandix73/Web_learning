var num = 0;
var temp_num = 0;
var instruction = 0;
var isdot = 0;

function equal(){
	if(instruction == 1){
		num = temp_num + num;
		temp_num = 0;
	} else if(instruction == 2){
		num = temp_num - num;
		temp_num = 0;
	} else if(instruction == 3){
		num = temp_num * num;
		temp_num = 0;
	} else if(instruction == 4){
		num = temp_num / num;
		temp_num = 0;
	} else {
		num = num;
		temp_num = 0;
	}
	isdot = 0;
	instruction = 0;
	num = parseFloat(Math.round(num*100000))/100000;
	document.getElementById("number").innerHTML=num;
}

function add(){
	equal();
	instruction = 1;
	temp_num = num;
	num = 0;
}
function sub(){
	equal();
	instruction = 2;
	temp_num = num;
	num = 0;
}
function mul(){
	equal();
	instruction = 3;
	temp_num = num;
	num = 0;
}
function div(){
	equal();
	instruction = 4;
	temp_num = num;
	num = 0;
}

function dot(){
	isdot = 1;
	document.getElementById("number").innerHTML=num+'.';
}

function zero(){
    num = num * 10;
	
	document.getElementById("number").innerHTML=num;
}
function one() {
    num = num * 10 + 1;
	
	document.getElementById("number").innerHTML=num;
}
function two() {
    num = num * 10 + 2;
	
	document.getElementById("number").innerHTML=num;
}
function three() {
    num = num * 10 + 3;
	
	document.getElementById("number").innerHTML=num;
}
function four() {
    num = num * 10 + 4;
	
	document.getElementById("number").innerHTML=num;
}
function five() {
    num = num * 10 + 5;
	
	document.getElementById("number").innerHTML=num;
}
function six() {
    num = num * 10 + 6;
	
	document.getElementById("number").innerHTML=num;
}
function seven() {
    num = num * 10 + 7;
	
	document.getElementById("number").innerHTML=num;
}
function eight() {
    num = num * 10 + 8;
	
	document.getElementById("number").innerHTML=num;
}
function nine() {
    num = num * 10 + 9;
	
	document.getElementById("number").innerHTML=num;
}

