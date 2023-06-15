class brGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "배스킨 라빈스 31";
    this.brNum = 0;
    this.threeNum = [];
    this.temp = 0;
    this.startTime = millis();
    this.gameStarted = true;
    this.turnStarted = false;
    this.currentTime = 0;
    this.userPlayed = false;
    this.infoStarted = false;
    this.infoTime = 0;
    this.endStarted = false;
    this.endTime = 0;
  }
  intro() {
    textSize(32);
    textAlign(CENTER);
    rectMode(CENTER);
    if (this.gameStarted) {
      if (millis() - this.startTime < 1200) {
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("배스킨~라빈스~써리~원!", w / 2, h / 2);
      } else if (millis() - this.startTime < 2400) {
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("귀엽고~깜찍하게~써리~원!", w / 2, h / 2);
      } else {
        this.gameStarted = false;
        this.turn++;
      }
    }
  }
  playerturn() {
    if (!this.userPlayed) {
      this.infoStarted = true;
      this.infoTime = millis();
      this.userPlayed = true;
    } else if (this.infoStarted) {
      if (millis() - this.infoTime < 2000) {
        // instructions:
        textSize(32);
        textAlign(CENTER);
        rectMode(CENTER);
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("개수를 키보드에 입력해 주세요.", w / 2, h / 2);
      } else {
        this.infoStarted = false;
      }
    } else if (!this.turnStarted) {
      let temp = 0;
      temp = this.temp;
      if (temp != 0) {
        this.threeNum = [];
        for (let i = 0; i < temp; i++) {
          this.brNum++;
          this.threeNum[i] = this.brNum;
        }
        this.turnStarted = true;
        this.currentTime = millis();
        this.temp = 0;
        temp = 0;
      }
    } else if (this.turnStarted) {
      if (millis() - this.currentTime < 1200) {
        //show each
        push();
        translate(0.2 * w + 0.17 * h * this.idx, 0.3 * h);
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(50);
        let temptext = this.threeNum;
        if (this.brNum == 31) {
          temptext = "힝..." + temptext;
        }
        text(temptext, 0, 0);
        //console.log(this.threeNum);
        pop();
      } else {
        if (this.brNum >= 31) {
          this.loseIssue = "32";
          this.gameend();
        } else {
          this.turnStarted = false;
          this.turn++;
          this.idx++;
          this.idx = this.idx % 6;
        }
      }
    }
    //this.showResult();
  }
  npcturn() {
    if (this.everyone[this.idx].die) {
      this.idx++;
      this.idx = this.idx % 6;
    } else {
      if (!this.turnStarted) {
        let temp = int(random(1, 4));
        if (this.brNum == 28) {
          if (this.idx == 2) {
            temp = 2;
          } else {
            temp = 1;
          }
        } else if (this.brNum == 29 || this.brNum == 30) {
          temp = 1;
        }
        this.threeNum = [];
        for (let i = 0; i < temp; i++) {
          this.brNum++;
          this.threeNum[i] = this.brNum;
        }
        this.turnStarted = true;
        this.currentTime = millis();
      } else if (this.turnStarted) {
        if (millis() - this.currentTime < 1200) {
          //show each
          push();
          translate(0.2 * w + 0.17 * h * this.idx, 0.3 * h);
          textAlign(CENTER, CENTER);
          fill(255);
          textSize(50);
          let temptext = this.threeNum;
          if (this.brNum == 31) {
            temptext = "힝..." + temptext;
          }
          text(temptext, 0, 0);
          pop();
        } else {
          if (this.brNum >= 31) {
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
    //this.showResult();
  }
  gameend() {
    if (!this.endStarted) {
      this.endStarted = true;
      this.endTime = millis();
    } else {
      if (millis() - this.endTime < 2000) {
        fill(255);
        rectMode(CENTER);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        if (this.loseIssue == "32") {
          text("멍청하게 말고 귀엽게!", w / 2, h / 2);
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
    if (this.turn == 0) {
      this.intro();
    } else {
      if (this.idx == 3) {
        this.playerturn();
      } else {
        this.npcturn();
      }
    }
  }
}
