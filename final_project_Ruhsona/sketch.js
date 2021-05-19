var serial;
var portName = "COM5";
var inMessage;

let circleCenter;

function setup() {

  
    circleCenter = new p5.Vector(150,220,100); 
  createCanvas(500, 500);
  
  
  // make an instance of the SerialPort object
  serial = new p5.SerialPort();

  // Get a list the ports available
  // You should have a callback defined to see the results. See gotList, below:
  serial.list();

  // Assuming our Arduino is connected,  open the connection to it
  serial.open('COM5');

  // When you get a list of serial ports that are available
  serial.on('list', gotList);

  // When you some data from the serial port
  serial.on('data', gotData);
  
  
}


// Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    console.log(i + " " + thelist[i]);
    
  }
}

function gotData() {
}

function draw() {
  background(220);

  fill (0,204,0);
    ellipse(circleCenter.x-50, circleCenter.y-120, circleCenter.z);
  if (mouseIsPressed && dist(mouseX, mouseY, circleCenter.x-50, circleCenter.y-120) < circleCenter.z/2){
    console.log("GreenOn");
    serial.write("1");

}
  
  
  fill (255,0,0);
  ellipse(circleCenter.x-50, circleCenter.y+120, circleCenter.z);
  if (mouseIsPressed && dist(mouseX, mouseY, circleCenter.x-50, circleCenter.y+120) < circleCenter.z/2){
    console.log("RedOn");
    serial.write("2");
}

  
  fill (255,255,0);
  ellipse(circleCenter.x+95, circleCenter.y, circleCenter.z);
  if (mouseIsPressed && dist(mouseX, mouseY, circleCenter.x+95, circleCenter.y) < circleCenter.z/2){
    console.log("YellowOn");
    serial.write("3");
}
  
  fill (0,125,255);
  ellipse(circleCenter.x+250, circleCenter.y-120, circleCenter.z);
  if (mouseIsPressed && dist(mouseX, mouseY, circleCenter.x+250, circleCenter.y-120) < circleCenter.z/2){
    console.log("BlueOn");
    serial.write("4");
}
  
  
  fill (255)
  ellipse(circleCenter.x+250, circleCenter.y+120, circleCenter.z);
  if (mouseIsPressed && dist(mouseX, mouseY, circleCenter.x+250, circleCenter.y+120) < circleCenter.z/2){
    console.log("WhiteOn");
    serial.write("5");
}
  
}