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
}
