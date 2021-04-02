// MY  VARIABLES
var firstPic;
var secondPic;
var firstSong;
var secondSong;
var screen = true;



// LOADING IMAGES AND SONGS
function preload() {
  firstPic = loadImage ('walk1.gif')
  secondPic = loadImage ('walk2.gif')
  
  
  firstSong= loadSound ("cheer.mp3")
  secondSong= loadSound ("loser.mp3")
}



// ON MOUSE PRESS CHANGING  SONG
function mousePressed(){
  
    screen = false;
  
    if (firstSong.isPlaying()) {
      
      firstSong.stop()
      secondSong.play()
      
    }
}



// SETUP FUNCTION
function setup() { 
  
  createCanvas(400, 400);
  
  firstSong.play() 
  
}


// DRAW FUNCTION
function draw() {
  
  if (screen) {
    
    background(firstPic);
    
// TEXT
    textSize(25)
    textAlign(CENTER);  
    fill('#1a73e8')
    text("This class chill and easy ", 200, 20);
    
    
    
    
// GREEN CIRCLE    
    let x1 = map(mouseX, 0, width, 20, 265)  
    fill('#47a02a');  
    ellipse(x1, 80, 100, 100);
    
  } else if (!screen) {
    
    background(secondPic);

// TEXT
    textSize(25)
    textAlign(CENTER); 
    fill('#1a73e8')
    text("day after ",200, 20);


// RED CIRCLE
    let x1 = map(mouseX, 0, width, 20, 265)  
    fill('#d04040');  
    ellipse(x1, 80, 100, 100);
    
  
  
    
  }

}
  