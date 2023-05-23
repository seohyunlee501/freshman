class PlayerNPC {
  constructor(_soju, _idx) {
    this.soju = _soju;
    this.idx = _idx;
    this.alcholblood = 0;
    this.die = false;
    this.old = false;
  }
  old() {
    this.old = true;
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
