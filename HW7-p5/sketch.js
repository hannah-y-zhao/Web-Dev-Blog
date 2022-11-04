let o = 0;
let d = 5;

let D = 300;
let D2 = 250;

let rotate1 = 0;
let rotate1num = 1.5;

let rotate2 = 0;
let rotate2num = 4.5;

let rotate3 = 0;
let rotate3num = 3.4;

let buttonAngle;
let slider;
let slider2;
let slider3;
let slider4
let slider5

function setup() {
  let canvas = createCanvas(650, 500);
  canvas.parent("thecanvas");
  
  angleMode(DEGREES);
  rectMode(CENTER);
  buttonAngle = createButton("Reverse Angle");
  buttonAngle.mousePressed(reverseAngle);

  slider = createSlider(10, 40); //pink
  slider.parent("slider1");
  slider.style("width", 100);

  slider2 = createSlider(10, 40); //teal
  slider2.parent("slider2");
  slider2.style("width", 100);

  slider3 = createSlider(10, 40); //violet
  slider3.parent("slider3");
  slider3.style("width", 100);
  
  slider4 = createSlider(10, 40); //yellow
  slider4.parent("slider4");
  slider4.style("width", 100);
  
  slider5 = createSlider(10, 40); //orange
  slider5.parent("slider5");
  slider5.style("width", 100);
}

function draw() {
  background(0, 20);

  noFill();
  stroke(255);
  circle(width / 2, height / 2, D);
  stroke(255);
  circle(width / 2, height / 2, D2);

  D = map(mouseY, 0, height, 250, height);
  D2 = map(mouseY, 0, height, 200, height - 50);

  push();
  stroke(255, 255, 255, 0);
  squares(0, 0, 300, o, 1, rotate3 / 5);
  rotate(rotate3);
  pop();

  push();
  squares(0, 0, 190, o, 2, rotate1);
  rotate(rotate1);
  pop();

  push();
  squares(0, 0, 100, o, 2, rotate3);
  rotate(rotate3);
  pop();

  push();
  squares(0, 0, 75, o, 1, rotate1);
  rotate(rotate1);
  pop();

  push();
  squares(0, 0, 40, o, 3, rotate2);
  rotate(rotate2);
  pop();
  
  push();
  fill('#FF2079'); //pink
  circles(
    0.5 * D * sqrt(1 / 2),
    0.5 * D * sqrt(1 / 2),
    slider.value(),
    rotate1/2
  );
  rotate(rotate1/2);
  pop();

  push();
  fill('#43b5a0'); //teal
  circles(
    0.5 * D2 * sqrt(1 / 2),
    0.5 * D2 * sqrt(1 / 2),
    slider2.value(),
    rotate3/3
  );
  rotate(rotate3/3);
  pop();

  push();
  fill('#fec859'); //yellow
  circles(
    0.5 * D * sqrt(1 / 2),
    0.5 * D * sqrt(1 / 2),
    slider3.value(),
    rotate2 / 3
  );
  rotate(rotate2 / 3);
  pop();
  
  push();
  fill('#491d88'); //violet
  circles(
    0.5 * D2 * sqrt(1 / 2),
    0.5 * D2 * sqrt(1 / 2),
    slider4.value(),
    rotate3/2
  );
  rotate(rotate3/2);
  pop();
  
  push();
  fill('#fe3218'); //orange
  circles(
    0.5 * D * sqrt(1 / 2),
    0.5 * D * sqrt(1 / 2),
    slider5.value(),
    rotate1/2.3
  );
  rotate(rotate1/3);
  pop();

  o = map(mouseX, 0, width, 0, 50);

  rotate1 += rotate1num;
  rotate2 += rotate2num;
  rotate3 += rotate3num;
}

function squares(x, y, s, o, sW, rotation) {
  push();

  translate(width / 2, height / 2);
  strokeWeight(sW);
  stroke(255);
  fill(random(255), random(255), random(255), o);
  rotate(rotation);
  square(x, y, s);

  pop();
}

function circles(x, y, d, rotation) {
  push();

  translate(width / 2, height / 2);
  noStroke();
  rotate(rotation);
  circle(x, y, d);

  pop();
}

function reverseAngle() {
  rotate1num *= -1;
  rotate2num *= -1;
  rotate3num *= -1;
}