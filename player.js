class Player {
  constructor(_name, _soju) {
    this.name = _name;
    this.soju = _soju;
    this.gen = 0;
    this.alcholblood = 0;
    this.die = false;
  }

  lose() {
    this.alcholblood += 1;
    if (this.alcholblood >= 10) {
      this.die = true;
    }
  }
  display() {}
  gameover() {
    if (this.die) {
    } else {
    }
  }
}
