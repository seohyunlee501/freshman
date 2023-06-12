class Game {
  constructor(_idx, _gameList) {
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
    //everyone list
    this.everyone = _gameList.everyone;
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
    textSize(30);
    text("혈중알콜농도", 0.825 * w, 0.25 * h);

    push();
    rectMode(CORNER);
    translate(w * 0.8, h * 0.3);
    rect(0, 0, h * 0.1, h * 0.6);
    for (let i = 0; i < this.player.alcholblood; i++) {
      fill(
        120 * (i == 2) + 200 * (i == 3) + 248 * (i >= 4),
        (120 + 40 * i) * (i < 4) + (240 - 40 * (i % 4)) * (i >= 4),
        0
      );
      rect(0.01 * h, 0.52 * h - 0.07 * h * i, 0.08 * h, 0.07 * h);
    }
    pop();

    //chars
    for (let j = 0; j < 6; j++) {
      if (this.idx == j) {
        image(arrow, 0.2 * w + 0.17 * h * j, 0.35 * h);
      }
      this.everyone[j].display(0.2 * w + 0.17 * h * j, 0.45 * h);
    }
    //table
    imageMode(CENTER);
    image(this.table, 0.4 * w, 0.6 * h);
    //bottles
  }
}
