var n; // number of points
var p = []; // position of each point on the perimeter
var s = []; // speed of each point
var g = .5; // global speed
var r; // radius of the circle
function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke('#00c8d7');
  noFill();
  if (windowWidth >= windowHeight) {
    r = windowHeight/3;
  } else {
    r = windowWidth/3;
  }

  n = round(r/5);

  for (var i = 0; i < n; i++) {
    p.push(Math.random()*2*Math.PI);
    s.push((random()-.5)/100*g);
  }


}
function draw() {
  clear();
  translate(windowWidth/2, windowHeight/2);
  beginShape();
  for (var i = 0; i < p.length; i++) {vertex(sin(p[i])*r+s[i]*5000, cos(p[i])*r+s[i]*5000);}
  endShape(CLOSE);
  for (var i = 0; i < n; i++) {p[i]+=s[i];}
}
