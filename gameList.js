class gameList {
  constructor(_chars) {
    this.chars = _chars;
    this.turn = 0;
    this.starter = 4;
  }
  display() {
    rectMode(CENTER);
    fill(255);
    rect(w * 0.2, h * 0.2, w * 0.2, h * 0.2);
  }
}
