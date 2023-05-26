class Player {
  constructor(_name, _soju, _gen) {
    this.name = _name;
    this.soju = _soju;
    this.gen = _gen;
    this.alcholblood = 0;
    this.die = false;
  }

  lose() {
    this.alcholblood += 1;
    if (this.alcholblood >= 10) {
      this.die = true;
    }
  }
  display(x, y) {
    console.log("called");
    let path = "player_";
    if (this.gen == "boy") {
      path = path + "m";
    } else if (this.gen == "girl") {
      path = path + "f";
    }
    let a = this.alcholblood - 3;
    path = "Assets/" + path + "_" + a + ".png";
    console.log(path);
    let img = createImg(path);
    imageMode(CENTER);
    image(img, x, y, w * 0.3, w * 0.3);
  }
  gameover() {
    if (this.die) {
    } else {
    }
  }
}
