class Story {
  constructor(_mode, _player) {
    this.mode = _mode;
    console.log("mode:", mode);
    this.player = _player;
  }
  display() {
    if (this.mode == 2) {
      // 도입 story
      console.log("story 2");
      mode = 3;
    } else if (this.mode == 5) {
      // 고학번 story
      console.log("story 5");
    }
  }
}
