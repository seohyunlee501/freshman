class Player {
  constructor(_name, _soju) {
    this.name = _name;
    this.soju = _soju;
    this.gen = 0;
    this.alcholblood = 0;
    this.die = false;
  }
  player() {
    this.npc = false;
  }
  lose() {
    this.alcholblood += 1;
    if (this.alcholblood >= 10) {
      this.die = true;
    }
  }
  display() {
    if (this.old) {
      switch (this.alcholblood) {
        case 0:
          break;
      }
    } else if (this.gen == 0) {
      switch (this.alcholblood) {
        case 0:
          break;
      }
    } else {
      switch (this.alcholblood) {
        case 0:
          break;
      }
    }
  }
}
