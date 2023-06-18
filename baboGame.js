class baboGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "바보게임";
    //voice
    this.recording = false;
    this.myRec = new p5.SpeechRec(); // new P5.SpeechRec object
    //hand
    this.video = video;
    // this.video = createCapture(VIDEO);
    // this.video.size(0.3 * w, 0.5 * h);
    // // Hide the video element, and just show the canvas
    // this.video.hide();
    this.myHand = myHand;
    this.handposeReady = false;
    // this.handposeOn = false;
    this.videoOn = false;
    this.predictionsHand = predictionsHand;
    //else
    this.inputVoice = 0;
    this.inputHand = 0;
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
    this.predictions;
    this.tutorialStart = true;
  }

  tutorial() {
    imageMode(CENTER);
    image(playDes[5], w / 2, h / 2, w, h);
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
  // modelReady() {
  //   this.handposeOn = true;
  //   console.log("Model ready!");
  // }

  readingHand() {
    fill(255);
    // rectMode(CENTER);
    // rect(w / 2, h / 2, 0.5 * w, 0.5 * h);
    if (this.videoOn) {
      image(this.video, w / 2, h / 2, 0.5 * w, 0.5 * h);
      // console.log("videoOn,", this.handposeOn);
      //console.log("videoOn,", handposeOn);
    }
    // if (this.handposeOn) {
    //   console.log(this.handposeOn);
    if (handposeOn) {
      //console.log(handposeOn);
      this.drawKeypoints();
    }
  }

  drawKeypoints() {
    for (let i = 0; i < predictionsHand.length; i += 1) {
      const prediction = predictionsHand[i];
      for (let j = 0; j < prediction.landmarks.length; j += 1) {
        const keypoint = prediction.landmarks[j];
        fill(0, 255, 0);
        push();
        noStroke();
        let kx = keypoint[0] + w / 4;
        let ky = keypoint[1] + h / 4;
        // ellipse(keypoint[0], keypoint[1], 10, 10);
        ellipse(kx, ky, 10, 10);
        pop();
      }
    }
  }

  guessHand() {
    let openFinger = 0;
    let openlength = [0, 0, 0, 0, 0];
    let closelength = [];
    console.log("guess 1");
    if (predictionsHand.length > 0) {
      console.log("guess 2");
      const a = predictionsHand[0].annotations;
      console.log("guess 3");

      //thumb
      console.log("closelength", closelength);
      closelength[0] =
        (a.thumb[0][0] - a.thumb[1][0]) ** 2 +
        (a.thumb[0][1] - a.thumb[1][1]) ** 2;
      console.log("closelength[0]", closelength[0]);
      console.log("guess 4");
      console.log("closelength", closelength);
      openlength[0] =
        (a.thumb[0][0] - a.thumb[3][0]) ** 2 +
        (a.thumb[0][1] - a.thumb[3][1]) ** 2;

      //index finger
      console.log("closelength", closelength);
      closelength[1] =
        (a.indexFinger[0][0] - a.thumb[0][0]) ** 2 +
        (a.indexFinger[0][1] - a.thumb[0][1]) ** 2;
      console.log("closelength[1]", closelength[1]);
      console.log("guess 4");
      console.log("closelength", closelength);
      openlength[1] =
        (a.thumb[0][0] - a.indexFinger[3][0]) ** 2 +
        (a.thumb[0][1] - a.indexFinger[3][1]) ** 2;

      //middle finger
      console.log("closelength", closelength);
      closelength[2] =
        (a.middleFinger[0][0] - a.thumb[0][0]) ** 2 +
        (a.middleFinger[0][1] - a.thumb[0][1]) ** 2;
      console.log("closelength[2]", closelength[2]);
      console.log("guess 4");
      console.log("closelength", closelength);
      openlength[2] =
        (a.thumb[0][0] - a.middleFinger[3][0]) ** 2 +
        (a.thumb[0][1] - a.middleFinger[3][1]) ** 2;

      //ring finger
      console.log("closelength", closelength);
      closelength[3] =
        (a.ringFinger[0][0] - a.thumb[0][0]) ** 2 +
        (a.ringFinger[0][1] - a.thumb[0][1]) ** 2;
      console.log("closelength[3]", closelength[3]);
      console.log("guess 4");
      console.log("closelength", closelength);
      openlength[3] =
        (a.thumb[0][0] - a.ringFinger[3][0]) ** 2 +
        (a.thumb[0][1] - a.ringFinger[3][1]) ** 2;

      //pinky
      console.log("closelength", closelength);
      closelength[4] =
        (a.pinky[0][0] - a.thumb[0][0]) ** 2 +
        (a.pinky[0][1] - a.thumb[0][1]) ** 2;
      console.log("closelength[4]", closelength[4]);
      console.log("guess 4");
      console.log("closelength", closelength);
      openlength[4] =
        (a.thumb[0][0] - a.pinky[3][0]) ** 2 +
        (a.thumb[0][1] - a.pinky[3][1]) ** 2;

      //count open finger
      for (let i = 0; i < 5; i++) {
        if (i == 0) {
          let temp = 0;
          temp =
            (a.thumb[0][0] - a.thumb[1][0]) * (a.thumb[3][0] - a.thumb[1][0]);
          if (temp < 0) {
            openFinger += 1;
            console.log("open finger thumb");
          }
        } else {
          if (openlength[i] > closelength[i]) {
            openFinger += 1;
            console.log("open finger number:", i + 1);
          }
        }
      }
      this.inputHand = openFinger;
    }
  }

  turnOnCapture() {
    console.log("video on");
    this.videoOn = true;
    video = createCapture(VIDEO);
    video.hide();
  }

  turnOffCapture() {
    console.log("video off");
    this.videoOn = false;
  }

  turnOnHandpose() {
    if (!this.handposeReady) {
      console.log("***turnOnHandPose called");
      this.handposeReady = true;
      handposeOn = true;
      //myHand = ml5.handpose(video, modelReady);
      myHand.on("predict", (results) => {
        predictionsHand = results;
      });
      // function modelReady() {
      //   // this.handposeOn = true;
      //   handposeOn = true;
      //   console.log("Model ready!");
      // }

      // this.myHand = ml5.handpo se(this.video, modelReady);
      // this.myHand.on("predict", (results) => {
      //   this.predictionsHand = results;
      // });
    }
  }

  turnOffHandpose() {
    if (this.handposeOn) {
      this.myHand.video = undefined;
      this.handposeReady = false;
      this.handposeOn = false;
    }
  }

  showResult() {
    if (!this.turnStarted && this.myRec.resultValue == true) {
      this.guessHand();
      //myRec input 받아오기
      this.inputVoice = this.myRec.resultString;
      console.log("inputvoice:", this.inputVoice);
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

      this.turnOffCapture();
      this.turnOffHandpose();
      //this.inputHand = int(random(1, 6));
    }

    if (this.turnStarted) {
      if (millis() - this.currentTime < 2000) {
        //show each
        push();
        translate(0.2 * w + 0.17 * h * this.idx, 0.3 * h);
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(50);
        text(this.inputVoice, -0.04 * h, 0);
        if (this.inputHand == 0) {
          this.inputHand = (this.inputVoice % 5) + 1;
        }
        console.log(this.idx, this.inputVoice, this.inputHand);
        imageMode(CENTER);
        image(handimg[this.inputHand - 1], 0.04 * h, 0, 0.1 * h, 0.1 * h);
        pop();
        if (this.inputVoice == this.inputHand) {
          this.loseIssue = "babo";
          this.gameend();
          this.turnStarted = false;
        }
      } else {
        this.video.stop();
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
      this.turnOnCapture();
      this.turnOnHandpose();
      this.userPlayed = true;
      //console.log("userPlayed:", this.userPlayed);
    } else {
      //console.log("userPlayed:", this.userPlayed);
      this.readingHand();
      this.myRec.onResult = this.showResult;
      this.myRec.continuous = true;
      this.myRec.interimResults = true;
      this.showResult();
    }
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
          if (this.voice == this.hand) {
            this.hand = (this.voice % 5) + 1;
          }
        } else if (this.userPlayed && this.turn >= 7) {
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
          text(this.voice, -0.04 * h, 0);
          //console.log(this.idx, this.voice, this.hand);
          imageMode(CENTER);
          image(handimg[this.hand - 1], 0.04 * h, 0, 0.1 * h, 0.1 * h);
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
      if (millis() - this.endTime < 4000) {
        if (millis() - this.endTime < 2000) {
          if (this.idx == 3) {
            super.playerDrinkDisplay();
          } else {
            super.npcDrinkDisplay();
          }
        } else {
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
          } else if (this.loseIssue == "babo2") {
            text("앞 사람의 손을 잘 읽으세요!", w / 2, h / 2);
          } else {
            text("휴 살았다!", w / 2, h / 2);
          }
        }
      } else {
        this.gameOver = true;
        this.everyone[this.idx].lose();
        this.gameList.gameNum++;
      }
    }
  }

  round() {
    if (this.tutorialStart == true) {
      this.tutorial();
    }
    if (this.tutorialStart == false) {
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
}
