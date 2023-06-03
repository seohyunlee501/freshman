class baboGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "바보게임";
    this.recording = false;
    this.myRec = new p5.SpeechRec(); // new P5.SpeechRec object
    this.inputVoice = "";
    this.inputPose = "";
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
    if (this.myRec.resultValue == true) {
      //background(192, 255, 192);
      text(this.myRec.resultString, w / 2, h / 2);
      this.input = this.myRec.resultString;
      console.log(this.input);
    }
  }
  playerturn() {
    this.myRec.start();
    // instructions:
    textSize(32);
    textAlign(CENTER);
    text("say something", w / 2, h / 2);
    this.myRec.onResult = this.showResult;
    this.myRec.continuous = true;
    this.myRec.interimResults = true;
    this.showResult();
  }

  npcturn() {
    if (!this.turnStarted) {
      this.voice = int(random(1, 6));
      this.hand = int(random(1, 6));
      if (this.turn < 3) {
        while (this.voice == this.hand) {
          console.log("while");
          this.hand = int(random(1, 6));
        }
      }
      this.turnStarted = true;
      this.currentTime = millis();
    } else if (this.turnStarted) {
      if (millis() - this.currentTime < 2000) {
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
        if (this.voice == this.hand) {
          this.gameend();
        }
      } else {
        this.turnStarted = false;
        this.turn++;
        this.idx++;
        this.idx = this.idx % 6;
      }
    }
  }

  gameend() {
    this.gameOver = true;
    this.everyone[this.idx].lose();
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
