class Story {
  constructor() {
    this.ready = false;
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
    }
  }

  drawSceneBackground(scene) {
    imageMode(CENTER);
    if (scene == "2-1") {
      image(bg2, w * 0.5, h * 0.5, w, h);
    } else if (scene == "2-4") {
      image(bg2_1, w * 0.5, h * 0.5, w, h);
    } else if (scene == "5-1") {
      image();
    }
  }

  drawSceneText(t) {
    fill(255);
    text(t, w * 0.5, h * 0.9);
  }

  drawPlayer() {
    if (bSelecting == true) {
      image(player_boy, w * 0.25, h * 0.5, w, h * 1.5);
    } else if (gSelecting == true) {
      image(player_girl, w * 0.25, h * 0.5, w, h * 1.5);
    }
  }

  drawNPC(scene) {
    if (scene == "2-1") {
      image(npc_story2, w * 0.75, h * 0.5, w, h * 1.5);
    } else if (scene == "2-4") {
      image(npc_story5, w * 0.75, h * 0.5, w, h * 1.5);
    } else if (scene == "5-1") {
      image(npc_story5, w * 0.5, h * 5, w, h * 1.5);
    }
  } // 변수 써서 하기? 캐릭터 이미지 프리로드하기

  drawObject(obj_img) {
    if (obj_img == "soju") {
      image(soju_img, w * 0.7, h * 0.75, w * 0.2, h * 0.2);
    } else if (obj_img == "item") {
      image(item_img, w * 0.4, h * 0.5, w * 0.2, h * 0.2);
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
      mode = 6;
    }
  }
}
