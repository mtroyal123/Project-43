

function setup() {
  createCanvas(800,400);
 angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(400,200);
  rotate(-90);

  let hr = hour()%12;
  let mn = minute();
  let sc = second();
   fill(255);
  text(hr + ":"+ mn + ":" + sc, 200,100);

  strokeWeight(8);
  stroke(255,0,0);
  noFill();
  let secAngle = map(sc, 0,60,0,360);
  arc(0,0,300,300,0,secAngle);
  
  push();
  rotate(secAngle);
  stroke(255,0,0);
  line(0,0, 100,0);
  pop();

  stroke(0,255,0);
 let minAngle = map(mn, 0,60,0,360);
  arc(0,0,280,280,0,minAngle);

  push();
  rotate(minAngle);
  stroke(0,255,0);
  line(0,0, 100,0);
  pop();

  stroke(0,0,255);
 let hrAngle = map(hr, 0, 12,0,360);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  line(0,0, 100,0);
  pop();

  drawSprites();
}

//async function getTime(){
//var response = await fetch("http://worldtimeapi.org/api/timezone/America/Edmonton");
//var responseJSON = await response.json();
//}