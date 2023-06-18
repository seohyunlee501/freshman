class Player {
  constructor(_name, _soju, _gen) {
    this.alcholblood = 0;
    this.die = false;
    this.image = [];
    this.image_y = [];
    this.set(_name, _soju, _gen);
  }

  set(_name, _soju, _gen) {
    this.name = _name;
    this.soju = _soju;
    this.gen = _gen;
    let gKey = "";
    if (this.gen == "boy") {
      gKey = "m";
    } else if (this.gen == "girl") {
      gKey = "f";
    }
    for (let i = 0; i < 5; i++) {
      this.image[i] = imgs_player[`${gKey}_${i + 1}`];
      this.image_y[i] = imgs_player[`${gKey}_${i + 1}_y`];
    }
    this.image[5] = imgs_player[`${gKey}_7_y`];
  }

  lose() {
    this.alcholblood++;
  }
  display(x, y) {
    let a = this.alcholblood - 3;
    let img;
    if(this.alcholblood < 8){
      img = this.image[a];
    } else {
      img = this.image[4];
    }
    imageMode(CENTER);
    image(img, x, y, h * 0.3, h * 0.3);
  }
  displaybig(x, y) {
    let a = this.alcholblood - 3;
    let img;
    if(this.alcholblood < 8){
      img = this.image[a];
    } else {
      img = this.image[4];
    }
    imageMode(CENTER);
    image(img, x, y, w * 0.3, w * 0.3);
  }
  gameover() {
    if (this.die) {
      imageMode(CENTER);
      image(gameLostImage, w / 2, h / 2, w, h);
      imageMode(CENTER);
      push();
      scale(6, -6);
      image(this.image[4], w * 0.8 / 6, -h * 0.2 / 6);
      pop();
    } else {
      imageMode(CENTER);
      image(gameWinImage, w / 2, h / 2, w, h);
      imageMode(CENTER);
      let a = this.alcholblood - 3;
      let img = this.image[a];
      image(img, w * 0.73, h * 0.75, w * 0.8 , w * 0.8);
    }
  }
}
