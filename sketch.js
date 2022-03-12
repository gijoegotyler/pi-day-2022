let pi;
function preload() {
  pi = loadStrings('pi.txt');
}

class bezierSet {
  constructor(x1,y1,x2,y2,x3,y3,x4,y4) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.x4 = x4;
    this.y4 = y4;
  }
}

let bzs = []
function setup() {
  createCanvas(1000, 1000);
  // frameRate(10)
  
  pi = pi[0].split(".")[1].match(/.{1,3}/g);
  for (let i = 0; i < pi.length; i++) {
    pi[i] = parseInt(pi[i]);
  }
  
  n = pi.length / 8  
  for (i = 0; i < n; i += 6) { 
    if (pi.length - i > 7) {
      s = new bezierSet(pi[i], pi[i+1], pi[i+2], pi[i+3],
             pi[i+4], pi[i+5], pi[i+6], pi[i+7]);
      bzs.push(s)
    }
  }
}

counter = 0
function draw() {
  background(0);
  stroke(255);
  noFill();
  
  for (let i = 0; i < counter; i++) {
    c = bzs[i]
    bezier(c.x1, c.y1, c.x2, c.y2, c.x3, c.y3, c.x4, c.y4)
  }
  
  if (counter < bzs.length-1) {
      counter++;
  }
}

