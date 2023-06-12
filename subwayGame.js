class subwayGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "지하철게임";
    this.turn = 0;
    this.gameStarted = true;
    this.turnStarted = false;
    this.pturnStarted = false;
    this.lineSelected = false;
    this.startTime = millis();
    this.currentTime = 0;
    this.playerStarted = false;
    this.playerEnd = false;
    this.lineSelection = 0;
    this.currentLine = 0;
    this.loseIssue = '';
    this.playerInput = false;
    this.stationList = [
      [],
      [],
      ['까치산', '신정네거리', '양천구청', '도림천', '신도림', '대림', '구로디지털단지', '신대방', '신림', '봉천', '서울대입구', '낙성대', '사당', '방배', '서초', '교대', '강남', '역삼', '선릉', '삼성', '종합운동장', '잠실새내', '잠실', '잠실나루', '강변', '구의', '건대입구', '성수', '뚝섬', '한양대', '왕십리', '상왕십리', '신당', '동대문역사문화공원', '을지로4가', '을지로3가', '을지로입구', '시청', '충정로', '아현', '이대', '신촌', '홍대입구', '합정', '당산', '영등포구청', '문래', '용답', '신답', '용두', '신설동'],
      ['오금', '경찰병원', '가락시장', '수서', '일원', '대청', '학여울', '대치', '도곡', '매봉', '양재', '남부터미널', '교대', '고속터미널', '잠원', '신사', '압구정', '옥수', '금호', '약수', '동대입구', '충무로', '을지로3가', '종로3가', '안국', '경복궁', '독립문', '무악재', '홍제', '녹번', '불광', '연신내', '구파발', '지축', '삼송', '원흠', '원당', '화정', '대곡', '백석', '마두', '정발산', '주엽', '대화'],
      ['오이도', '정왕', '신길온천', '안산', '초지', '고잔', '중앙', '한대앞', '상록수', '반월', '대야미', '수리산', '산본', '금정', '범계', '평촌', '인덕원', '정부과천청사', '과천', '대공원', '경마공원', '선바위', '남태령', '사당', '총신대입구', '이수', '동작', '이촌', '신용산', '삼각지', '숙대입구', '서울역', '회현', '명동', '충무로', '동대문역사문화공원', '동대문', '혜화', '한성대입구', '성신여대입구', '길음', '미아사거리', '미아', '수유', '쌍문', '창동', '노원', '상계', '당고개', '별내별가람', '오남', '진접'],
    ];
    this.failStationList = ['방화', '개화산', '김포공항', '송정', '마곡', '발산', '우장산', '화곡', '신정', '목동', '오목교', '양평', '영등포시장', '신길', '여의도', '여의나루', '마포', '공덕', '애오개', '서대문', '광화문', '청구', '신금호', '행당', '마장', '답십리', '장한평', '군자', '아차산', '광나루', '천호', '강동', '길동', '굽은다리', '고덕', '상일동', '강일', '미사', '하남풍산', '하남시청', '하남검단산', '둔촌동', '올림픽공원', '방이', '개롱', '거여', '마천', '암사', '강동구청', '몽촌토성', '석촌', '송파', '문정', '장지', '복정', '남위례', '산성', '남한산성입구', '단대오거리', '신흥', '수진', '모란'];
    this.lineNumber = 0;
    this.npcStationName = '';
    this.npcSuccess = true;
    this.npcFailure = true;
    this.stationName = '';
    this.stationIdx = 999;
    this.playerCurrentTime = 0;
    this.endStarted = false;
    this.gamefinishedByWrongInput = false;
    this.gamefinishedByWrongStation = false;
  }
  
  intro() {
    textSize(32);
    textAlign(CENTER);
    rectMode(CENTER);
    if (this.gameStarted) {
      if (millis() - this.startTime < 1500) {
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("지~하철! 지~하철!", w / 2, h / 2);
      } else if (millis() - this.startTime < 3000) {
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("몇 호선~? 몇 호선~?", w / 2, h / 2);
      } else {
        this.gameStarted = false;
        this.turn++;
      }
    }
  }

  lineSelect() {
    textSize(32);
    textAlign(CENTER);
    rectMode(CENTER);
    fill(255);
    rect(w / 2, h / 2, w / 3, h / 3);
    fill(0);
    text("숫자 패드로 지하철 노선을 고르세요!", w / 2, h / 2);
    if(this.lineSelection == -1) {
      this.lineSelected = true;
      this.gamefinishedByWrongInput = true;
      this.gameend();
      this.loseIssue = '호선';
    }

    if(this.lineSelection == 2){
      this.currentLine = 2;
      this.lineSelected = true;
    }else if(this.lineSelection == 3){
      this.currentLine = 3;
      this.lineSelected = true;
    }else if(this.lineSelection == 4){
      this.currentLine = 4;
      this.lineSelected = true;
    }else if(this.lineSelection == 0){
      //do nothing
    }else{

    }
  }

  stationInput() {
    this.playerInput = true;
  }

  playerturn() {
    if(!this.pturnStarted) {
      if(this.stationIdx == -1){
        this.gamefinishedByWrongStation = true;
        this.gameend();
        this.loseIssue = '입력';
      }else if(this.stationIdx < 999) {
        this.stationList[this.currentLine].splice(this.stationIdx ,1);
      }
      this.pturnStarted = true;
    }
    if(this.pturnStarted){
      if(millis() - this.playerCurrentTime < 1500){
        push();
        translate(0.2 * w + 0.17 * h * this.idx, 0.3 * h);
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(50);
        text(this.stationName + '!', 0, 0);
        pop();
        console.log(this.stationIdx + '999');
      } else {
        this.playerEnd = true;
        this.pturnstarted = false;
        this.turn++;
        this.idx++;
        this.idx = this.idx % 6;
      }
    }
  }

  npcturn() {
    this.playerStarted = false;
    this.playerEnd = false;
    if (this.everyone[this.idx].die) {
      this.idx++;
      this.idx = this.idx % 6;
    } else {
      if (!this.turnStarted) {
        let temp = random();
        if(temp < 0.88){
          let lineIdx = Math.floor(random(0, this.stationList[this.currentLine].length));
          this.npcStationName = this.stationList[this.currentLine][lineIdx];
          this.stationList[this.currentLine].splice(lineIdx, 1);
          this.npcSuccess = true;
          this.npcFailure = false;
        }else{
          let falseIdx = Math.floor(random(0, this.failStationList.length));
          this.npcSuccess = false;
          this.npcFailure = true;
          this.npcStationName = this.failStationList[falseIdx];
        }
        this.turnStarted = true;
        this.currentTime = millis();
      } else if (this.turnStarted) {
        if (millis() - this.currentTime < 1500) {
          //show each
          push();
          translate(0.2 * w + 0.17 * h * this.idx, 0.3 * h);
          textAlign(CENTER, CENTER);
          fill(255);
          textSize(50);
          text(this.npcStationName + '!', 0, 0);
          pop();
        } else {
          if (this.npcFailure == true) {
            this.gameend();
          } else {
            this.turnStarted = false;
            this.turn++;
            this.idx++;
            this.idx = this.idx % 6;
          }
        }
      }
    }
  }

  gameend(){
    if (!this.endStarted) {
      this.endStarted = true;
      this.endTime = millis();
    } else {
      if (millis() - this.endTime < 2000) {
        fill(255);
        rectMode(CENTER);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        if (this.loseIssue == '호선') {
          text("겐세이! 겐세이!", w / 2, h / 2);
        } else if(this.loseIssue == '입력') {
          text('집중은~ 생명! 생명! 생명! 생명!', w / 2, h / 2);
        } else {
          text("휴 살았다!", w / 2, h / 2);
        }
      } else {
        this.gameOver = true;
        this.everyone[this.idx].lose();
        this.gameList.gameNum++;
      }
    }
  }

  round() {
    if(this.gamefinishedByWrongInput){
      this.loseIssue = '호선';
      this.gameend();
    }else if(this.gamefinishedByWrongStation){
      this.loseIssue = '입력';
      this.gameend();
    }else{
      if(this.turn == 0) {
        this.intro();
      } else if(!this.lineSelected){
        this.lineSelect();
      } else {
        if(this.idx == 3) {
          if(this.playerInput == false && this.playerStarted == false){
            this.stationInput();
          } else if(this.playerStarted == true && this.playerEnd == false) {
            this.playerturn();
          }
        } else {
          this.npcturn();
        }
      }
    }
  }
}
