class gameList {
  constructor(_chars, _player) {
    console.log("gameList called");
    this.chars = _chars;
    this.player = _player;
    this.gameNum = 1;
    this.everyone = this.chars;
    let temp = this.everyone[3];
    this.everyone[3] = this.player;
    this.everyone[5] = temp;
  }
  display() {
    //title
    rectMode(CORNER);
    fill(112, 173, 71);
    rect(0, 0, w, 0.1 * h);
    fill(0, 64, 0);
    textAlign(CENTER, CENTER);
    textSize(50);
    let choose = "게임" + this.gameNum + " 선택";
    text(choose, 0.5 * w, 0.05 * h);
    rectMode(CENTER);
    fill(255);

    //게임 선택창
    image(gameButton[0], w * 0.25, h * 0.35, w * 0.24, h * 0.3);
    image(gameButton[1], w * 0.5, h * 0.35, w * 0.24, h * 0.3);
    image(gameButton[2], w * 0.75, h * 0.35, w * 0.24, h * 0.3);
    image(gameButton[3], w * 0.25, h * 0.67, w * 0.24, h * 0.3);
    image(gameButton[4], w * 0.5, h * 0.67, w * 0.24, h * 0.3);
    image(gameButton[5], w * 0.75, h * 0.67, w * 0.24, h * 0.3);

    //혈중알콜농도
    textAlign(LEFT, CENTER);
    textSize(30);
    text("혈중알콜농도", 0.13 * w, 0.9 * h);

    push();
    rectMode(CORNER);
    fill(255);
    translate(w * 0.27, h * 0.86);
    rect(0, 0, w * 0.6, h * 0.08);
    for (let i = 0; i < this.player.alcholblood; i++) {
      fill(10 * i, 255 - 10 * i, 50);
      rect(0.005 * h + 0.05 * i, 0.005 * h, 0.045 * w, 0.07 * h);
    }
    pop();

    //player
    this.player.displaybig(w * 0.87, 0.9 * h);
  }
}
