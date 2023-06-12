// let background_mode2_1;
// let background_mode2;
// let background_mode5;

// let older;
// let ffriend;
// let item;

// function preload(){
//   background_mode2_1 = loadImage("Assets/background_mode2_1.png");
//   background_mode2 = loadImage("Assets/background_mode2.png");
//   background_mode5 = loadImage("Assets/background_mode5.png");
//   older = loadImage("Assets/npc_g_1.png");
//   ffriend = loadImage("Assets/npc_1_1.png");
//   item = loadImage("Assets/item_1.png");
// } preload를 여기서 따로 하면 안 되는 건가요? 이거 주석 해제하면 계속 오류 떠요 ㅠㅜ

class Story {
  constructor(_mode, _player) {
    this.mode = _mode;
    console.log("mode:", mode);
    this.player = _player;
  }
  display() {
    if (this.mode == 2) {
      // 도입 story
      // image(background_mode2, 0,0, w, h);
      // fill(0);
      // rectMode(CORNER);
      // rect(0,0,w,h*0.2);
      // rect(0, h*0.2,w,h*0.2);
      // fill(255);
      // textSize(50);
      // textAlign(CENTER);
      // text('내 이름은 '+_player+'. 드디어 서울대학교에 입학했다.', w*0.5, h*0.9);
      // text(_player+'아 그거 알아? 저녁에 우리 과 모임이 있대!', w*0.5, h*0.9);
      // text('헉 정말? 나 술게임 잘 모르는데 어떡하지?',w*0.5, h*0.9);
      // 지각주 story
      // image(background_mode2_1,0,0,w,h);
      // fill(0);
      // rectMode(CORNER);
      // rect(0,0,w,h*0.2);
      // rect(0, h*0.2,w,h*0.2);
      // fill(255);
      // text('어허 새내기가 늦으면 어떡하나! 바로 한 잔 마셔~', w*0.5, h*0.9);
      this.player.alcholblood += 4;
    } else if (this.mode == 5) {
      // 고학번 story
    }
  }
  drawScene() {
    // scene: str
    this.checkScene();
    switch (this.scene) {
      case "2-1":
        this.drawSceneBackground("2-1");
        this.drawPlayer();
        this.drawTextbox();
        this.drawSceneText(
          `내 이름은 ${player.name}. 드디어 서울대학교에 입학했다.`
        );
        break;
      case "2-2":
        this.drawSceneBackground("2-1");
        this.drawPlayer();
        this.drawNPC("2-1");
        this.drawTextbox("soju");
        this.drawSceneText(
          `- ${player.name}아 그거 알아? 오늘 우리 과 개강파티가 있대!`
        );
        break;
      case "2-3":
        this.drawSceneBackground("2-1");
        this.drawPlayer();
        this.drawNPC("2-1");
        this.drawTextbox();
        this.drawSceneText(`헉 정말? 나 술게임 하나도 모르는데 어떡하지?`);
        break;
      case "2-4":
        this.drawSceneBackground("2-4");
        this.drawPlayer();
        this.drawNPC("2-4");
        this.drawObject("soju");
        this.drawTextbox();
        this.drawSceneText(`- 어허 새내기가 늦으면 어떡하나! 한 잔 마셔~!`);
        break;
      case "5-1":
        this.drawSceneBackground("5-1");
        this.drawNPC("5-1");
        this.drawObject("item");
        this.drawTextbox();
        this.drawSceneText(`- ${player.name}아 괜찮아? 많이 취했니?`);
        break;
      case "5-2":
        this.drawSceneBackground("5-1");
        this.drawNPC("5-1");
        this.drawObject("item");
        this.drawTextbox();
        this.drawSceneText(`- 혹시 내가 몇 학번인지 아니?`);
        this.drawNumberInput();
        break;
      case "5-3":
        console.log("5-3");
        this.numberInput.remove();
        this.submitButton.remove();
        this.drawSceneBackground("5-1");
        this.drawNPC("5-1");
        this.drawObject("item");
        this.drawTextbox();
        this.drawSceneText(`- 오 맞아 19학번이야!`);
        break;
      case "5-4":
        console.log("5-4");
        this.numberInput.remove();
        this.submitButton.remove();
        this.drawSceneBackground("5-1");
        this.drawNPC("5-1");
        this.drawObject("soju_green");
        this.drawTextbox();
        this.drawSceneText(`- ... 내가 그렇게 늙어보여...?`);
        break;
      case "5-5":
        console.log("5-5");
        this.numberInput.remove();
        this.submitButton.remove();
        this.drawSceneBackground("5-1");
        this.drawNPC("5-1");
        this.drawObject("soju_green");
        this.drawTextbox();
        this.drawSceneText(`- 젊게 봐줘서 고마운데, 틀렸어!`);
        break;
    }
  }

  drawSceneBackground(scene) {
    imageMode(CENTER);
    if (scene == "2-1") {
      image(bg2, w * 0.5, h * 0.5, w, h);
    } else if (scene == "2-4") {
      image(bg2_1, w * 0.5, h * 0.5, w, h);
    } else if (scene == "5-1") {
      image(bg5, w * 0.5, h * 0.5, w, h);
    }
  }

  drawSceneText(t) {
    fill(255);
    text(t, w * 0.5, h * 0.9);
  }

  drawPlayer() {
    if (bSelecting) {
      push();
      scale(-1, 1);
      image(imgs_player["m_1"], -w * 0.25, h * 0.5, h, h);
      pop();
    } else if (gSelecting) {
      push();
      scale(-1, 1);
      image(imgs_player["f_1"], -w * 0.25, h * 0.5, h, h);
      pop();
    }
  }

  drawNPC(scene) {
    if (scene == "2-1") {
      image(imgs_npc["1_1"], w * 0.75, h * 0.5, h, h);
    } else if (scene == "2-4") {
      image(imgs_npc["g_1"], w * 0.75, h * 0.5, h, h);
    } else if (scene == "5-1") {
      image(imgs_npc["g_1"], w * 0.5, h * 0.5, h, h);
    }
  } // 변수 써서 하기? 캐릭터 이미지 프리로드하기

  drawObject(obj_img) {
    if (obj_img == "soju") {
      image(soju_img, w * 0.7, h * 0.75, h * 0.2, h * 0.2);
    } else if (obj_img == "item") {
      image(item_img, w * 0.4, h * 0.8, h * 0.2, h * 0.2);
    } else if (obj_img == "soju_green") {
      image(soju_img_g, w * 0.6, h * 0.75, h * 0.2, h * 0.2);
    }
  }

  drawTextbox() {
    fill(0);
    rectMode(CENTER);
    rect(w * 0.5, h * 0.95, w, h * 0.2);
    rect(w * 0.5, h * 0.05, w, h * 0.2);
  }

  mousePressed() {
    if (this.scene === "2-1") {
      this.scene = "2-2";
    } else if (this.scene === "2-2") {
      this.scene = "2-3";
    } else if (this.scene === "2-3") {
      this.scene = "2-4";
    } else if (this.scene === "2-4") {
      mode = 3;
      this.ready = false;
    } else if (this.scene === "5-1") {
      this.scene = "5-2";
    } else if (
      (this.scene === "5-3" || this.scene === "5-4" || this.scene === "5-5") &&
      this.kkk
    ) {
      mode = 3;
      this.ready = false;
    }
  }

  drawNumberInput() {
    if (!this.numberInput) {
      fill(255);
      textAlign(CENTER);

      // 숫자 입력을 받는 input 요소 생성
      this.numberInput = createInput();
      this.numberInput.position(w * 0.5 - 100, h * 0.65);
      this.numberInput.size(100);
      this.numberInput.input(this.handleNumberInput); // 입력 값 변화 이벤트 처리

      // 제출 버튼 생성
      this.submitButton = createButton("학번");
      this.submitButton.position(w * 0.5, h * 0.65);
      this.submitButton.mousePressed(() => {
        let number = parseInt(this.numberInput.value());
        if (number === 19) {
          this.scene = "5-3";
        } else if (number < 19) {
          this.scene = "5-4";
        } else if (number > 19) {
          this.scene = "5-5";
        }
        this.kkk = true;
      });
    }
  }

  handleNumberInput() {
    // 입력 값이 숫자가 아닌 경우 숫자로 변환
    let value = this.numberInput.value();
    value = value.replace(/[^0-9]/g, "");
    this.numberInput.value(value);
  }
}
