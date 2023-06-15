class baboGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "바보게임";
    //voice
    this.recording = false;
    this.myRec = new p5.SpeechRec(); // new P5.SpeechRec object
    //hand
    this.video = createCapture(VIDEO);
    this.video.size(0.3 * w, 0.5 * h);
    this.myHand = ml5.handpose(this.video, this.modelLoaded);
    // Call onNewHandPosePrediction every time a new handPose is predicted
    this.myHand.on("predict", this.onNewPrediction);
    // Hide the video element, and just show the canvas
    this.video.hide();
    this.handReady = false;
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
  }
  modelLoaded() {
    console.log("HandPose model ready!");
    this.handReady = true;
  }
  onNewPrediction() {
    if (predictions && predictions.length > 0) {
      curHandPose = predictions[0];
      // console.log(curHandPose);
    } else {
      curHandPose = null;
    }
  }
  drawHand(handPose) {
    // Draw landmarks
    // Find tight bounding box
    const tightBoundingBox = drawKeypoints(handPose);
    drawSkeleton(handPose);

    // Draw tight bounding box
    noFill();
    stroke(boundingBoxColor);
    const tightBoundingBoxWidth =
      tightBoundingBox.right - tightBoundingBox.left;
    const tightBoundingBoxHeight =
      tightBoundingBox.bottom - tightBoundingBox.top;
    rect(
      tightBoundingBox.left,
      tightBoundingBox.top,
      tightBoundingBoxWidth,
      tightBoundingBoxHeight
    );

    // Draw hand pose bounding box
    const bb = handPose.boundingBox;
    const bbWidth = bb.bottomRight[0] - bb.topLeft[0];
    const bbHeight = bb.bottomRight[1] - bb.topLeft[1];
    rect(bb.topLeft[0], bb.topLeft[1], bbWidth, bbHeight);

    // Draw confidence
    fill(boundingBoxColor);
    noStroke();
    text(
      nfc(handPose.handInViewConfidence, 2),
      tightBoundingBox.left,
      tightBoundingBox.top - 15
    );
  }

  drawKeypoints(handPose) {
    if (!handPose) {
      return;
    }

    let boundingBoxLeft = handPose.landmarks[0][0];
    let boundingBoxTop = handPose.landmarks[0][1];
    let boundingBoxRight = boundingBoxLeft;
    let boundingBoxBottom = boundingBoxTop;

    // draw keypoints
    // While each keypoints supplies a 3D point (x,y,z), we only draw
    // the x, y point.
    for (let j = 0; j < handPose.landmarks.length; j += 1) {
      const landmark = handPose.landmarks[j];
      fill(kpColor);
      noStroke();
      circle(landmark[0], landmark[1], kpCircleDiameter);
      if (landmark[0] < boundingBoxLeft) {
        boundingBoxLeft = landmark[0];
      } else if (landmark[0] > boundingBoxRight) {
        boundingBoxRight = landmark[0];
      }

      if (landmark[1] < boundingBoxTop) {
        boundingBoxTop = landmark[1];
      } else if (landmark[1] > boundingBoxBottom) {
        boundingBoxBottom = landmark[1];
      }
    }

    // return the bounding box
    return {
      left: boundingBoxLeft,
      right: boundingBoxRight,
      top: boundingBoxTop,
      bottom: boundingBoxBottom,
    };
  }

  drawSkeleton(handPose) {
    if (!handPose) {
      return;
    }

    stroke(skeletonColor);
    noFill();

    // Loop through all the skeletons detected
    const a = handPose.annotations;

    // For every skeleton, loop through all body connections
    for (let i = 0; i < a.thumb.length - 1; i++) {
      line(a.thumb[i][0], a.thumb[i][1], a.thumb[i + 1][0], a.thumb[i + 1][1]);
    }
    for (let i = 0; i < a.indexFinger.length - 1; i++) {
      line(
        a.indexFinger[i][0],
        a.indexFinger[i][1],
        a.indexFinger[i + 1][0],
        a.indexFinger[i + 1][1]
      );
    }
    for (let i = 0; i < a.middleFinger.length - 1; i++) {
      line(
        a.middleFinger[i][0],
        a.middleFinger[i][1],
        a.middleFinger[i + 1][0],
        a.middleFinger[i + 1][1]
      );
    }
    for (let i = 0; i < a.ringFinger.length - 1; i++) {
      line(
        a.ringFinger[i][0],
        a.ringFinger[i][1],
        a.ringFinger[i + 1][0],
        a.ringFinger[i + 1][1]
      );
    }
    for (let i = 0; i < a.pinky.length - 1; i++) {
      line(a.pinky[i][0], a.pinky[i][1], a.pinky[i + 1][0], a.pinky[i + 1][1]);
    }

    line(a.palmBase[0][0], a.palmBase[0][1], a.thumb[0][0], a.thumb[0][1]);
    line(
      a.palmBase[0][0],
      a.palmBase[0][1],
      a.indexFinger[0][0],
      a.indexFinger[0][1]
    );
    line(
      a.palmBase[0][0],
      a.palmBase[0][1],
      a.middleFinger[0][0],
      a.middleFinger[0][1]
    );
    line(
      a.palmBase[0][0],
      a.palmBase[0][1],
      a.ringFinger[0][0],
      a.ringFinger[0][1]
    );
    line(a.palmBase[0][0], a.palmBase[0][1], a.pinky[0][0], a.pinky[0][1]);

    noStroke();
    fill(skeletonColor);
    const xTextMargin = kpCircleDiameter / 2 + 3;
    text(
      "Thumb",
      a.thumb[a.thumb.length - 1][0] + xTextMargin,
      a.thumb[a.thumb.length - 1][1]
    );
    text(
      "Index Finger",
      a.indexFinger[a.indexFinger.length - 1][0] + xTextMargin,
      a.indexFinger[a.indexFinger.length - 1][1]
    );
    text(
      "Middle Finger",
      a.middleFinger[a.middleFinger.length - 1][0] + xTextMargin,
      a.middleFinger[a.middleFinger.length - 1][1]
    );
    text(
      "Ring Finger",
      a.ringFinger[a.ringFinger.length - 1][0] + xTextMargin,
      a.ringFinger[a.ringFinger.length - 1][1]
    );
    text(
      "Pinky",
      a.pinky[a.pinky.length - 1][0] + xTextMargin,
      a.pinky[a.pinky.length - 1][1]
    );
    text("Palm Base", a.palmBase[0][0] + xTextMargin, a.palmBase[0][1]);
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
      //this.myHand.on("hand", (results) => {
      //this.predictions = results;
      //});
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
    if (curHandPose) {
      drawHand(curHandPose);
    }
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
