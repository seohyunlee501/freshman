class Player {
  constructor(_name, _soju, _gen) {
    this.name = _name;
    this.soju = _soju;
    this.gen = _gen;
    this.alcholblood = 0;
    this.die = false;
    this.image = [];
    let path = "player_";
    if (this.gen == "boy") {
      path = path + "m";
    } else if (this.gen == "girl") {
      path = path + "f";
    }
    let temp = path;
    for (let i = 0; i < 5; i++) {
      path = "Assets/" + temp + "_" + (i + 1) + ".png";
      this.image[i] = loadImage(path);
    }
  }

  lose() {
    this.alcholblood++;
    if (this.alcholblood >= 10) {
      this.die = true;
    }
  }
  display(x, y) {
    let a = this.alcholblood - 3;
    let img = this.image[a];
    imageMode(CENTER);
    image(img, x, y, h * 0.3, h * 0.3);
  }
  displaybig(x, y) {
    let a = this.alcholblood - 3;
    let img = this.image[a];
    imageMode(CENTER);
    image(img, x, y, w * 0.3, w * 0.3);
  }
  gameover() {
    if (this.die) {
      imageMode(CENTER);
      image(gameLost, w / 2, h / 2, w, h);
      imageMode(CENTER);
      push();
      scale(1, -1);
      translate(0, height);
      image(this.image[5], w * 0.8, -h * 0.8);
      pop();
    } else {
    }
  }
}
