class Story {
  constructor(_mode, _player) {
    this.mode = _mode;
    console.log("mode:", mode);
    this.player = _player;
  }
  display() {
    if (this.mode == 2) {
      // 도입 story
      console.log("도입 story");
      imageMode(CENTER);
      console.log("이미지 모드 확인");
      image(bg2, w * 0.5, h * 0.5, w, h);
      console.log("이미지 로딩 확인");
      // 플레이어 이미지
      image(npc1Img[0], w * 0.8, h * 0.5, w * 0.3, h * 0.3);
      fill(0);
      rectMode(CENTER);
      rect(w * 0.5, h * 0.1, w, h * 0.2);
      rect(w * 0.5, h * 0.1, w, h * 0.2);
      fill(255);
      textMode(CENTER);
      textSize(30);
      text(
        this.player.name +
          "아 그거 알아? 오늘 수업 끝나고 신입생 환영회가 있대!",
        w * 0.5,
        h * 0.9
      );
      // mode = 3;
    } else if (this.mode == 5) {
      // 고학번 story
    }
  }
}
