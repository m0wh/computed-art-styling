var n = 50; // number of points
var p = []; // position of each point on the perimeter
var s = []; // speed of each point
var g = .5; // global speed
var r = 40; // radius of the circle
function setup() {
  createCanvas(100, 100);
  stroke('#202340');
  noFill();
  for (var i = 0; i < n; i++) {
    p.push(Math.random()*2*Math.PI);
    s.push((random()-.5)/100*g);
  }
}
function draw() {
  clear();
  translate(50,50);
  beginShape();
  for (var i = 0; i < p.length; i++) {vertex(sin(p[i])*r, cos(p[i])*r);}
  endShape(CLOSE);
  for (var i = 0; i < n; i++) {p[i]+=s[i];}
}
