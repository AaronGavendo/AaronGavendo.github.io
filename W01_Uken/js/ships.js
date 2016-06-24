var selected = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var selectedship = "yellowship";
var width = 175;
var height = 175;
var canvas = document.getElementById("previewCanvas");
var cxt = canvas.getContext("2d");
var sky = new Image();
sky.src = "ships/sky.png";
var blueship = new Image();
var brownship = new Image();
var greenship = new Image();
var redship = new Image();
var yellowship = new Image();
var holder = new Image();
blueship.src = "ships/blueship.png";
brownship.src = "ships/brownship.png";
greenship.src = "ships/greenship.png";
redship.src = "ships/redship.png";
yellowship.src = "ships/yellowship.png";
holder.src = "ships/holder.png";
var spotColors = [redship, redship, redship, redship, redship, redship, redship, redship, redship]

function check(ship) {
	selectedship = ship;
}

function changeImage(pickedElement) {

	var clickCount = selected[0] + selected[1] + selected[2] + selected[3] + selected[4] + selected[5] + selected[6] + selected[7] + selected[8];
	
	if(clickCount > 4){
		if((pickedElement === 1) && (selected[0] === 1)){
		    document.getElementById("placeShip1").src = "ships/" +selectedship + ".png";
		    getShipColor(0, selectedship);
		}
		else if((pickedElement === 2) && (selected[1] === 1)){
		    document.getElementById("placeShip2").src = "ships/" +selectedship + ".png";
		    getShipColor(1, selectedship);
		}
		else if((pickedElement === 3) && (selected[2] === 1)){
		    document.getElementById("placeShip3").src = "ships/" +selectedship + ".png";
		    getShipColor(2, selectedship);
		}
		else if((pickedElement === 4) && (selected[3] === 1)){
		    document.getElementById("placeShip4").src = "ships/" +selectedship + ".png";
		    getShipColor(3, selectedship);
		}
		else if((pickedElement === 5) && (selected[4] === 1)){
		    document.getElementById("placeShip5").src = "ships/" +selectedship + ".png";
		    getShipColor(4, selectedship);
		}
		else if((pickedElement === 6) && (selected[5] === 1)){
		    document.getElementById("placeShip6").src = "ships/" +selectedship + ".png";
		    getShipColor(5, selectedship);
		}
		else if((pickedElement === 7) && (selected[6] === 1)){
		    document.getElementById("placeShip7").src = "ships/" +selectedship + ".png";
		    getShipColor(6, selectedship);		    
		}
		else if((pickedElement === 8) && (selected[7] === 1)){
		    document.getElementById("placeShip8").src = "ships/" +selectedship + ".png";
		    getShipColor(7, selectedship);		    
		}
		else if((pickedElement === 9) && (selected[8] === 1)){
		    document.getElementById("placeShip9").src = "ships/" +selectedship + ".png";
		    getShipColor(8, selectedship);	    
		}
	}
	else {
		if(pickedElement === 1){
		    document.getElementById("placeShip1").src = "ships/" +selectedship + ".png";
		    selected[0] = 1;
		    getShipColor(0, selectedship);
		}
		else if(pickedElement === 2){
		    document.getElementById("placeShip2").src = "ships/" +selectedship + ".png";
		    selected[1] = 1;
		    getShipColor(1, selectedship);
		}
		else if(pickedElement === 3){
		    document.getElementById("placeShip3").src = "ships/" +selectedship + ".png";
		    selected[2] = 1;
		    getShipColor(2, selectedship);
		}
		else if(pickedElement === 4){
		    document.getElementById("placeShip4").src = "ships/" +selectedship + ".png";
		    selected[3] = 1;
			getShipColor(3, selectedship);    
		}
		else if(pickedElement === 5){
		    document.getElementById("placeShip5").src = "ships/" +selectedship + ".png";
		    selected[4] = 1;
		    getShipColor(4, selectedship);
		}
		else if(pickedElement === 6){
		    document.getElementById("placeShip6").src = "ships/" +selectedship + ".png";
		    selected[5] = 1;
		    getShipColor(5, selectedship);
		}
		else if(pickedElement === 7){
		    document.getElementById("placeShip7").src = "ships/" +selectedship + ".png";
		    selected[6] = 1;
		    getShipColor(6, selectedship);		    
		}
		else if(pickedElement === 8){
		    document.getElementById("placeShip8").src = "ships/" +selectedship + ".png";
		    selected[7] = 1;
		    getShipColor(7, selectedship);		    
		}
		else if(pickedElement === 9){
		    document.getElementById("placeShip9").src = "ships/" +selectedship + ".png";
		    selected[8] = 1;
		    getShipColor(8, selectedship);		    
		}
	}
}

function preview() {
	cxt.drawImage(sky, 10, 10); 
	if(selected[0] === 1){
		cxt.drawImage(spotColors[0], 30, 30, width, height);
    }
    if(selected[1] === 1){
    	cxt.drawImage(spotColors[1], 230, 30, width, height);
    }
    if(selected[2] === 1){
    	cxt.drawImage(spotColors[2], 430, 30, width, height);
    }
    if(selected[3] === 1){
    	cxt.drawImage(spotColors[3], 30, 230, width, height);
    }
    if(selected[4] === 1){
    	cxt.drawImage(spotColors[4], 230, 230, width, height);
    }
    if(selected[5] === 1){
   		cxt.drawImage(spotColors[5], 430, 230, width, height);
    }
    if(selected[6] === 1){
    	cxt.drawImage(spotColors[6], 30, 430, width, height);
    }
    if(selected[7] === 1){
    	cxt.drawImage(spotColors[7], 230, 430, width, height);
    }
    if(selected[8] === 1){
    	cxt.drawImage(spotColors[8], 430, 430, width, height);
    }  
}

function getShipColor(theOrder,theShip) {
	if(theShip === "blueship"){
		spotColors[theOrder] = blueship;	    	
	}
	if(theShip === "brownship"){
		spotColors[theOrder] = brownship;			    	
	}
	if(theShip === "greenship"){
		spotColors[theOrder] = greenship;		    	
	}
	if(theShip === "redship"){
		spotColors[theOrder] = redship;		    	
	}
	if(theShip === "yellowship"){
		spotColors[theOrder] = yellowship;		    	
	}
	if(theShip == "holder"){
		spotColors[theOrder] = holder;
		selected[theOrder] = 0;
	}
}