class Story {
  constructor() {
    this.ready = false;
    this.numberInput = null;
    this.submitButton = null;
    this.kkk = false;
    this.expectedID;
  }
  checkScene() {
    if (!this.ready) {
      if (mode === 2) {
        this.scene = "2-1";
      } else if (mode === 5) {
        this.scene = "5-1";
      }
      this.ready = true;
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
        this.drawSceneText(`- 오 맞아 19학번이야! 이건 선물 ^-^`);
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
    if (gender == "boy") {
      push();
      scale(-1, 1);
      image(imgs_player["m_1"], -w * 0.25, h * 0.5, h, h);
      pop();
    } else if (gender == "girl") {
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
      image(soju_img, w * 0.65, h * 0.75, h * 0.2, h * 0.2);
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
      !this.kkk
    ) {
      if(this.expectedID === 19){
        player.alcholblood--;
        this.kkk = true;
      }else if(this.expectedID > 19 || this.expectedID < 19){
        player.alcholblood++;
        this.kkk = true;
      }
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
        this.expectedID = parseInt(this.numberInput.value());
        if (this.expectedID === 19) {
          this.scene = "5-3";
        } else if (this.expectedID < 19) {
          this.scene = "5-4";
        } else if (this.expectedID > 19) {
          this.scene = "5-5";
        }
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
