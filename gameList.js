class gameList {
  constructor(_chars, _player) {
    this.chars = _chars;
    this.player = _player;
    this.gameNum = 1;
  }
  display() {
    textAlign(CENTER, CENTER);
    textSize(30);
    let choose = "게임" + this.gameNum + " 선택";
    text(choose, 0.5 * w, 0.1 * h);
    rectMode(CENTER);
    fill(255);
    rect(w * 0.25, h * 0.35, w * 0.24, h * 0.3);
    rect(w * 0.5, h * 0.35, w * 0.24, h * 0.3);
    rect(w * 0.75, h * 0.35, w * 0.24, h * 0.3);
    rect(w * 0.25, h * 0.67, w * 0.24, h * 0.3);
    rect(w * 0.5, h * 0.67, w * 0.24, h * 0.3);
    rect(w * 0.75, h * 0.67, w * 0.24, h * 0.3);
    textAlign(LEFT, CENTER);
    textSize(20);
    text("혈중알콜농도", 0.13 * w, 0.9 * h);
    rectMode(CORNER);
    rect(w * 0.27, h * 0.86, w * 0.6, h * 0.08);
    let p = this.player;
    p.display(w * 0.87, 0.9 * h);
  }
}
