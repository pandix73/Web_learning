var num;
var input;
var restart = 1;
var max;
var min;

function game(){
	if(restart == 1){
		num = Math.floor((Math.random() * 100) + 1);
		restart = 0;
		max = 101;
		min = 0;
		document.getElementById("title").innerHTML = "²q¼Æ¦r";
	}
	
	input = document.getElementById('input_num').value;
	document.getElementById("print").innerHTML = input;
	
	if(input == num){
		document.getElementById("print").innerHTML = num + "~~BINGO!!"
		restart = 1;
		document.getElementById("title").innerHTML = "auto-restart";
	} else if(input > num) {
		if(input < max)max = input;
		document.getElementById("print").innerHTML = min + " ~ X ~ " + max;
	} else {
		if(input > min)min = input;
		document.getElementById("print").innerHTML = min + " ~ X ~ " + max;	
	}
	
}