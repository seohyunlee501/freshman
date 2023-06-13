let mode = 0;

let introStory;
let eventStory;
let story;

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
let arrow, bubble_l, bubble_r;
let bg2, bg2_1, bg5;
let imgs_npc = [];
let imgs_player = [];
let subwayInput;
let subwayButton;
let startButton;

function preload() {
  carrot = loadImage("Assets/button_carrot.png");
  k_melon = loadImage("Assets/button_k-melon.png");
  melon = loadImage("Assets/button_melon.png");
  watermelon = loadImage("Assets/button_watermelon.png");
  strawberry = loadImage("Assets/button_strawberry.png");
  retroFont = loadFont("fonts/DungGeunMo.ttf");
  movieFont = loadFont("fonts/a시네마M.ttf");
  startButton = loadImage("Assets/button.png");
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
  }
  gameButton = [];
  for (let j = 0; j < 6; j++) {
    let temp = "Assets/gamebutton_" + (j + 1) + ".png";
    gameButton[j] = loadImage(temp);
  }
  bg2 = loadImage("Assets/background_mode2.jpg");
  bg2_1 = loadImage("Assets/background_mode2_1.jpg");
  bg5 = loadImage("Assets/background_mode5.jpg");
  soju_img = loadImage("Assets/soju_1.png"); // 빨뚜
  soju_img_g = loadImage("Assets/soju_2.png"); // 초록뚜껑
  item_img = loadImage("Assets/item_1.png");
  imgs_npc["g_1"] = loadImage("Assets/npc_g_1.png");
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 6; j++) {
      let idx = `${i}_${j}`;
      imgs_npc[idx] = loadImage(`Assets/npc_${idx}.png`);
    }
  }
  for (let i = 1; i <= 5; i++) {
    imgs_player[`m_${i}`] = loadImage(`Assets/player_m_${i}.png`);
    imgs_player[`f_${i}`] = loadImage(`Assets/player_f_${i}.png`);
  }
  arrow = loadImage("Assets/arrow.png");
  bubble_l = loadImage("Assets/bubble_left.png");
  bubble_r = loadImage("Assets/bubble_right.png");
}

function setup() {
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);
  nameInput = createInput();
  sojuInput = createInput();
  button = createButton("submit");
  //noCursor();
  story = new Story();

  subwayInput = createInput();
  subwayInput.size(w / 10);
  subwayInput.position(w * 0.45, h * 0.55);
  subwayInput.hide();
  subwayButton = createButton("확인");
  subwayButton.position(w * 0.47, h * 0.63);
  subwayButton.hide();
}

function draw() {
  background(0, 64, 0);
  console.log(mode);
  textFont(retroFont);
  textAlign(CENTER, CENTER);

  switch (mode) {
    case 0:
      //start button
      imageMode(CENTER);
      image(startButton, 0.5 * w, 0.81 * h, 0.1 * w, 0.1 * w);
      fill(252, 212, 0);
      textSize(50);
      textAlign(CENTER, CENTER);
      textFont(movieFont);
      text("▶", 0.5 * w, 0.805 * h);
      fill(255);
      textFont(retroFont);
      text("PRESS HERE TO START", 0.5 * w, 0.7 * h);
      //title image
      push();
      translate(w * 0.5, h * 0.4);
      imageMode(CENTER);
      image(title, 0, 0, 0.916 * w * 0.5, 0.491 * w * 0.5);
      pop();
      break;
    case 1:
      textAlign(CENTER);
      textSize(50);
      fill(255);
      text("select your character.", w * 0.5, h * 0.15);
      introdisplay(w * 0.3, h * 0.5, "boy");
      introdisplay(w * 0.7, h * 0.5, "girl");
      break;
    case 2:
      bSelecting = false;
      gSelecting = false;
      textFont(movieFont);
      story.drawScene();
      break;
    case 3:
      imageMode(CENTER);
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
      // eventStory = new Story(5, player);
      story.drawScene();
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

  // //cursor
  // if (mouseIsPressed) {
  //   imageMode(CORNER);
  //   image(cursor_clicked, mouseX, mouseY, 0.07 * h, 0.07 * h);
  //   imageMode(CENTER);
  // } else {
  //   imageMode(CORNER);
  //   image(cursor, mouseX, mouseY, 0.07 * h, 0.07 * h);
  //   imageMode(CENTER);
  // }

  // subwayGame setup
  if (mode == 4 && nowGame.gameName == "지하철게임") {
    if (nowGame.playerInput == true) {
      fill(255);
      rectMode(CENTER);
      rect(w / 2, h / 2, w / 2, h / 2);
      fill(0);
      textAlign(CENTER);
      textSize(32);
      text("역 이름을 입력하세요!", w * 0.5, h * 0.45);
      subwayInput.show();
      subwayButton.show();
      subwayButton.mousePressed(saveStations);
    }
  }
}

function mousePressed() {
  if (mode == 4 && nowGame.gameName == "딸기당근수박참외메론") {
    if (mouseY > 0.7 * h && mouseY < 0.9 * h) {
      if (mouseX > 0.02 * w && mouseX < 0.18 * w) {
        nowGame.whatBerry = 1;
      } else if (mouseX > 0.17 * w && mouseX < 0.33 * w) {
        nowGame.whatBerry = 2;
      } else if (mouseX > 0.32 * w && mouseX < 0.48 * w) {
        nowGame.whatBerry = 3;
      } else if (mouseX > 0.47 * w && mouseX < 0.63 * w) {
        nowGame.whatBerry = 4;
      } else if (mouseX > 0.62 * w && mouseX < 0.78 * w) {
        nowGame.whatBerry = 5;
      }
    }
  }
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
  if ((mode == 2 || mode == 5) && story) {
    if (story.scene === "2-4") {
      for (let i = 1; i < 5; i++) {
        chars[i - 1] = new PlayerNPC(int(random(5, 7)), i);
      }
      chars[4] = new PlayerNPC(10, "g");
      let temp = chars[2];
      chars[2] = chars[4];
      chars[4] = temp;
      gameSelect = new gameList(chars, player);
      gameSelect.player.alcholblood += 4;
    }
    story.mousePressed();
  }
  //start button
  if (mode == 0) {
    if (
      mouseX > 0.5 * w - 0.1 * w &&
      mouseX < 0.5 * w + 0.1 * w &&
      mouseY > 0.81 * h - 0.1 * w &&
      mouseY < 0.81 * h + 0.1 * w
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
      if (mode == 3) {
        mode = 0;
      } else {
        mode = 3;
      }
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
  fill(255, 255, 255, 150);
  rect(x, y, 0.3 * w, 0.5 * h);

  if (_gen == "boy") {
    playerimg = bImg;
  } else if (_gen == "girl") {
    playerimg = gImg;
  }
  imageMode(CENTER);
  image(playerimg, x, y, playerimg.width * 1.2, playerimg.height * 1.2);
  if ((bSelecting && _gen == "boy") || (gSelecting && _gen == "girl")) {
    fill(0, 0, 0, 100);
    push();
    strokeWeight(5);
    rectMode(CENTER);
    rect(x, y, 0.3 * w, 0.5 * h);
    fill(255);
    textAlign(LEFT, TOP);
    textSize(30);
    text("이름:", x - w * 0.13, 0.4 * h);
    text("주량(잔):", x - w * 0.13, 0.5 * h);
    pop();
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
  //player.set(name, soju, gender);
  //console.log(name, soju, gender);
  nameInput.value("");
  sojuInput.value("");
  nameInput.hide();
  sojuInput.hide();
  button.hide();
  mode = 2;
}

function keyPressed() {
  if (mode == 4 && nowGame.gameName == "배스킨 라빈스 31") {
    console.log("key pressed");
    console.log(keyCode);
    if (keyCode === 49 || keyCode === 97) {
      nowGame.temp = 1;
    } else if (keyCode === 50 || keyCode === 98) {
      nowGame.temp = 2;
    } else if (keyCode === 51 || keyCode === 99) {
      nowGame.temp = 3;
    }
  }
  if (mode == 4 && nowGame.gameName == "눈치게임") {
    if (keyCode === 13) {
      nowGame.interruption = true;
    }
  }
  if (
    mode == 4 &&
    nowGame.gameName == "지하철게임" &&
    nowGame.lineSelected == false
  ) {
    console.log(keyCode);
    if (keyCode === 50 || keyCode === 98) {
      nowGame.lineSelection = 2;
    } else if (keyCode === 51 || keyCode === 99) {
      nowGame.lineSelection = 3;
    } else if (keyCode === 52 || keyCode === 100) {
      nowGame.lineSelection = 4;
    } else {
      nowGame.lineSelection = -1;
    }
  }
  if (mode == 4 && nowGame.gameName == "두부게임") {
    console.log("key pressed");
    console.log(keyCode);
    if (keyCode === 48 || keyCode === 96) {
      nowGame.temp = 0;
    } else if (keyCode === 49 || keyCode === 97) {
      nowGame.temp = 1;
    } else if (keyCode === 50 || keyCode === 98) {
      nowGame.temp = 2;
    } else if (keyCode === 51 || keyCode === 99) {
      nowGame.temp = 3;
    } else if (keyCode === 52 || keyCode === 100) {
      nowGame.temp = 4;
    } else if (keyCode === 53 || keyCode === 101) {
      nowGame.temp = 5;
    } else if (keyCode === 54 || keyCode === 102) {
      nowGame.temp = 6;
    } else if (keyCode === 55 || keyCode === 103) {
      nowGame.temp = 7;
    } else if (keyCode === 56 || keyCode === 104) {
      nowGame.temp = 8;
    } else if (keyCode === 57 || keyCode === 105) {
      nowGame.temp = 9;
    }
  }
}

function saveStations() {
  nowGame.stationName = subwayInput.value();
  nowGame.stationIdx = nowGame.stationList[nowGame.currentLine].indexOf(
    nowGame.stationName
  );
  subwayInput.value("");
  subwayInput.hide();
  subwayButton.hide();
  nowGame.playerCurrentTime = millis();
  nowGame.playerStarted = true;
  nowGame.playerInput = false;
}
