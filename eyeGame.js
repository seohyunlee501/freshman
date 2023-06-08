class eyeGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "눈치게임";
    this.turn = 0;
    this.failureInterval = 499;
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
    this.tempPlayer = true;


    
    for (let i = 0; i < 3; i++) {
      this.randChar[i][0] = this.chars[i];
      this.randChar[i][1] = Math.floor(random(300, 5000) / 100) * 100; //this.randChar[i][1]: callInterval
      this.randChar[i][2] = false; //this.randChar[i][2]: called
      this.randChar[i][3] = i;
    }

    for (let i = 4; i < 6; i++) {
      this.randChar[i-1][0] = this.chars[i]
      this.randChar[i-1][1] = Math.floor(random(300, 5000) / 100) * 100;
      this.randChar[i-1][2] = false;
      this.randChar[i-1][3] = i
    }
    
    this.randChar.sort(() => random() - 0.5);
    this.randChar[0][1] = 700;

    for (let i = 0; i < 5; i++){
      console.log(this.randChar[i][1], this.randChar[i][3]);
    }

    this.lastCalledTime = millis();
    this.gameStartTime = millis();
  }

  interrupt() {
    this.playerCalledTime = millis();
    if(!this.gameOver && this.currentNumber < 5){
      if(this.currentNumber == 1){
        this.showNums(3, 1);
        console.log(this.currentNumber); //should be displayed later
        this.currentNumber++;
        this.lastCalledTime = millis();
        this.playerTurnPassed = true;
      }else{
        if(this.playerCalledTime - this.lastCalledTime < this.failureInterval){
          if(this.tempPlayer){
            this.playerNumber = this.currentNumber;
            this.tempPlayer = false;
          }
          this.showNums(3, this.playerNumber);
          console.log(this.currentNumber); //should be displayed later
          this.lastCalledTime = millis();
          this.currentNumber++;
          this.playerLose();
          this.playerTurnPassed = true;
        }else if(millis() - this.lastCalledTime > this.failureInterval){
          console.log(this.currentNumber); //should be displayed later
          if(this.tempPlayer){
            this.playerNumber = this.currentNumber;
            this.tempPlayer = false;
          }
          this.showNums(3, this.playerNumber);
          this.lastCalledTime = millis();
          this.currentNumber++;
          this.playerTurnPassed = true;
        }
      }
    }else{
      this.playerLose();
    }
  }

  gamePlay() {
    this.playerPlay();
    this.npcPlay();
    this.displayOverhead();
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
      this.interrupt();
    }else if(this.playerTurnPassed){
      this.showNums(3, this.playerNumber);
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

  npcPlay() {
    //npcs' play
      if(!this.gameOver && this.randChar[0][0].die == false && this.randChar[0][2] == false && (millis()) - this.lastCalledTime > this.randChar[0][1]){
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
        this.currentNumber++;
        this.npcLose();
        this.randChar[1][2] = true;
        this.randChar[2][2] = true;
        this.randChar[3][2] = true;
        this.randChar[4][2] = true;
      }

      if(!this.gameOver && this.randChar[1][0].die == false && this.randChar[1][2] == false && millis() - this.lastCalledTime > this.randChar[1][1] && this.randChar[1][1] > this.failureInterval && this.randChar[0][2] == true){
        this.idx = this.randChar[1][3];
        this.npcTwoDisplay = true;
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[1][2] = true;
        this.currentNumber++;
      }else if(this.randChar[1][0].die == false && this.randChar[1][2] == false && this.randChar[1][1] < this.failureInterval){
        this.idx = this.randChar[1][3];
        this.npcTwoDisplay = true;
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[1][2] = true;
        this.currentNumber++;
        this.npcLose();
        this.randChar[2][2] = true;
        this.randChar[3][2] = true;
        this.randChar[4][2] = true;
      }
  
      if(!this.gameOver && this.randChar[2][0].die == false && this.randChar[2][2] == false && millis() - this.lastCalledTime > this.randChar[2][1] && this.randChar[2][1] > this.failureInterval && this.randChar[1][2] == true){
        this.idx = this.randChar[2][3];
        this.npcThreeDisplay = true;
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[2][2] = true;
        this.currentNumber++;
      }else if(this.randChar[2][0].die == false && this.randChar[2][2] == false && this.randChar[2][1] < this.failureInterval){
        this.idx = this.randChar[2][3];
        this.npcThreeDisplay = true;
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[2][2] = true;
        this.currentNumber++;
        this.npcLose();
        this.randChar[3][2] = true;
        this.randChar[4][2] = true;
      }
    
      if(!this.gameOver && this.randChar[3][0].die == false && this.randChar[3][2] == false && millis() - this.lastCalledTime > this.randChar[3][1] && this.randChar[3][1] > this.failureInterval && this.randChar[2][2] == true){
        this.idx = this.randChar[3][3];
        this.npcFourDisplay = true;
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[3][2] = true;
        this.currentNumber++;
      }else if(this.randChar[3][0].die == false && this.randChar[3][2] == false && this.randChar[3][1] < this.failureInterval){
        this.idx = this.randChar[3][3];
        this.npcFourDisplay = true;
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[3][2] = true;
        this.currentNumber++;
        this.npcLose();
        this.randChar[4][2] = true;
      }
    
    
      if(!this.gameOver && this.randChar[4][0].die == false && this.randChar[4][2] == false && millis() - this.lastCalledTime > this.randChar[4][1] && this.randChar[4][1] > this.failureInterval && this.randChar[3][2] == true){
        this.idx = this.randChar[4][3];
        this.npcFiveDisplay = true;
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[4][2] = true;
        if(this.currentNumber == 6){
          this.npcLose();
        }else if(this.currentNumber == 5){
          this.playerLose();
        }
      }else if(this.randChar[4][0].die == false && this.randChar[4][2] == false && this.randChar[4][1] < this.failureInterval){
        this.idx = this.randChar[4][3];
        this.npcFiveDisplay = true;
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[4][2] = true;
        this.currentNumber++;
        this.npcLose();
      }
  }

  npcLose() {
    console.log("YOU WIN!"); // should be changed with display
    this.gameOver = true;
    this.npcOneDisplay = false;
    this.npcTwoDisplay = false;
    this.npcThreeDisplay = false;
    this.npcFourDisplay = false;
    this.npcFiveDisplay = false;
    // npc 별 alcholblood++ 하는 기능 추가해야 함 & 틀린 NPC의 index를 지정.
  }

  playerLose() {
    console.log("GAME OVER!"); // should be changed with display
    this.gameOver = true;
    this.player.alcholblood++;
    this.idx = 3;
    this.npcOneDisplay = false;
    this.npcTwoDisplay = false;
    this.npcThreeDisplay = false;
    this.npcFourDisplay = false;
    this.npcFiveDisplay = false;
  }
  
  round() {
    this.gamePlay();
  }
}