class Game {
  constructor(_idx, _gameList) {
    console.log("called");
    this.turn = 0;
    this.idx = _idx;
    this.gameList = _gameList;
    this.player = _gameList.player;
    this.chars = _gameList.chars;
    this.gameNum = _gameList.gameNum;
    this.bg = loadImage("Assets/background.png");
    this.table = loadImage("Assets/desk.png");
    this.gameName = "";
    this.gameOver = false;
  }
  display() {
    //background
    imageMode(CENTER);
    image(this.bg, 0.5 * w, 0.5 * h, w, h);

    //title
    rectMode(CORNER);
    fill(112, 173, 71);
    rect(0, 0, w, 0.1 * h);
    fill(0, 64, 0);
    textAlign(LEFT, CENTER);
    textSize(50);
    let temptext = "게임" + this.gameNum;
    text(temptext, 0.15 * w, 0.05 * h);
    fill(255);
    text(this.gameName, 0.25 * w, 0.05 * h);

    //혈중알콜농도
    textAlign(CENTER);
    textSize(20);
    text("혈중알콜농도", 0.9 * w, 0.25 * h);
    push();
    rectMode(CENTER);
    translate(w * 0.9, h * 0.6);
    rect(0, 0, w * 0.05, h * 0.6);

    for (let i = 0; i < this.player.alcholblood; i++) {
      fill(10 * i, 255 - 10 * i, 0);
      rect(0, i / 10, 0.05 * w, 0.1 * h);
    }
    pop();

    //chars
    for (let j = 0; j < 5; j++) {
      this.chars[j].display(0.2 * w * (j + 1), 0.2 * h);
    }
    //player

    //table
    imageMode(CENTER);
    image(this.table, 0.4 * w, 0.6 * h);
    //bottles
  }
}
