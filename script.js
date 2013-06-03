

var response = window.prompt( "(s)quare, (c)ube, or (a)rea" );

while (response != "q"){
	
	switch (response){

  case "s":
 	alert(square(parseInt(prompt("get number to square:"))));
 	break;
 

  case "c":
   	alert(square(parseInt(prompt("get number to cube:"))));
   break;

  case "a":
 	first_num = parseInt(prompt("get width:"));
 	second_num = parseInt(prompt("get length:"));
 	prompt(area(first_num, second_num));
 	break;

}
var response = window.prompt( "(s)quare, (c)ube, or (a)rea (second time)" );

  }




function square(number){
	return number * number;
}

function cube (number){
	return number * number * number;
}

function area (width,  length){
return (width * length);
}
