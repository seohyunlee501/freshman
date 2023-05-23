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
  display() {
    if (this.gen == "boy") {
    } else if (this.gen == "girl") {
    }
  }
  gameover() {
    if (this.die) {
    } else {
    }
  }
}
