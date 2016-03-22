var num = 0;
var temp_num = 0;
var instruction = 0;
var isdot = 0;
function check(){
	if(num > 10000000000){
		document.getElementById("number").innerHTML="overflow";
		num = 0;
		temp_num = 0;
		instruction = 0;
		isdot = 0;
	}
}
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
	check();
}

function equal_end(){
	equal();
	num = 0;
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
	if(isdot == 0){
		isdot = 1;
		document.getElementById("number").innerHTML=num+'.';
	}
}

function zero(){
    if(isdot > 0){
		if(isdot == 1)document.getElementById("number").innerHTML=num + '.0';
		else if(isdot < 6)document.getElementById("number").innerHTML=num.toFixed(isdot);
		isdot = isdot + 1;
	} else {
		num = num * 10;
		document.getElementById("number").innerHTML=num;
		check();
	}
}
function one() {
	if(isdot > 0){
		num = num + 1 * Math.pow(10, -1*isdot);
		num = parseFloat(Math.round(num*100000))/100000;
		isdot = isdot + 1;
	} else num = num * 10 + 1;
	document.getElementById("number").innerHTML=num;
	check();
}
function two() {
    if(isdot > 0){
		num = num + 2 * Math.pow(10, -1*isdot);
		num = parseFloat(Math.round(num*100000))/100000;
		isdot = isdot + 1;
	} else num = num * 10 + 2;	
	document.getElementById("number").innerHTML=num;
	check();
}
function three() {
    if(isdot > 0){
		num = num + 3 * Math.pow(10, -1*isdot);
		num = parseFloat(Math.round(num*100000))/100000;
		isdot = isdot + 1;
	} else num = num * 10 + 3;	
	document.getElementById("number").innerHTML=num;
	check();
}
function four() {
    if(isdot > 0){
		num = num + 4 * Math.pow(10, -1*isdot);
		num = parseFloat(Math.round(num*100000))/100000;
		isdot = isdot + 1;
	} else num = num * 10 + 4;	
	document.getElementById("number").innerHTML=num;
	check();
}
function five() {
    if(isdot > 0){
		num = num + 5 * Math.pow(10, -1*isdot);
		num = parseFloat(Math.round(num*100000))/100000;
		isdot = isdot + 1;
	} else num = num * 10 + 5;	
	document.getElementById("number").innerHTML=num;
	check();
}
function six() {
    if(isdot > 0){
		num = num + 6 * Math.pow(10, -1*isdot);
		num = parseFloat(Math.round(num*100000))/100000;
		isdot = isdot + 1;
	} else num = num * 10 + 6;	
	document.getElementById("number").innerHTML=num;
	check();
}
function seven() {
    if(isdot > 0){
		num = num + 7 * Math.pow(10, -1*isdot);
		num = parseFloat(Math.round(num*100000))/100000;
		isdot = isdot + 1;
	} else num = num * 10 + 7;	
	document.getElementById("number").innerHTML=num;
	check();
}
function eight() {
    if(isdot > 0){
		num = num + 8 * Math.pow(10, -1*isdot);
		num = parseFloat(Math.round(num*100000))/100000;
		isdot = isdot + 1;
	} else num = num * 10 + 8;	
	document.getElementById("number").innerHTML=num;
	check();
}
function nine() {
    if(isdot > 0){
		num = num + 9 * Math.pow(10, -1*isdot);
		num = parseFloat(Math.round(num*100000))/100000;
		isdot = isdot + 1;
	} else num = num * 10 + 9;	
	document.getElementById("number").innerHTML=num;
	check();
}

