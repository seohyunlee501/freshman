let mode = 0;

let introStory;
let eventStory;

let chars = [];
let player;
let gender;
let bSelecting = false;
let gSelecting = false;

var nameInput;
var sojuInput;
var button;

let gameSelect;
let nowGame;
let idx = 0;

let w;
let h;

let retroFont;
let movieFont;

let playerimg, bImg, gImg;
let title;
let cursor, cursor_clicked;

function preload() {
  retroFont = loadFont("fonts/DungGeunMo.ttf");
  movieFont = loadFont("fonts/a시네마M.ttf");
  bImg = loadImage("Assets/player_m_1.png");
  gImg = loadImage("Assets/player_f_1.png");
  title = loadImage("Assets/title.png");
  cursor = loadImage("Assets/cursor.png");
  cursor_clicked = loadImage("Assets/cursor_clicked.png");
  reset = loadImage("Assets/reset.png");
  handimg = [];
  for (let i = 0; i < 5; i++) {
    let temp = "Assets/hand_" + (i + 1) + ".png";
    handimg[i] = loadImage(temp);
    //console.log(temp);
  }
}

function setup() {
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);
  nameInput = createInput();
  sojuInput = createInput();
  button = createButton("submit");
  noCursor();
}

function draw() {
  background(0, 64, 0);
  console.log(mode);
  textFont(retroFont);
  textAlign(CENTER, CENTER);

  switch (mode) {
    case 0:
      //start button
      fill(0);
      rectMode(CENTER);
      rect(0.5 * w, 0.7 * h, 0.1 * w, 0.1 * h);
      //title image
      push();
      translate(w * 0.5, h * 0.4);
      imageMode(CENTER);
      image(title, 0, 0, 0.916 * w * 0.5, 0.491 * w * 0.5);
      pop();
      fill(255);
      textSize(50);
      text("START", 0.5 * w, 0.71 * h);
      break;
    case 1:
      introdisplay(w * 0.3, h * 0.5, "boy");
      introdisplay(w * 0.7, h * 0.5, "girl");
      break;
    case 2:
      bSelecting = false;
      gSelecting = false;
      textFont(movieFont);
      introStory = new Story(2, player);
      introStory.display();
      for (let i = 1; i < 5; i++) {
        chars[i - 1] = new PlayerNPC(int(random(5, 7)), i);
      }
      chars[4] = new PlayerNPC(10, "g");
      let temp = chars[2];
      chars[2] = chars[4];
      chars[4] = temp;
      gameSelect = new gameList(chars, player);
      mode = 3;
      break;
    case 3:
      gameSelect.display();
      //temp = gameSelect.gameNum;
      break;
    case 4:
      nowGame.display();
      nowGame.round();
      if (nowGame.gameOver) {
        idx = nowGame.idx;
        if (gameSelect.gameNum == 5) {
          mode = 5;
        } else {
          mode = 3;
        }
      }
      break;
    case 5:
      textFont(movieFont);
      eventStory = new Story(5, player);
      eventStory.display();
      break;
    case 6:
      player.gameover();
      break;
  }

  // reset button
  if (mode != 0 && mode != 1 && mode != 6) {
    fill(0);
    imageMode(CORNER);
    image(reset, 0.05 * w, 0.05 * h, 0.05 * w, 0.1 * h);
  }

  //cursor
  if (mouseIsPressed) {
    imageMode(CENTER);
    image(cursor_clicked, mouseX, mouseY, 0.1 * h, 0.1 * h);
  } else {
    imageMode(CENTER);
    image(cursor, mouseX, mouseY, 0.1 * h, 0.1 * h);
  }
}

function mousePressed() {
  //game select
  if (mode == 3) {
    if (mouseY > 0.2 * h && mouseY < 0.5 * h) {
      if (mouseX > 0.13 * w && mouseX < 0.37 * w) {
        nowGame = new berryGame(idx, gameSelect);
        mode = 4;
      } else if (mouseX > 0.38 * w && mouseX < 0.62 * w) {
        nowGame = new eyeGame(idx, gameSelect);
        mode = 4;
      } else if (mouseX > 0.63 * w && mouseX < 0.87 * w) {
        nowGame = new brGame(idx, gameSelect);
        mode = 4;
      }
    } else if (mouseY > 0.52 * h && mouseY < 0.82 * h) {
      if (mouseX > 0.13 * w && mouseX < 0.37 * w) {
        nowGame = new subwayGame(idx, gameSelect);
        mode = 4;
      } else if (mouseX > 0.38 * w && mouseX < 0.62 * w) {
        nowGame = new doobooGame(idx, gameSelect);
        mode = 4;
      } else if (mouseX > 0.63 * w && mouseX < 0.87 * w) {
        nowGame = new baboGame(idx, gameSelect);
        mode = 4;
      }
    }
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
