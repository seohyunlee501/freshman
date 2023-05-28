let background_mode2_1
let background_mode2
let background_mode5

let older
let ffriend
let item

function preload(){
  background_mode2_1 = loadImage("Assets/background_mode2_1.png");
  background_mode2 = loadImage("Assets/background_mode2.png");
  background_mode5 = loadImage("Assets/background_mode5");
  older = loadImage("Assets/npc_g_1.png");
  ffriend = loadImage("Assets/npc_1_1.png");
  item = loadImage("Assets/item_1/png");
}

class Story {
  constructor(_mode, _player) {
    this.mode = _mode;
    console.log("mode:", mode);
    this.player = _player;
  }
  display() {
    if (this.mode == 2) {
      // 지각주 story
      image(background_mode2, 0,0, w, h);
      fill(0);
      rectMode(CORNER);
      rect(0,0,w,h*0.2);
      rect(0, h*0.2,w,h*0.2);
      fill(255);
      textSize(50);
      textFont(movieFont);
      textAlign(CENTER);
      text('내 이름은 00. 드디어 서울대학교에 입학했다.', w*0.5, h*0.9);
      text('00아 그거 알아? 저녁에 우리 과 모임이 있대!', w*0.5, h*0.9);
      text('헉 정말? 나 술게임 잘 모르는데 어떡하지?',w*0.5, h*0.9);
      this.player.alcholblood += 4;
    } else if (this.mode == 5) {
      // 고학번 story
    }
  }
}
