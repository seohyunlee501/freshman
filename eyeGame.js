class eyeGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "눈치게임";
    this.turn = 0;
    this.failureInterval = 401;
    this.lastCalledTime = 0;
    this.currentNumber = 1;
    this.randChar = [[],[],[],[],[]];
    this.interruption = false;
    this.playerTurnPassed = false;
    this.playerCalledTime = 0;
    this.gameStartTime = 0;
    this.npcOneDisplay = false;
    this.npcTwoDisplay = false;
    this.npcThreeDisplay = false;
    this.npcFourDisplay = false;
    this.npcFiveDisplay = false;
    this.playerDisplay = false;
    this.tempOne = true;
    this.tempTwo = true;
    this.tempThree = true;
    this.tempFour = true;
    this.tempFive = true;
    this.displayNumberOne;
    this.displayNumberTwo;
    this.displayNumberThree;
    this.displayNumberFour;
    this.displayNumberFive;
    this.playerNumber;
    this.tempDisplay = true;
    this.tempPlayer = true;
    this.endStartTime;
    this.endPlayer = false;
    this.endNPC = false;
    this.randomTime = [];
    this.npcStart = [false, false, false, false, false];
    
    for (let i = 0; i < 3; i++) {
      this.randChar[i][0] = this.chars[i];
      this.randChar[i][1] = Math.floor(random(200, 1500) / 100) * 100; //this.randChar[i][1]: callInterval
      this.randChar[i][2] = false; //this.randChar[i][2]: called
      this.randChar[i][3] = i;
    }

    for (let i = 4; i < 6; i++) {
      this.randChar[i-1][0] = this.chars[i]
      this.randChar[i-1][1] = Math.floor(random(200, 1500) / 100) * 100;
      this.randChar[i-1][2] = false;
      this.randChar[i-1][3] = i
    }

    this.randChar.sort(() => random() - 0.5);
    this.randChar[0][1] = 1000;
    this.randChar[1][1] = Math.floor(random(1000, 1500) / 100) * 100
    
    for (let i = 0; i < 5; i++){
      this.randomTime[i] = this.randChar[i][1];
    }

    for (let i = 0; i < 5; i++){
      console.log("call interval: " + this.randChar[i][1] + " called: " +  this.randChar[i][2] + " index: " +  this.randChar[i][3]);
    }

    this.lastCalledTime = millis() + 4000;
    this.gameStartTime = millis();
  }

  interrupt() {
    this.idx = 3;
    this.playerCalledTime = millis();
    if(!this.gameOver && this.currentNumber < 5){
      if(this.currentNumber == 1){
        console.log(this.currentNumber); //should be displayed later
        this.currentNumber++;
        this.lastCalledTime = millis();
        this.playerTurnPassed = true;
      }else{
        if(this.playerCalledTime - this.lastCalledTime < this.failureInterval){
          console.log(this.currentNumber); //should be displayed later
          this.lastCalledTime = millis();
          this.currentNumber++;
          this.endPlayer = true;
          this.endStartTime = millis();
          this.playerTurnPassed = true;
        }else if(millis() - this.lastCalledTime > this.failureInterval){
          this.lastCalledTime = millis();
          this.currentNumber++;
          this.playerTurnPassed = true;
        }
      }
    }else{
      this.endPlayer = true;
      this.endStartTime = millis();
    }
  }

  intro() {
    if(millis() - this.gameStartTime < 2000) {
      fill(255);
      rectMode(CENTER);
      rect(w / 2, h / 2, w / 2, h / 2);
      fill(0);
      textAlign(CENTER);
      textSize(50);
      text("READY", w / 2, h / 2);
    }else if(millis() - this.gameStartTime < 4000){
      fill(255);
      rectMode(CENTER);
      rect(w / 2, h / 2, w / 2, h / 2);
      fill(0);
      textAlign(CENTER);
      textSize(50);
      text("START!!!", w / 2, h / 2);
    }
  }

  gamePlay() {
    this.intro();
    if(millis() - this.gameStartTime > 4000) {
      this.playerPlay();
      this.npcPlay();
      this.displayOverhead();
      this.endGame();
      }
    }

  playerPlay() {
    //player's play
    if(!this.interruption && !this.playerTurnPassed){
      push();
      translate(w * 0.4, h * 0.9);
      fill(255);
      rectMode(CENTER);
      rect(0, 0, w * 0.5, h * 0.08);
      fill(0);
      text('Enter를 눌러 번호를 말하세요!', 0, 0);
      pop();
    }else if(this.interruption && !this.playerTurnPassed){
      if(this.tempDisplay){
        this.playerDisplay = true;
        this.tempDisplay = false;
      }
      this.interrupt();
    }else if(this.playerTurnPassed){

    }
  }

  displayOverhead() {
    if(this.npcOneDisplay) {
      let displayIdx = this.randChar[0][3];
      if(this.tempOne){
        this.displayNumberOne = this.currentNumber - 1;
        this.tempOne = false;
      }
      this.showNums(displayIdx, this.displayNumberOne);
    }
    if(this.npcTwoDisplay) {
      let displayIdx = this.randChar[1][3];
      if(this.tempTwo){
        this.displayNumberTwo = this.currentNumber - 1;
        this.tempTwo = false;
      }
      this.showNums(displayIdx, this.displayNumberTwo);
    }
    if(this.npcThreeDisplay) {
      let displayIdx = this.randChar[2][3];
      if(this.tempThree){
        this.displayNumberThree = this.currentNumber - 1;
        this.tempThree = false;
      }
      this.showNums(displayIdx, this.displayNumberThree);
    }
    if(this.npcFourDisplay) {
      let displayIdx = this.randChar[3][3];
      if(this.tempFour){
        this.displayNumberFour = this.currentNumber - 1;
        this.tempFour = false;
      }
      this.showNums(displayIdx, this.displayNumberFour);
    }
    if(this.npcFiveDisplay) {
      let displayIdx = this.randChar[4][3];
      if(this.tempFive){
        this.displayNumberFive = this.currentNumber - 1;
        this.tempFive= false;
      }
      this.showNums(displayIdx, this.displayNumberFive);
    }
    if(this.playerDisplay){
      if(this.tempPlayer){
        this.playerNumber = this.currentNumber - 1;
        this.tempPlayer = false;
      }
      if(this.playerNumber == 1){
        this.showNums(3, 1);
      }else{
        this.showNums(3, this.playerNumber);
      }
    }
  }

  showNums(npcIdx, numberCalled) {
    if(numberCalled == 1){
      push();
      translate(0.2 * w + 0.17 * h * npcIdx, 0.3 * h);
      textAlign(CENTER, CENTER);
      fill(255);
      textSize(50);
      text('눈치게임 1!', 0, 0);
      pop();
    }else{
      push();
      translate(0.2 * w + 0.17 * h * npcIdx, 0.3 * h);
      textAlign(CENTER, CENTER);
      fill(255);
      textSize(50);
      text(numberCalled + '!', 0, 0);
      pop();
    }
  }

  timeCheck() {
    if(millis() - this.lastCalledTime > this.randomTime[0] && this.npcStart[0] == false){
      this.npcStart[0] = true;
      this.lastCalledTime = millis();
    } else if(millis() - this.lastCalledTime > this.randomTime[1] && this.npcStart[1] == false) {
      this.npcStart[1] = true;
      this.lastCalledTime = millis();
    } else if(millis() - this.lastCalledTime > this.randomTime[2] && this.npcStart[2] == false) {
      this.npcStart[2] = true;
      this.lastCalledTime = millis();
    } else if(millis() - this.lastCalledTime > this.randomTime[3] && this.npcStart[3] == false) {
      this.npcStart[3] = true;
      this.lastCalledTime = millis()
    } else if(millis() = this.lastCalledTime > this.randomTime[4] && this.npcStart[4] == false) {
      this.npcStart[4] = true;
      this.lastCalledTime = millis();
    }
  }

  npcPlay() {
    //npcs' play
    if(!this.endNPC && !this.endPlayer){
      if(!this.gameOver && this.randChar[0][0].die == false && this.randChar[0][2] == false && millis() - this.lastCalledTime > this.randChar[0][1]){
        this.idx = this.randChar[0][3];
        this.npcOneDisplay = true;
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[0][2] = true;
        this.currentNumber++;
      }else if(this.randChar[0][0].die == false && this.randChar[0][2] == false && this.randChar[0][1] < this.failureInterval){
        this.idx = this.randChar[0][3];
        this.npcOneDisplay = true;
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[0][2] = true;
        this.endNPC = true;
        this.endStartTime = millis();
        this.randChar[1][2] = true;
        this.randChar[2][2] = true;
        this.randChar[3][2] = true;
        this.randChar[4][2] = true;
      }
    }
    if(!this.endNPC && !this.endPlayer){
      if(!this.gameOver && this.randChar[1][0].die == false && this.randChar[1][2] == false && millis() - this.lastCalledTime > this.randChar[1][1] && this.randChar[1][1] > this.failureInterval && this.randChar[0][2] == true){
        this.idx = this.randChar[1][3];
        this.npcTwoDisplay = true;
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[1][2] = true;
        this.currentNumber++;
      }else if(this.randChar[1][0].die == false && this.randChar[1][2] == false && this.randChar[1][1] < this.failureInterval && this.randChar[0][2] == true && millis() - this.lastCalledTime > this.randChar[1][1]){
        this.idx = this.randChar[1][3];
        this.npcTwoDisplay = true;
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[1][2] = true;
        this.endNPC = true;
        this.endStartTime = millis();
        this.randChar[2][2] = true;
        this.randChar[3][2] = true;
        this.randChar[4][2] = true;
      }
    }
    if(!this.endNPC && !this.endPlayer){
      if(!this.gameOver && this.randChar[2][0].die == false && this.randChar[2][2] == false && millis() - this.lastCalledTime > this.randChar[2][1] && this.randChar[2][1] > this.failureInterval && this.randChar[1][2] == true){
        this.idx = this.randChar[2][3];
        this.npcThreeDisplay = true;
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[2][2] = true;
        this.currentNumber++;
      }else if(this.randChar[2][0].die == false && this.randChar[2][2] == false && this.randChar[2][1] < this.failureInterval && this.randChar[1][2] == true && millis() - this.lastCalledTime > this.randChar[2][1]){
        this.idx = this.randChar[2][3];
        this.npcThreeDisplay = true;
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[2][2] = true;
        this.endNPC = true;
        this.endStartTime = millis();
        this.randChar[3][2] = true;
        this.randChar[4][2] = true;
      }
    }
    if(!this.endNPC && !this.endPlayer){
      if(!this.gameOver && this.randChar[3][0].die == false && this.randChar[3][2] == false && millis() - this.lastCalledTime > this.randChar[3][1] && this.randChar[3][1] > this.failureInterval && this.randChar[2][2] == true){
        this.idx = this.randChar[3][3];
        this.npcFourDisplay = true;
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[3][2] = true;
        this.currentNumber++;
      }else if(this.randChar[3][0].die == false && this.randChar[3][2] == false && this.randChar[3][1] < this.failureInterval && this.randChar[2][2] == true && millis() - this.lastCalledTime > this.randChar[3][1]){
        this.idx = this.randChar[3][3];
        this.npcFourDisplay = true;
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[3][2] = true;
        this.endNPC = true;
        this.endStartTime = millis();
        this.randChar[4][2] = true;
      }
    }
    
    if(!this.endNPC && !this.endPlayer){
      if(!this.gameOver && this.randChar[4][0].die == false && this.randChar[4][2] == false && millis() - this.lastCalledTime > this.randChar[4][1] && this.randChar[4][1] > this.failureInterval && this.randChar[3][2] == true){
        this.idx = this.randChar[4][3];
        this.npcFiveDisplay = true;
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[4][2] = true;
        this.currentNumber++;
        if(this.currentNumber == 7){
          this.endNPC = true;
          this.endStartTime = millis();
        }else if(this.currentNumber == 6){
          this.endPlayer = true;
          this.endStartTime = millis();
        }
      }else if(this.randChar[4][0].die == false && this.randChar[4][2] == false && this.randChar[4][1] < this.failureInterval && this.randChar[3][2] == true && millis() - this.lastCalledTime > this.randChar[4][1]){
        this.idx = this.randChar[4][3];
        this.npcFiveDisplay = true;
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[4][2] = true;
        this.endNPC = true;
        this.endStartTime = millis();
      }
    }
  }
  
  endGame() {
    if(this.endPlayer){
      this.idx = 3;
      if(millis()- this.endStartTime < 2000){

      } else if(millis() - this.endStartTime < 4000){
        this.npcOneDisplay = false;
        this.npcTwoDisplay = false;
        this.npcThreeDisplay = false;
        this.npcFourDisplay = false;
        this.npcFiveDisplay = false;
        this.playerDisplay = false;
        fill(255);
        rectMode(CENTER);
        rect(w/2, h/2, w/2, h/3);
        fill(0);
        textAlign(CENTER);
        textSize(32);
        text('눈치는 생명! 생명!', w / 2, h * 0.5);
      } else if(millis() - this.endStartTime < 6000){
        fill(255);
        rectMode(CENTER);
        rect(w/2, h/2, w/2, h/3);
        fill(0);
        textAlign(CENTER);
        textSize(32);
        text('생명! 생명! 생명! 생명! 생명!', w / 2, h * 0.5);
      }else if(millis() - this.endStartTime > 6000){
        this.gameOver = true;
        this.everyone[this.idx].lose();
        this.gameList.gameNum++;
      }
    }else if(this.endNPC){
      if(millis() - this.endStartTime < 2000){

      } else if(millis() - this.endStartTime < 4000){
        this.npcOneDisplay = false;
        this.npcTwoDisplay = false;
        this.npcThreeDisplay = false;
        this.npcFourDisplay = false;
        this.npcFiveDisplay = false;
        this.playerDisplay = false;
        fill(255);
        rectMode(CENTER);
        rect(w/2, h/2, w/3, h/3);
        fill(0);
        textAlign(CENTER);
        textSize(32);
        text('휴~ 살았다', w / 2, h / 2);
      }else if(millis() - this.endStartTime > 4000){
        this.gameOver = true;
        this.everyone[this.idx].lose();
        this.gameList.gameNum++;
      }
    }
  }

  round() {
    this.gamePlay();
  }
}
