let mode = 1;
let gameNum = 0;
let char = [];
let games = [];
let introStory;
let eventStory;

var nameInput;
var sojuInput;
var button;

let w = windowWidth;
let h = windowHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  switch (mode) {
    case 0:
      break;
    case 1:
      introdisplay(w * 0.2, h * 0.3, "boy");
      introdisplay(w * 0.7, h * 0.3, "girl");
      let player = Player(nameInput, sojuInput);
      break;
    case 2:
      introStory = story(2);
      introStory.display();
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
  if (mode == 0) {
  } else {
    if (reset) {
      mode = 0;
    }
  }
}

function introdisplay(_x, _y, _gen) {
  push();
  translate(_x, _y);
  nameInput = createInput();
  nameInput.position(20, 30);
  button = createButton("submit");
  button.position(160, 30);
  button.mousePressed(drawName);

  background(100);
  noStroke();
  text("Enter your name.", 20, 20);
  if (_gen == "boy") {
  } else if (_gen == "girl") {
  }
  pop();
}
