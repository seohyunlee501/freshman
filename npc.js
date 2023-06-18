class PlayerNPC {
  constructor(_soju, _idx) {
    //console.log("npc called");
    this.soju = _soju;
    this.idx = _idx;
    this.alcholblood = 0;
    this.die = false;
    if (this.idx == "g") {
      this.old = true;
    } else {
      this.old = false;
    }

    this.image = [];

    let path = "npc_";
    path = path + this.idx;

    let temp = path;
    if (this.old) {
      path = "Assets/" + temp + "_1.png";
      this.image[0] = imgs_npc["g_1"];
    } else {
      for (let i = 0; i < 5; i++) {
        //path = "Assets/" + temp + "_" + (i + 1) + ".png";
        this.image[i] = imgs_npc[`${this.idx}_${i + 1}`];
      }
    }
  }
  lose() {
    if (this.idx != "g") {
      this.alcholblood += 1;
      if (this.alcholblood >= this.soju) {
        this.die = true;
      }
    }
  }
  display(x, y) {
    //console.log("who?", this.idx);
    //console.log("alcholblood:", this.alcholblood);
    let img = this.image[this.alcholblood];
    //console.log("who?", this.idx);
    imageMode(CENTER);
    //console.log("who?", this.idx);
    image(img, x, y, h * 0.3, h * 0.3);
  }
}
