let mode = 0;
let chars = [];
let introStory;
let eventStory;
let player;
let gender;
let gameSelect;
let bSelecting = false;
let gSelecting = false;

var nameInput;
var sojuInput;
var button;

let w;
let h;

let retroFont;
let movieFont;

let playerimg, bImg, gImg;

function preload() {
  retroFont = loadFont("fonts/DungGeunMo.ttf");
  movieFont = loadFont("fonts/a시네마M.ttf");
  bImg = loadImage("Assets/player_m_1.png");
  gImg = loadImage("Assets/player_f_1.png");
}

function setup() {
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);
  nameInput = createInput();
  sojuInput = createInput();
  button = createButton("submit");
}

function draw() {
  background(0, 64, 0);
  console.log(mode);
  textFont(retroFont);
  textAlign(CENTER, CENTER);
  // start and reset
  if (mode == 0) {
    fill(0);
    rectMode(CENTER);
    rect(0.5 * w, 0.7 * h, 0.1 * w, 0.1 * h);
  } else if (mode != 1 && mode != 6) {
    fill(0);
    rectMode(CORNER);
    rect(0.05 * w, 0.05 * h, 0.05 * w, 0.1 * h);
    fill(255);
    textSize(20);
    text("<-", 0.075 * w, 0.1 * h);
  }

  switch (mode) {
    case 0:
      push();
      translate(w * 0.5, h * 0.5);
      fill(255);
      textSize(50);
      text("모두를 위한 술게임 안내서", 0, 0);
      textSize(30);
      text("START", 0, 0.21 * h);
      pop();

      break;
    case 1:
      introdisplay(w * 0.3, h * 0.5, "boy");
      introdisplay(w * 0.7, h * 0.5, "girl");
      break;
    case 2:
      bSelecting = false;
      gSelecting = false;
      textFont(movieFont);
      introStory = new Story(2);
      introStory.display();
      player.alcholblood += 4;
      for (let i = 0; i < 5; i++) {
        chars[i] = new PlayerNPC(random(5, 7), i);
      }
      gameSelect = new gameList(chars, player);
      mode = 3;
      break;
    case 3:
      gameSelect.display();
      break;
    case 4:
      break;
    case 5:
      textFont(movieFont);
      eventStory = new Story(5);
      eventStory.display();
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
      mouseY < 0.15 * h
    ) {
      mode = 0;
    }
  }
  //select player
  if (mode == 1) {
    if (
      mouseX > 0.15 * w &&
      mouseX < 0.45 * w &&
      mouseY > 0.25 * h &&
      mouseY < 0.75 * h
    ) {
      bSelecting = true;
      gSelecting = false;

      selectPlayer("boy");
    } else if (
      mouseX > 0.55 * w &&
      mouseX < 0.95 * w &&
      mouseY > 0.25 * h &&
      mouseY < 0.75 * h
    ) {
      bSelecting = false;
      gSelecting = true;

      selectPlayer("girl");
    }
  }
}

//mode 1
function introdisplay(_x, _y, _gen) {
  let x = _x;
  let y = _y;
  rectMode(CENTER);
  fill(255);
  rect(x, y, 0.3 * w, 0.5 * h);

  if (_gen == "boy") {
    playerimg = bImg;
  } else if (_gen == "girl") {
    playerimg = gImg;
  }
  imageMode(CENTER);
  image(playerimg, x, y, playerimg.width, playerimg.height);
  if ((bSelecting && _gen == "boy") || (gSelecting && _gen == "girl")) {
    fill(0);
    rectMode(CENTER);
    rect(x, y, 0.3 * w, 0.5 * h);
    fill(255);
    textAlign(LEFT, TOP);
    textSize(15);
    text("이름:", x - w * 0.13, 0.4 * h);
    text("주량(잔):", x - w * 0.13, 0.5 * h);
  }
}
function selectPlayer(_gen) {
  if (_gen == "boy") {
    fill(255);
    nameInput.position(0.25 * w, 0.4 * h);
    sojuInput.position(0.25 * w, 0.5 * h);
    button.position(0.28 * w, 0.65 * h);
    gender = "boy";
  } else if (_gen == "girl") {
    nameInput.position(0.65 * w, 0.4 * h);
    sojuInput.position(0.65 * w, 0.5 * h);
    button.position(0.68 * w, 0.65 * h);
    gender = "girl";
  }
  button.mousePressed(setPlayer);
}
function setPlayer() {
  let name = nameInput.value();
  let soju = sojuInput.value();
  player = new Player(name, soju, gender);
  nameInput.value("");
  sojuInput.value("");
  nameInput.position(-0.25 * w, -0.4 * h);
  sojuInput.position(-0.25 * w, -0.5 * h);
  button.position(-0.68 * w, -0.65 * h);
  mode = 2;
}
