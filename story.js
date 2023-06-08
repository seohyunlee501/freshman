class Story {
  constructor(_mode, _player) {
    this.mode = _mode;
    console.log("mode:", mode);
    this.player = _player;
    this.input;
    this.submitButton;
    this.playerInput = "";
  }
  display() {
    if (this.mode == 2) {
      // 도입 story
      console.log("도입 story");
      imageMode(CENTER);
      image(bg2, w * 0.5, h * 0.5, w, h);
      // 플레이어 이미지 추가하기
      rectMode(CENTER);
      fill(0);
      rect(w * 0.5, h * 0.1, w, h * 0.2);
      rect(w * 0.5, h * 0.9, w, h * 0.2);
      fill(255);
      textAlign(CENTER);
      textSize(50);

      text(
        "내 이름은 " + this.player.name + ". 드디어 서울대학교에 입학했다.",
        w * 0.5,
        h * 0.9
      );

      fill(0);
      rect(w * 0.5, h * 0.9, w, h * 0.2);
      text(
        "- " +
          this.player.name +
          "아 그거 알아? 오늘 수업 끝나고 신입생 환영회가 있대!",
        w * 0.5,
        h * 0.9
      );

      fill(0);
      rect(w * 0.5, h * 0.9, w, h * 0.2);
      text("헉 정말? 나 술게임 잘 모르는데 어떡하지?", w * 0.5, h * 0.9);

      image(bg2_1, w * 0.5, h * 0.5, w, h);
      fill(0);
      rect(w * 0.5, h * 0.1, w, h * 0.2);
      rect(w * 0.5, h * 0.9, w, h * 0.2);
      text(
        "- 어허 신입생이 늦으면 어떡하나! 바로 한 잔 마셔~!",
        w * 0.5,
        h * 0.9
      );

      console.log("story 2 종료");
      
    }  else if (this.mode == 5) { 
      // 고학번 story
      console.log("고학번");
      imageMode(CENTER);
      image(bg5, w * 0.5, h * 0.5, w, h);
      rectMode(CENTER);
      fill(0);
      rect(w * 0.5, h * 0.1, w, h * 0.2);
      rect(w * 0.5, h * 0.9, w, h * 0.2);
      fill(255);
      textAlign(CENTER);
      textSize(50);

      text(
        "- " + this.player.name + "아 많이 취한 것 같은데 괜찮아?",
        w * 0.5,
        h * 0.9
      );

      fill(0);
      rect(w * 0.5, h * 0.9, w, h * 0.2);
      fill(255);
      text("- 혹시 내가 몇 학번인지 아니?", w * 0.5, h * 0.9);

      // 입력란 생성
      if (!this.input) {
        this.input = createInput();
        this.input.position(w * 0.5 - 50, h * 0.5 - 10);
        this.input.size(100, 20);
      }

      // 제출 버튼 생성
      if (!this.submitButton) {
        this.submitButton = createButton("학번");
        this.submitButton.position(w * 0.5 + 60, h * 0.5 - 10);
        this.submitButton.mousePressed(() => {
          this.playerInput = this.input.value();
          console.log("플레이어 입력:", this.playerInput);

          if (this.playerInput < 19) {
            fill(0);
            rect(w * 0.5, h * 0.9, w, h * 0.2);
            fill(255);
            text("- ... 그 정도는 아니야.", w * 0.5, h * 0.9);
            // 플레이어 알콜지수 증가
            console.log("알콜지수 증가");
          } else if (this.playerInput == 19) {
            fill(0);
            rect(w * 0.5, h * 0.9, w, h * 0.2);
            fill(255);
            text(
              "- 오 똑똑한데? 이거, 숙취해소제 하나 먹어.",
              w * 0.5,
              h * 0.9
            );
            // 플레이어 알콜지수 감소
            console.log("알콜지수 감소");
          } else {
            fill(0);
            rect(w * 0.5, h * 0.9, w, h * 0.2);
            fill(255);
            text("- 젊게 봐줘서 고맙지만, 틀렸어.", w * 0.5, h * 0.9);
            // 플레이어 알콜지수 증가
            console.log("알콜지수 증가");
          }

          // 다음 모드로 변경
        });
      }
    }
  }
}
