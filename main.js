
var canvas = new fabric.Canvas('myCanvas')
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
		fabric.Image.fromURL(getImage, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_object);
		block_image_object.scaleToHeight(block_image_object);
		block_image_object.set({
			top: blockY,
			left: blockX
		})
		canvas.add(block_image_object);
})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		newImage('rr1.png');
		console.log("r")
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		newImage('gr.png')
		console.log("r")
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		newImage('yr.png')
		console.log("y")
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		newImage('pr.png')
		console.log("p")
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		newImage('br.png')
		console.log("b")
	}
	
}

