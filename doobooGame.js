class doobooGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "두부게임";
    this.dbCount = 10;
    this.turn = 0;
    this.startTime = millis();
    this.bgmOn = true;
    this.userPlayed = false;
    this.infoStarted = false;
    this.infoTime = 0;
    this.currentTime = 0;
    this.endStarted = false;
    this.endTime = 0;
    this.loseIssue = 0;
    this.temp;
  }

  dbBgm() {
    console.log("dbBgm");
    textSize(32);
    textAlign(CENTER);
    rectMode(CENTER);
    if (this.bgmOn) {
      if (millis() - this.startTime < 1200) {
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("두~부 두부 두부", w / 2, h / 2);
      } else if (millis() - this.startTime < 2400) {
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("으쌰!으쌰!으쌰!으쌰!", w / 2, h / 2);
      } else if (millis() - this.startTime < 3600) {
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("두~부 두부 두부", w / 2, h / 2);
      } else if (millis() - this.startTime < 4800) {
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("으쌰!으쌰!으쌰!으쌰!", w / 2, h / 2);
      } else {
        this.bgmOn = false;
        this.turn++;
      }
    }
  }

  playerTurn() {
    if (!this.userPlayed) {
      this.infoStarted = true;
      this.infoTime = millis();
      this.userPlayed = true;
    } else if (this.infoStarted) {
      if (millis() - this.infoTime < 2000) {
        // instructions:
        textSize(32);
        fill(255);
        textAlign(CENTER);
        rectMode(CENTER);
        text(
          "두부 모수를 키보드에 입력해 주세요.",
          0.2 * w + 0.17 * h * 3,
          0.3 * h
        );
      } else {
        this.infoStarted = false;
      }
    } else if (!this.turnStarted) {
      this.dbCount = 10;
      this.dbCount = this.temp;
      console.log("temp:", this.temp);
      if (this.dbCount != 10) {
        this.turnStarted = true;
        this.currentTime = millis();
        this.temp = 10;
      }
    } else if (this.turnStarted) {
      if (millis() - this.currentTime < 2500) {
        this.dbCall();
      } else {
        if (this.dbCount === undefined) {
          this.loseIssue = 2;
          this.gameend();
        } else if (
          this.dbCount != 1 &&
          this.dbCount != 2 &&
          this.dbCount != 4 &&
          this.dbCount != 5
        ) {
          this.loseIssue = 1;
          this.gameend();
        } else {
          this.point();
          this.turnStarted = false;
          this.turn++;
        }
      }
    }
  }

  npcTurn() {
    if (this.everyone[this.idx].die) {
      this.idx++;
      this.idx = this.idx % 6;
    } else {
      if (!this.turnStarted) {
        if (this.turn > 10) {
          this.dbCount = int(random(0, 10));
        } else {
          let dbNum = [1, 2, 4, 5];
          this.dbCount = dbNum[int(random(0, 4))];
        }
        this.turnStarted = true;
        this.currentTime = millis();
      } else if (this.turnStarted) {
        if (millis() - this.currentTime < 1600) {
          this.dbCall();
        } else {
          if (
            this.dbCount != 1 &&
            this.dbCount != 2 &&
            this.dbCount != 4 &&
            this.dbCount != 5
          ) {
            this.loseIssue = 1;
            this.gameend();
          } else {
            this.point();
            this.turnStarted = false;
            this.turn++;
          }
        }
      }
    }
  }

  point() {
    console.log("point");
    if (this.dbCount == 1) {
      this.idx -= 2;
      if (this.idx < 0) {
        this.idx += 6;
      }
    } else if (this.dbCount == 2) {
      this.idx -= 1;
      if (this.idx < 0) {
        this.idx += 6;
      }
    } else if (this.dbCount == 4) {
      this.idx += 1;
      if (this.idx > 5) {
        this.idx -= 6;
      }
    } else if (this.dbCount == 5) {
      this.idx += 2;
      if (this.idx > 5) {
        this.idx -= 6;
      }
    }
  }

  dbCall() {
    console.log("dbcall");
    fill(0);
    let x = 0.2 * w + 0.17 * h * this.idx;
    fill(255);
    if (this.dbCount == 1) {
      text("두부 한 모!", x, 0.3 * h);
    } else if (this.dbCount == 2) {
      text("두부 두 모!", x, 0.3 * h);
    } else if (this.dbCount == 4) {
      text("두부 네 모!", x, 0.3 * h);
    } else if (this.dbCount == 5) {
      text("두부 다섯 모!", x, 0.3 * h);
    } else if (this.dbCount == 3) {
      text("두부 세 모!", x, 0.3 * h);
    } else if (this.dbCount == 0) {
      text("두부 빵 모!", x, 0.3 * h);
    } else if (this.dbCount == 6) {
      text("두부 여섯 모!", x, 0.3 * h);
    } else if (this.dbCount == 7) {
      text("두부 일곱 모!", x, 0.3 * h);
    } else if (this.dbCount == 8) {
      text("두부 여덟 모!", x, 0.3 * h);
    } else if (this.dbCount == 9) {
      text("두부 아홉 모!", x, 0.3 * h);
    }
  }

  dbIsSquare() {
    console.log("dbissquare");
    textSize(32);
    textAlign(CENTER);
    rectMode(CENTER);
    if(millis() - this.endTime < 2000) {
      if(this.idx == 3){
        super.playerDrinkDisplay();
      } else {
        super.npcDrinkDisplay();
      }
    } else if (millis() - this.endTime < 3200) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("두부는 네모!", w / 2, h / 2);
    } else if (millis() - this.endTime < 4400) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("두부는 네모!!!", w / 2, h / 2);
    } else if (millis() - this.endTime < 5600) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("네모! 네모!", w / 2, h / 2);
    } else if (millis() - this.endTime < 6800) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("네모! 네모! 네모!", w / 2, h / 2);
    }
  }

  rhythmIsLife() {
    console.log("rhythmislife");
    textSize(32);
    textAlign(CENTER);
    rectMode(CENTER);
    //if (this.rhythmIsLifeOn) {
    if(millis() = this.endTime < 2000){
      if(this.idx == 3){
        super.playerDrinkDisplay();
      }else{
        super.npcDrinkDisplay();
      }
    } else if (millis() - this.endTime < 3200) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("박자는 생명!", w / 2, h / 2);
    } else if (millis() - this.endTime < 4400) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("박자는 생명!", w / 2, h / 2);
    } else if (millis() - this.endTime < 5600) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("생명! 생명!!", w / 2, h / 2);
    } else if (millis() - this.endTime < 6800) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("생명! 생명! 생명!", w / 2, h / 2);
    }
  }
  //}

  gameend() {
    if (!this.endStarted) {
      this.endStarted = true;
      this.endTime = millis();
    } else {
      if (millis() - this.endTime < 6800) {
        if (this.loseIssue == 1) {
          this.dbIsSquare();
        } else if (this.loseIssue == 2) {
          this.rhythmIsLife();
        }
      } else {
        this.gameOver = true;
        this.everyone[this.idx].lose();
        this.gameList.gameNum++;
      }
    }
  }

  round() {
    if (this.turn == 0) {
      this.dbBgm();
    } else {
      if (this.idx == 3) {
        this.playerTurn();
      } else {
        this.npcTurn();
      }
    }
  }
}
