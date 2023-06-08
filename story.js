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
        this.drawNPC();
        this.drawTextbox();
        this.drawSceneText(
          `내 이름은 ${player.name}. 드디어 서울대학교에 입학했다.`
        );
        break;
      case "2-2":
        this.drawSceneBackground("2-1");
        this.drawPlayer();
        this.drawNPC();
        this.drawTextbox();
        this.drawSceneText(
          `- ${player.name}아 그거 알아? 오늘 우리 과 개강파티가 있대!`
        );
        break;
      case "2-3":
        this.drawSceneBackground("2-1");
        this.drawPlayer();
        this.drawNPC();
        this.drawTextbox();
        this.drawSceneText(`헉 정말? 나 술게임 하나도 모르는데 어떡하지?`);
        break;
      case "2-4":
        this.drawSceneBackground("2-4");
        this.drawPlayer();
        this.drawNPC();
        this.drawObject();
        this.drawTextbox();
        this.drawSceneText(`- 어허 새내기가 늦으면 어떡하나! 한 잔 마셔~!`);
        break;
      case "5-1":
        this.drawSceneBackground();
        this.drawNPC();
        this.drawObject();
        break;
      case "5-2":
        this.drawSceneBackground();
        this.drawNPC();
        this.drawObject();
    }
  }

  drawSceneBackground(scene) {
    imageMode(CENTER);
    if (scene == "2-1") {
      image(bg2, w * 0.5, h * 0.5, w, h);
    } else if (scene == "2-4") {
      image(bg2_1, w * 0.5, h * 0.5, w, h);
    } else if (scene == "5-1") {
      background(200);
    }
  }

  drawSceneText(t) {
    fill(255);
    text(t, w * 0.5, h * 0.9);
  }

  drawPlayer() {}

  drawNPC(npc_img, x, y) {}
  drawObject(obj_img, x, y) {}
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
    }
  }
}
