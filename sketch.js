let backgroundImage;
let isDrawing = false;
let prevX, prevY;
let count = 1; // Initialize count to 1
const totalSketches = 20;
let strokeWidth = 4; // Initial stroke width
let currentColor;
let targetColor;
let customFont

function preload() {
  backgroundImage = loadImage("Untitled-14-02.png");
  customFont = loadFont("BlenderBold.otf")
}

function setup() {
  createCanvas(600, 800);
  background(backgroundImage);
  currentColor = color(36, 77, 226); // Initial color (blue)
  targetColor = color(255, 105, 180); // Hot pink
  displayCount(); // Display initial count
}

function draw() {
  if (isDrawing) {
    stroke(currentColor);
    strokeWeight(strokeWidth);
    line(prevX, prevY, mouseX, mouseY);
    prevX = mouseX;
    prevY = mouseY;
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    if (!isDrawing) {
      isDrawing = true;
      prevX = mouseX;
      prevY = mouseY;
    } else {
      isDrawing = false;
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    strokeWidth += 2;
  } else if (keyCode === DOWN_ARROW) {
    strokeWidth -= 2;
    if (strokeWidth < 2) {
      strokeWidth = 2;
    }
  } else if (key === 'Enter') {
    // Clear the canvas by redrawing the background image
    background(backgroundImage);
    // Reset stroke color and width
  
    // Increment the count and reset to 1 if it exceeds the totalSketches
    count++;
    if (count > totalSketches) {
      count = 1;
    }
    displayCount(); // Display the updated count
  }
}

function displayCount() {
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(customFont)
  text(`${count}/${totalSketches}`, width - 100, height - 75); // Display count at the bottom
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    strokeWidth += 2;
  } else if (keyCode === DOWN_ARROW) {
    strokeWidth -= 2;
    if (strokeWidth < 2) {
      strokeWidth = 2;
    }
  } else if (key === 'Enter') {
    // Clear the canvas by redrawing the background image
    background(backgroundImage);
    // Reset stroke color and width
    noStroke();
    
    // Increment the count and reset to 1 if it exceeds the totalSketches
    count++;
    if (count > totalSketches) {
      count = 1;
    }
    displayCount(); // Display the updated count
  } else if (keyCode === LEFT_ARROW) {
    currentColor = color(206, 25, 111); // Set color to pink
  } else if (keyCode === RIGHT_ARROW) {
    currentColor = color(229, 207, 81); // Set color to yellow
  }
}