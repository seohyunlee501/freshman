class gameList {
  constructor(_chars, _player) {
    this.chars = _chars;
    this.player = _player;
    this.turn = 0;
    this.starter = 4;
  }
  display() {
    rectMode(CENTER);
    fill(255);
    rect(w * 0.25, h * 0.4, w * 0.25, h * 0.3);
    rect(w * 0.5, h * 0.4, w * 0.25, h * 0.3);
    rect(w * 0.75, h * 0.4, w * 0.25, h * 0.3);
    rect(w * 0.25, h * 0.7, w * 0.25, h * 0.3);
    rect(w * 0.5, h * 0.7, w * 0.25, h * 0.3);
    rect(w * 0.75, h * 0.7, w * 0.25, h * 0.3);
  }
}
