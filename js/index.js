let pixelCanvas, colorInput, sizePicker, eraser, drawOnOff;
	pixelCanvas = $("#pixelCanvas");
	colorInput = $("#colorPicker");
	sizePicker = $("#sizePicker");
	eraser = $("#eraser");
	drawOnOff = $("#drawOnOff");
// When size is submitted by the user, call makeGrid()
sizePicker.submit(function(evt) {
	makeGrid();
	paint();
	$("#backgroundContent").fadeOut("slow", function() {
		$("#pixelCanvas").fadeIn("slow");
	}); //fadeOut grid size picker and fade in grid
	evt.preventDefault();
});

//function makeGrid()
function makeGrid() {
	pixelCanvas.children().remove();
	let height = $("#inputHeight").val();
	let width = $("#inputWeight").val();
	let tableRows = "";
	let row = 1;
	while (row <= height) {
		tableRows += "<tr>";
		for (let col = 1; col <= width; col++) {
			tableRows += "<td></td>";
		}
		tableRows += "</tr>";
		row += 1;
	} // end while loop
	pixelCanvas.append(tableRows); // add grid to DOM
}

//PRESET BUTTONS

let presetNum; //if you want differing heights and wieghts, use two variables here and in the event listeners

$("#presetSmall").click(function() {
	presetNum = 15;
	$("#inputHeight").val(presetNum);
	$("#inputWeight").val(presetNum);
	makeGrid();
	paint();
	$("#backgroundContent").fadeOut("slow", function() {
		$("#pixelCanvas").fadeIn("slow");
	});
});

$("#presetMedium").click(function() {
	presetNum = 35;
	$("#inputHeight").val(presetNum);
	$("#inputWeight").val(presetNum);
	makeGrid();
	paint();
	$("#backgroundContent").fadeOut("slow", function() {
		$("#pixelCanvas").fadeIn("slow");
	}); //fadeOut grid size picker and fade in grid
});

$("#presetLarge").click(function() {
	presetNum = 50;
	$("#inputHeight").val(presetNum);
	$("#inputWeight").val(presetNum);
	makeGrid();
	paint();
	$("#backgroundContent").fadeOut("slow", function() {
		$("#pixelCanvas").fadeIn("slow");
	}); //fadeOut grid size picker and fade in grid
});

//PAINT CELLS START
//ADDING ABILITY TO CHANGE COLORS AND EVENT LISTENERS TO CHANGE COLOR AND DRAW
let draw = true;
eraser.click(function() {
	draw = false;
}); //click eraser to erase
colorInput.click(function() {
	draw = true;
}); //click on color input to draw
drawOnOff.click(function() {
	draw = true;
	paint();
}); //click draw button after erasing
colorInput.change(paint); //allows user to change color and continue drawing on grid
function paint() {
	let colorSet = colorInput.val();
	let tableCell = $("#pixelCanvas");
	let defaultBGColor = "rgba(255,255,255,0.55)";
	tableCell.on("mousedown mouseover", "td", function(evt) {
		evt.preventDefault();
		if (draw) {
			if (evt.buttons === 1) {
				$(evt.target).css("background-color", colorSet);
			}
		} else {
			if (evt.buttons === 1) {
				$(evt.target).css("background-color", defaultBGColor);
			}
		}
	});
	tableCell.on('touchmove', function(event){
		event.preventDefault;
		let touch = event.touches[0]; //get position touched
		let element = document.elementFromPoint(touch.clientX, touch.clientY); //get element at position
		if (element.tagName === "TD"){
			if (draw) { //we only want to modify table cells
				  $(element).css("background-color", colorSet);
			} else {
				$(element).css("background-color", defaultBGColor);
			}
		} 
	});
	$(".toggleIcon").css("color", colorSet); //changes nav bar icons to current color in use
}
//PAINT CELLS END

//COLOR PALETTE - for sm/md devices mostly
let redBtn, pinkBtn, purpleBtn, blueBtn, aquaBtn, greenBtn,	yellowBtn, orangeBtn, blackBtn, whiteBtn;

redBtn = $("#redBtn");
pinkBtn = $("#pinkBtn");
purpleBtn = $("#purpleBtn");
blueBtn = $("#blueBtn");
aquaBtn = $("#aquaBtn");
greenBtn = $("#greenBtn");
yellowBtn = $("#yellowBtn");
orangeBtn = $("#orangeBtn");
blackBtn = $("#blackBtn");
whiteBtn = $("#whiteBtn");

redBtn.click(function() {
	colorInput = colorInput.val("#FF0000"); //set color for each color in palette since custom opt is removed on sm/md devices
	paint();
	draw = true; //allows person to draw after selecting the eraser and selecting a color from the palette
});

pinkBtn.click(function() {
	colorInput = colorInput.val("#FF69B4"); //set color for each color in palette since custom opt is removed on sm/md devices
	paint();
	draw = true; //allows person to draw after selecting the eraser and selecting a color from the palette
});

purpleBtn.click(function() {
	colorInput = colorInput.val("#800080"); //set color for each color in palette since custom opt is removed on sm/md devices
	paint();
	draw = true; //allows person to draw after selecting the eraser and selecting a color from the palette
});

blueBtn.click(function() {
	colorInput = colorInput.val("#0000FF"); //set color for each color in palette since custom opt is removed on sm/md devices
	paint();
	draw = true; //allows person to draw after selecting the eraser and selecting a color from the palette
});

aquaBtn.click(function() {
	colorInput = colorInput.val("#00FFFF"); //set color for each color in palette since custom opt is removed on sm/md devices
	paint();
	draw = true; //allows person to draw after selecting the eraser and selecting a color from the palette
});

greenBtn.click(function() {
	colorInput = colorInput.val("#00FF7F"); //set color for each color in palette since custom opt is removed on sm/md devices
	paint();
	draw = true; //allows person to draw after selecting the eraser and selecting a color from the palette
});

yellowBtn.click(function() {
	colorInput = colorInput.val("#FFD700"); //set color for each color in palette since custom opt is removed on sm/md devices
	paint();
	draw = true; //allows person to draw after selecting the eraser and selecting a color from the palette
});

orangeBtn.click(function() {
	colorInput = colorInput.val("#FF7F50"); //set color for each color in palette since custom opt is removed on sm/md devices
	paint();
	draw = true; //allows person to draw after selecting the eraser and selecting a color from the palette
});

blackBtn.click(function() {
	colorInput = colorInput.val("#000"); //set color for each color in palette since custom opt is removed on sm/md devices
	paint();
	draw = true; //allows person to draw after selecting the eraser and selecting a color from the palette
});

whiteBtn.click(function() {
	colorInput = colorInput.val("#FFFFFF");
	paint();
	draw = true; //allows person to draw after selecting the eraser and selecting a color from the palette
});

//FADE OUTS EVENTS
//fades out the Get Started screen seen first by user when they click the btn
$("#getStartedBtn").click(function() {
	$("#getStarted").fadeOut("slow", function() {
		$("#backgroundContent:hidden").fadeIn("slow", "linear");
	});
});

//page refresh
$("#refresh").click(function() {
	window.location.href = window.location.href;
	window.location.reload();
});

//trying to make a touch event work

//works to draw but not erase
//function touchScreen(){
//	pixelCanvas.on('touchmove', function(evt){
//		evt.preventDefault;
//		let colorSet = colorInput.val();
//		let touch = event.touches[0]; //get position touched
//		let element = document.elementFromPoint(touch.clientX, touch.clientY); //get element at position
//		if (element.tagName === "TD") { //we only want to modify table cells
//			  $(element).css("background-color", colorSet);
//		}
//	});
//}
//let touchDraw = true; 
//eraser.click(function() {
//	touchdraw = false;
//}); //click eraser to erase
//colorInput.click(function() {
//	touchdraw = true;
//}); //click on color input to draw
//drawOnOff.click(function() {
//	touchdraw = true;
//	touchScreen2();
//}); //click draw button after erasing
//function touchScreen2(){
////	pixelCanvas.on('touchmove', function(evt){
////		evt.preventDefault;
////		let colorSet = colorInput.val();
////		let defaultBGColor = "rgba(255,255,255,0.55)";
////		let touch = event.touches[0]; //get position touched
////		let element = document.elementFromPoint(touch.clientX, touch.clientY); //get element at position
////		if (element.tagName === "TD"){
////			if (touchDraw) { //we only want to modify table cells
////				  $(element).css("background-color", colorSet);
////			} else {
////				$(element).css("background-color", defaultBGColor);
////			}
////		} 
////	});
//}







