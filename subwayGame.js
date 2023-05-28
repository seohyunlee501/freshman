let currentPlayerIndex;
let currentLine;
let turnIndex;
let stationName;
let gameOn = true;
var stationInput;
var lineInput;
var lineButton;
var stationButton;
let lineNo;
let stations = [
    [],
    [],
    ['까치산', '신정네거리', '양천구청', '도림천', '신도림', '대림', '구로디지털단지', '신대방', '신림', '봉천', '서울대입구', '낙성대', '사당', '방배', '서초', '교대', '강남', '역삼', '선릉', '삼성', '종합운동장', '잠실새내', '잠실', '잠실나루', '강변', '구의', '건대입구', '성수', '뚝섬', '한양대', '왕십리', '상왕십리', '신당', '동대문역사문화공원', '을지로4가', '을지로3가', '을지로입구', '시청', '충정로', '아현', '이대', '신촌', '홍대입구', '합정', '당산', '영등포구청', '문래', '용답', '신답', '용두', '신설동'],
    ['오금', '경찰병원', '가락시장', '수서', '일원', '대청', '학여울', '대치', '도곡', '매봉', '양재', '남부터미널', '교대', '고속터미널', '잠원', '신사', '압구정', '옥수', '금호', '약수', '동대입구', '충무로', '을지로3가', '종로3가', '안국', '경복궁', '독립문', '무악재', '홍제', '녹번', '불광', '연신내', '구파발', '지축', '삼송', '원흠', '원당', '화정', '대곡', '백석', '마두', '정발산', '주엽', '대화'],
    ['오이도', '정왕', '신길온천', '안산', '초지', '고잔', '중앙', '한대앞', '상록수', '반월', '대야미', '수리산', '산본', '금정', '범계', '평촌', '인덕원', '정부과천청사', '과천', '대공원', '경마공원', '선바위', '남태령', '사당', '총신대입구', '이수', '동작', '이촌', '신용산', '삼각지', '숙대입구', '서울역', '회현', '명동', '충무로', '동대문역사문화공원', '동대문', '혜화', '한성대입구', '성신여대입구', '길음', '미아사거리', '미아', '수유', '쌍문', '창동', '노원', '상계', '당고개', '별내별가람', '오남', '진접'],
];

class subwayGame extends Game {
  constructor(_idx, _player, _chars) {
    super(_idx, _player, _chars);
  }
  
  lineSetup() {
    lineNo = Number(lineInput.value());
    lineInput.value("");
    lineButton.position(-999, -999);
    lineInput.position(-999, -999);

    if (lineNo >= 2 && lineNo <= 4) {
      currentLine = Math.floor(lineNo);
      currentPlayerIndex = this.idx;
      if(currentPlayerIndex == this.chars[this.player]){
          this.player();
      }else{
          this.npc(currentLine);
      }
    } else {
      this.lose();
    }
  }

  subwaySetup() {
    stationName = stationInput.value();
    stationInput.value("");
    stationButton.position(-999, -999);
    stationInput.position(-999, -999);
  }

  start() {
    lineInput = createInput();
    stationInput = createInput();
    lineButton = createButton("submit");
    stationButton = createButton("submit");
    
    lineInput.position(w * 0.5, h * 0.5);
    lineButton.position(w * 0.5, h * 0.7);
    lineButton.mousePressed(this.lineSetup);

    
  }

  npc(line) {
    let currentStationIndex = Math.floor(Math.random() * stations[line].length);
    let currentStation = stations[line][currentStationIndex];
    let wrongProbability = (this.turnIndex) * 0.5 / this.chars.length;
    let sayWrong = Math.random() < wrongProbability;

    if (sayWrong) {
        console.log("NPC: " + currentStation + " (Wrong)");
        this.lose();
    } else {
        console.log("NPC: " + currentStation);
        let npcStationIdx = stations[currentLine].indexOf(currentStation);
        stations[currentLine].splice(npcStationIdx, 1);
        console.log(stations[currentLine]);
        currentPlayerIndex = (currentPlayerIndex + 1) % this.chars.length;
        if (currentPlayerIndex == 4){
            this.player();
            this.turnIndex += 1;
        }else{
            this.npc(currentLine);
            this.turnIndex += 1;
        }
        
    }
  }


  player() {
    stationInput.position(0,0);
    stationButton.position(100, 0);
    stationButton.mousePressed(this.subwaySetup);

    let stationIdx = stations[currentLine].indexOf(stationName);
    if (stationIdx != -1) {
        stations[currentLine].splice(stationIdx, 1);
        currentPlayerIndex = (currentPlayerIndex + 1) % this.chars.length;
        this.npc(currentLine);
    } else {
        this.lose();
    }
  }

  reset() {
    
  }

  lose() {
    console.log("Game Over!");
  }



  round() {}
}
