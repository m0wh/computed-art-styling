var n = 20; // number of points
var p = []; // position of each point on the perimeter
var r = 30  ; // radius of the circle
function setup() {
  createCanvas(100, 100);
  stroke('#202340');
  strokeWeight(2);
  noFill();
  noLoop();
  for (var i = 0; i < n; i++) {
    p.push(Math.random()*2*Math.PI);
  }
}
function draw() {
  clear();
  translate(50,50);
  beginShape();
  for (var i = 0; i < p.length; i++) {vertex(sin(p[i])*r, cos(p[i])*r);}
  endShape(CLOSE);
}
