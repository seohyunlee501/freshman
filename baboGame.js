class baboGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "바보게임";
    this.recording = false;
    this.myRec = new p5.SpeechRec(); // new P5.SpeechRec object
    this.inputVoice = 0;
    this.inputHand = 0;
    // this.handimg = [];
    // for (let i = 0; i < 5; i++) {
    //   let temp = "Assets/hand_" + (i + 1) + ".png";
    //   this.handimg[i] = loadImage(temp);
    //   console.log(temp);
    // }
    this.startTime = millis();
    this.gameStarted = true;
    this.turnStarted = false;
    this.currentTime = 0;
    this.voice;
    this.hand;
    this.userPlayed = false;
    this.infoStarted = false;
    this.infoTime = 0;
    this.endStarted = false;
    this.endTime = 0;
    this.loseIssue = "";
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
        text("바보게임 START!", w / 2, h / 2);
      } else if (millis() - this.startTime < 2400) {
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("음성 기능 사용을 위해", w / 2, h / 2 - 0.05 * h);
        text("이어폰을 착용해 주세요.", w / 2, h / 2 + 0.05 * h);
      } else {
        this.gameStarted = false;
        this.turn++;
      }
    }
  }
  showResult() {
    if (!this.turnStarted && this.myRec.resultValue == true) {
      //myRec input 받아오기
      //this.myRec.text(this.myRec.resultString, w / 2, h / 2);
      this.inputVoice = this.myRec.resultString;
      console.log(this.inputVoice);
      if (this.inputVoice == "일" || this.inputVoice == "1") {
        this.inputVoice = 1;
        this.turnStarted = true;
        this.currentTime = millis();
      } else if (this.inputVoice == "이" || this.inputVoice == "2") {
        this.inputVoice = 2;
        this.turnStarted = true;
        this.currentTime = millis();
      } else if (this.inputVoice == "삼" || this.inputVoice == "3") {
        this.inputVoice = 3;
        this.turnStarted = true;
        this.currentTime = millis();
      } else if (this.inputVoice == "사" || this.inputVoice == "4") {
        this.inputVoice = 4;
        this.turnStarted = true;
        this.currentTime = millis();
      } else if (this.inputVoice == "오" || this.inputVoice == "5") {
        this.inputVoice = 5;
        this.turnStarted = true;
        this.currentTime = millis();
      } else {
        this.loseIssue = "pronounce";
        this.gameend();
      }
      this.inputHand = int(random(1, 6));
    }

    if (this.turnStarted) {
      if (millis() - this.currentTime < 2000) {
        //show each
        push();
        translate(0.2 * w + 0.17 * h * this.idx, 0.3 * h);
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(50);
        text(this.inputVoice, -0.05 * h, 0);
        console.log(this.idx, this.inputVoice, this.inputHand);
        imageMode(CENTER);
        image(handimg[this.inputHand - 1], 0.05 * h, 0, 0.1 * h, 0.1 * h);
        pop();
        if (this.inputVoice == this.inputHand) {
          this.loseIssue = "babo";
          this.gameend();
          this.turnStarted = false;
        }
      } else {
        this.turnStarted = false;
        this.turn++;
        this.idx++;
        this.idx = this.idx % 6;
        this.inputVoice = 0;
        this.inputHand = 0;
      }
    }
  }
  playerturn() {
    if (!this.userPlayed) {
      this.infoStarted = true;
      this.infoTime = millis();
      this.myRec.start();
      this.userPlayed = true;
    } else {
      if (millis() - this.infoTime < 2000) {
        // instructions:
        textSize(32);
        textAlign(CENTER);
        rectMode(CENTER);
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("아라비아 숫자로 말해 주세요.", w / 2, h / 2);
      }
    }
    this.myRec.onResult = this.showResult;
    this.myRec.continuous = true;
    this.myRec.interimResults = true;
    this.showResult();
  }

  npcturn() {
    if (this.everyone[this.idx].die) {
      this.idx++;
      this.idx = this.idx % 6;
    } else {
      if (!this.turnStarted) {
        this.voice = int(random(1, 6));
        this.hand = int(random(1, 6));
        if (this.idx == 2 || !this.userPlayed) {
          while (this.voice == this.hand) {
            console.log("while");
            this.hand = int(random(1, 6));
          }
        } else if (this.turn == 7) {
          this.hand = this.voice;
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
          text(this.voice, -0.05 * h, 0);
          console.log(this.idx, this.voice, this.hand);
          imageMode(CENTER);
          image(handimg[this.hand - 1], 0.05 * h, 0, 0.1 * h, 0.1 * h);
          pop();
        } else {
          if (this.voice == this.hand) {
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
        if (this.loseIssue == "pronounce") {
          let temp = this.inputVoice;
          let temp2 = temp + "(이)라구요?";
          text(temp2, w / 2, h / 2 - 0.05 * h);
          text("발음은 생명!", w / 2, h / 2 + 0.05 * h);
        } else if (this.loseIssue == "babo") {
          text("당신은 바보입니다!", w / 2, h / 2);
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
