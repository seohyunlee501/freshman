class Game {
  constructor(_idx, _gameList) {
    this.turn = 0;
    this.idx = _idx;
    this.gameList = _gameList;
    this.player = _gameList.player;
    this.chars = _gameList.chars;
    this.gameNum = _gameList.gameNum;
    this.gameName = "";
    this.gameOver = false;
    //everyone list
    this.everyone = _gameList.everyone;
  }
  display() {
    //background
    imageMode(CENTER);
    image(bg, 0.5 * w, 0.5 * h, w, h);

    //title
    rectMode(CORNER);
    fill(112, 173, 71);
    rect(0, 0, w, 0.1 * h);
    fill(0, 64, 0);
    textAlign(LEFT, CENTER);
    textSize(50);
    let temptext = "게임" + this.gameNum + "/6";
    text(temptext, 0.15 * w, 0.05 * h);
    fill(255);
    text(this.gameName, 0.32 * w, 0.05 * h);

    //혈중알콜농도
    textAlign(CENTER);
    textSize(30);
    text("혈중알콜농도", 0.825 * w, 0.25 * h);

    push();
    rectMode(CORNER);
    stroke(255);
    translate(w * 0.8, h * 0.3);
    rect(0, 0, h * 0.1, h * 0.58);
    for (let i = 0; i < this.player.alcholblood; i++) {
      fill(
        120 * (i == 2) + 200 * (i == 3) + 248 * (i >= 4),
        (120 + 40 * i) * (i < 4) + (240 - 40 * (i % 4)) * (i >= 4),
        0
      );
      rect(0.01 * h, 0.5 * h - 0.07 * h * i, 0.08 * h, 0.07 * h);
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
    image(table, 0.2 * w + 0.17 * h * 2.5, 0.6 * h, 0.6 * w, 0.2 * h);
    //bottles
  }

  playerDrinkDisplay() {
    fill(255);
    rectMode(CENTER);
    rect(w / 2, h / 2, w * 0.5, h * 0.65);
    imageMode(CENTER);
    image(player.image[5], w / 2, h / 2, w / 3, w / 3);
  }

  npcDrinkDisplay() {
    fill(255);
    rectMode(CENTER);
    rect(w / 2, h / 2, w * 0.5, h * 0.65);
    imageMode(CENTER);
    if (this.idx == 2) {
      image(imgs_npc["g_7"], w / 2, h / 2, w / 3, w / 3);
    } else if (this.idx == 0) {
      image(imgs_npc["1_7"], w / 2, h / 2, w / 3, w / 3);
    } else if (this.idx == 1) {
      image(imgs_npc["2_7"], w / 2, h / 2, w / 3, w / 3);
    } else if (this.idx == 4) {
      image(imgs_npc["3_7"], w / 2, h / 2, w / 3, w / 3);
    } else if (this.idx == 5) {
      image(imgs_npc["4_7"], w / 2, h / 2, w / 3, w / 3);
    }
  }
}
