class Game {
  constructor(_idx, _player, _chars) {
    console.log("called");
    this.turn = 0;
    this.idx = _idx;
    this.player = _player;
    this.chars = _chars;
    this.bg = loadImage("Assets/background.png");
    this.table = loadImage("Assets/desk.png");
  }
  display() {
    //background
    imageMode(CENTER);
    image(this.bg, 0.5 * w, 0.5 * h, w, h);

    //title
    rectMode(CORNER);
    fill(112, 173, 71);
    rect(0, 0, w, 0.1 * h);

    //혈중알콜농도
    textAlign(CENTER);
    textSize(20);
    text("혈중알콜농도", 0.9 * w, 0.2 * h);
    push();
    rectMode(CENTER);
    translate(w * 0.9, h * 0.6);
    rect(0, 0, w * 0.1, h * 0.6);

    for (let i = 0; i < this.player.alcholblood; i++) {
      fill(i, 255 - i, 0);
      rect(0, i / 10, 0.1 * w, 0.1 * h);
    }
    pop();

    //chars
    for (let j = 0; j < 5; j++) {
      this.chars[j].display(0.2 * w * (j + 1), 0.2 * h);
    }
    //player

    //table
    imageMode(CENTER);
    image(this.table, 0.4 * w, 0.5 * h);
    //bottles
  }
}
