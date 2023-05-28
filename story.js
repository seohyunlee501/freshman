class Story {
  constructor(_mode, _player) {
    this.mode = _mode;
    console.log("mode:", mode);
    this.player = _player;
    this.background2_0 = loadImage("Assets/background_mode2.jpg");
    this.background2_1 = loadImage("Assets/background_mode2_1.jpg");
    this.background5 = loadImage("Assets/background_mode5.jpg");
    this.older = loadImage("Assets/npc_g_1.png");
    this.ffriend = loadImage("Assets/npc_1_1.png");
    this.item = loadImage("Assets/item_1.png");
    this.clickCount = 0;
  }
  display() {
    if (this.mode == 2) {
      // 도입 story
      console.log("story 2")
      this.clickcount = 0;
      imageMode(CENTER);
      image(this.background2_0, 0,0);
      fill(0);
      rectMode(CORNER);
      rect(0,0,w,h*0.2);
      rect(0, h*0.8,w,h*0.2);
      fill(255);
      textSize(50);
      textAlign(CENTER);
      text('내 이름은 '+ this.player +'. 드디어 서울대학교에 입학했다.', w*0.5, h*0.7);
      if (this.clickCount == 1){
        text(this.player+'아 그거 알아? 저녁에 우리 과 모임이 있대!', w*0.5, h*0.8);
      }
      if (this.clickCount == 2){
        text('헉 정말? 나 술게임 잘 모르는데 어떡하지?',w*0.5, h*0.9);
      }
      
      // 지각주 story
      if (this.clickCount == 3){
        image(this.background2_1,0,0,w,h);
      fill(0);
      rectMode(CORNER);
      rect(0,0,w,h*0.2);
      rect(0, h*0.2,w,h*0.2);
      fill(255);
      text('어허 새내기가 늦으면 어떡하나! 바로 한 잔 마셔~', w*0.5, h*0.9);
      this.player.alcholblood += 4;
      mode = 3;
      }
      
    } else if (this.mode == 5) {
      // 고학번 story
    }
  }
  mouseClicked(){
    this.clickCount += 1;
  }
}
