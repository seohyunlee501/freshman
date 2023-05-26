class Story {
  constructor(_mode, _player) {
    this.mode = _mode;
    console.log("mode:", mode);
    this.player = _player;
  }
  display() {
    if (this.mode == 2) {
      // 지각주 story
      this.player.alcholblood += 4;
    } else if (this.mode == 5) {
      // 고학번 story
    }
  }
}
