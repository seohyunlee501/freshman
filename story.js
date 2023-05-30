class Story {
  constructor(_mode, _player) {
    this.mode = _mode;
    console.log("mode:", mode);
    this.player = _player;
    this.background2_0 = loadImage("assets/background_mode2.jpg");
    this.background2_1 = loadImage("assets/background_mode2_1.jpg");
    this.background5 = loadImage("assets/background_mode5.jpg");
    this.older = loadImage("assets/npc_g_1.png");
    this.ffriend = loadImage("assets/npc_1_1.png");
    this.item = loadImage("assets/item_1.png");
    this.timer = 0;
    this.delay = 3000;
    this.numInput = createInput();
    this.button = createButton("submit");
    this.num = numInput.value();
  }
  display() {
    if (this.mode == 2) {
      // 도입 story
      console.log("story 2")
      imageMode(CENTER);
      image(this.background2_0, w*0.5,h*0.5, w, h); // 이미지가 왜 안 뜰까요 손나 바카야로
      // 플레이어 이미지 넣기
      fill(0);
      rectMode(CENTER);
      rect(w*0.5,h*0.1,w,h*0.2);
      rect(w*0.5, h*0.9,w,h*0.2);
      fill(255);
      textSize(50);
      textAlign(CENTER, CENTER);
      text("내 이름은 "+ this.player +". 드디어 서울대학교에 입학했다.", w*0.5, h*0.8);
      if (millis()-timer>delay){
        image(this.ffriend, w*2/3, h*0.5, w*0.2, h*0.4); // 크기 수정 필요
        fill(0);
        rect(w*0.5, h*0.9,w,h*0.2);
        fill(255);
        text("- " + this.player + "아 그거 알아 ? 저녁에 우리 과 모임이 있대!", w*0.5, h*0.8);
      }
      if (millis()-timer>delay*2){
        fill(0);
        rect(w*0.5, h*0.9,w,h*0.2);
        fill(255);
        text("헉 정말 ? 나 술게임 잘 모르는데 어떡하지?", w*0.5, h*0.8);
      }
      if (millis()-timer>delay*3){
        image(this.background2_1, w*0.5, h*0.5, w, h);
        fill(0);
        rect(w*0.5,h*0.1,w,h*0.2);
        rect(w*0.5, h*0.9,w,h*0.2);
        fill(255);
        text("- 어허 새내기가 늦으면 어떡하나! 바로 한 잔 마셔", w*0.5, h*0.8);
      }
      mode = 3;
    } else if (this.mode == 5) {
      // 고학번 story
      console.log("story 5");
      imageMode(CENTER);
      image(this.background5, w*0.5,h*0.5, w, h);
      image(this.older, w*0.5, h*0.5, w*0.5, h*0.5)
      fill(0);
      rectMode(CENTER);
      rect(w*0.5,h*0.1,w,h*0.2);
      rect(w*0.5, h*0.9,w,h*0.2);
      fill(255);
      textSize(50);
      textAlign(CENTER, CENTER);
      text("-" + this.player + "아, 많이 취한 것 같은데 괜찮아?", w*0.5, h*0.8);
      if (millis()- timer > delay){
        fill(0);
        rectMode(CENTER);
        rect(w*0.5, h*0.9,w,h*0.2);
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("- 혹시 내가 몇 학번인지 아니?", w*0.5, h*0.8);
        this.numInput.position(w*0.5,h*0.5);
        this.button.position(w*0.5,h*0.7);
        this.numInput.value("");

        if (numInput == 19){
          fill(0);
          rectMode(CENTER);
          rect(w*0.5, h*0.9,w,h*0.2);
          fill(255);
          textSize(50);
          textAlign(CENTER, CENTER);
          text("- 오 아는구나! 숙취해소제 하나 챙겨먹어.", w*0.5, h*0.8);
          // 플레이어 혈중알콜농도 줄이기 (얼만큼?)
        } else if (numInput<19){
          fill(0);
          rectMode(CENTER);
          rect(w*0.5, h*0.9,w,h*0.2);
          fill(255);
          textSize(50);
          textAlign(CENTER, CENTER);
          text("- 오 아는구나! 숙취해소제 하나 챙겨먹어.", w*0.5, h*0.8);
          // 플레이어 혈중알콜농도 증가
        } else {
          fill(0);
          rectMode(CENTER);
          rect(w*0.5, h*0.9,w,h*0.2);
          fill(255);
          textSize(50);
          textAlign(CENTER, CENTER);
          text("- ...", w*0.5, h*0.8);
          // 플레이어 혈중알콜농도 증가
        }
      }
      }

    }
  }


