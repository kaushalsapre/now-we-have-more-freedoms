let line = [];
let star = [];
let poem;
let length;
let lineno;
let bulbul;
let font1;
let font2;
let font3;
let facade;
let poemState = 'START';


function preload(){
  poem = loadTable('assets/Now_we_have_more_freedoms.csv', 'csv');
  font1 = loadFont('assets/AurulentSansMono-Regular.otf');

}


function setup(){
  createCanvas(windowWidth, windowHeight);
  length = poem.getRowCount();

  for (let i = 0; i < 100; i++){
    star.push(new stars());

  }
}



function draw(){
  background(0);

  for (let i = 0; i < 100; i++){
    star[i].make();
    star[i].shimmer();

  }

  if (poemState == 'START'){
    startPoem();
  }
  if (poemState == 'PLAY'){
    playPoem();
    //poemState = 'END';
  }


ground();

}



function mousePressed(){
  if (poemState == 'START'){
      poemState = 'PLAY';
    }
}

function startPoem(){
  textAlign(CENTER);
  textFont(font1);
  textSize(20);
  fill(255);
  text('Now We Have More Freedoms', width/2, height/2);
  text('G.N.Saibaba', width/2, height/2 + 50);
  textSize(20);
  text('25th December 2017', width/2, height/2 + 100);
  text('Click to Start', width/2, height/2 + 150);

}

function playPoem(){
  for (let i = 0; i < length; i++){
   line.push(new Line(i));
   line[i].make();
   line[i].update();
   line[i].grow();


  }

}

function ground(){
  noFill;
  noStroke();

}

//line class
class Line {
constructor(lineno){
this.xpos = random((width/2) - 150, (width/2) + 150);
this.ypos = height + 20;
this.speed = 0.5;
this.fontsize = 5;
this.fontspeed = 0.02;
this.lineno = lineno;
}

make(){
textFont(font1);
let ygap = floor(random(240, 250));
let xgap = random(-50, 50);
let bulbul = this.fontsize - this.fontspeed*((this.lineno*ygap)/this.speed);
let fade = map(bulbul, 0, 50, 255, 0);
textSize(bulbul);

fill(234, 255, 204, fade);
textAlign(CENTER);
text(poem.getString(this.lineno, 0), this.xpos + xgap, this.ypos + (this.lineno*ygap));


}


update(){
this.ypos = this.ypos - this.speed;


}

grow(){
this.fontsize = this.fontsize + this.fontspeed;

}
}



//stars class
class stars{
  constructor(){
    this.posx = random(width);
    this.posy = random(height);
    this.a = random(255);
    this.size = 1;
  }

  make(){
    fill(255, this.a);
    ellipse(this.posx, this.posy, this.size, this.size);
  }

  shimmer(){
    this.a += 5;

    if (this.a > 255){
      this.a = 0;
    }

  }

}
