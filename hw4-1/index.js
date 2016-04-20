function eq(){
	var f = document.getElementById('func').value;
	
	var xrange = document.getElementById('xrange').value;
	var yrange = document.getElementById('yrange').value;
	
	var result = "";
	var i;
	var x;
	for(i = -250; i < 250; i++){
		x = i*xrange*2/400;
		result += (i+250) + ',' + (-eval(f)*300/yrange/2+200) + ' ';
	}

	document.getElementById('line').setAttribute("points", result);
	document.getElementById('xl').innerHTML =-xrange;
	document.getElementById('xr').innerHTML = xrange;
	document.getElementById('yu').innerHTML = yrange;
	document.getElementById('yd').innerHTML =-yrange;
}