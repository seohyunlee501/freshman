let mode = 0;
let gameNum = 0;
let chars = [];
let games = [];
let introStory;
let eventStory;

var nameInput;
var sojuInput;
var button;

let w;
let h;

function setup() {
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);
  for (let i = 0; i < 5; i++) {
    //chars[i] = PlayerNPC(random(5, 7), i);
    // if (i == 2) {
    //   chars[i].old = true;
    // }
  }
}

function draw() {
  background(220);
  // start and reset
  if (mode == 0) {
    fill(0);
    rectMode(CENTER);
    rect(0.5 * w, 0.7 * h, 0.3 * w, 0.1 * h);
  } else if (mode != 1 && mode != 6) {
    fill(0);
    rect(0.05 * w, 0.05 * h, 0.05 * w, 0.05 * h);
  }

  switch (mode) {
    case 0:
      break;
    case 1:
      //let player = Player(nameInput, sojuInput);
      introdisplay(w * 0.25, h * 0.5, "boy");
      introdisplay(w * 0.25, h * 0.5, "girl");

      break;
    case 2:
      introStory = story(2);
      introStory.display();
      player.alcholblood += 4;
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      eventStory = story(5);
      story.display();
      break;
    case 6:
      player.gameover();
      break;
  }
}

function mouseClicked() {
  //start button
  if (mode == 0) {
    if (
      mouseX > 0.5 * w - 0.3 * w &&
      mouseX < 0.5 * w + 0.3 * w &&
      mouseY > 0.7 * h - 0.1 * h &&
      mouseY < 0.7 * h + 0.1 * h
    ) {
      mode = 1;
    }
  }
  //reset button
  else if (mode != 1 && mode != 6) {
    if (
      mouseX > 0.05 * w &&
      mouseX < 0.1 * w &&
      mouseY > 0.05 * h &&
      mouseY < 0.1 * h
    ) {
      mode = 0;
    }
  }
  //select player
  if (mode == 1) {
    selectPlayer();
  }
}

function introdisplay(_x, _y, _gen) {
  let x = _x;
  let y = _y;
  push();
  translate(x, y);
  rectMode(CENTER);
  rect(0, 0, 0.3 * w, 0.5 * h);

  pop();
}

function selectPlayer(_x, _y, _gen) {
  let x = _x;
  let y = _y;
  let gen = _gen;
  nameInput = createInput();
  nameInput.position(0, 0);
  button = createButton("submit");
  button.position(160, 30);
  button.mousePressed(setPlayer);

  background(100);
  noStroke();
  text("Enter your name.", 20, 20);
}

function clock() {
  text;
}
