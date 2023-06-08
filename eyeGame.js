class eyeGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "눈치게임";
    this.turn = 0;
    this.failureInterval = 1000;
    this.lastCalledTime = 0;
    this.currentNumber = 1;
    this.randChar = [[],[],[],[],[]];
    this.interruption = false;


    for (let i = 0; i < 5; i++) {
      this.randChar[i][1] = Math.floor(random(800, 10000) / 100) * 100; //this.randChar[i][1]: callInterval
      this.randChar[i][2] = false; //this.randChar[i][2]: called
    }

    this.lastCalledTime = floor(millis() / 100) * 100;
  }


  shuffleParticipants() {
    for (let i = 0; i < 5; i++){
      this.randChar[i][0] = this.chars[i];
    }
    this.randChar.sort(() => Math.random() - 0.5);
  }

  gameSetup() {
    this.shuffleParticipants();
  }

  static interrupt() {
    if(!this.gameOver && this.currentNumber + 1 < this.chars.length){
      if(Math.floor(millis() / 100) * 100 < this.randChar[0][1]){
        console.log(this.currentNumber); //should be displayed later
        this.currentNumber++;
        this.lastCalledTime = Math.floor(millis() / 100) * 100;
      }else{
        if(Math.floor(millis() / 100) * 100 - this.lastCalledTime < this.failureInterval){
          console.log(this.currentNumber); //should be displayed later
          this.lastCalledTime = Math.floor(millis() / 100) * 100;
          this.currentNumber++;
          this.playerLose();
        }else if(Math.floor(millis() / 100) * 100 - this.lastCalledTime > this.failureInterval){
          console.log(this.currentNumber); //should be displayed later
          this.lastCalledTime = Math.floor(millis() / 100) * 100;
          this.currentNumber++;
        }
      }
    }
  }

  gamePlay() {
    this.playerPlay();
    setInterval(this.npcPlay(), 100);
  }

  playerPlay() {
    //player's play
    if(!this.interruption){
      push();
      translate(w * 0.4, h * 0.9);
      fill(255);
      rectMode(CENTER);
      rect(0, 0, w * 0.5, h * 0.08);
      text('Enter를 눌러 번호를 말하세요!', 0, 0);
      pop();
    }else if(this.interruption){
      this.interrupt();
    }
  }

  npcPlay() {
    //npcs' play
    while(!this.gameOver) {
      if(!this.gameOver && this.randChar[0][0].die == false && this.randChar[0][2] == false && (Math.floor(millis() / 100) * 100) - this.lastCalledTime > this.randChar[0][1]){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = Math.floor(millis() / 100) * 100;
        this.randChar[0][2] = true;
        this.currentNumber++;
      }else if(this.randChar[0][0].die == false && this.randChar[0][2] == false && this.randChar[0][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = Math.floor(millis() / 100) * 100;
        this.randChar[0][2] = true;
        this.currentNumber++;
        this.npcLose();
        this.randChar[1][2] = true;
        this.randChar[2][2] = true;
        this.randChar[3][2] = true;
        this.randChar[4][2] = true;
      }

      if(!this.gameOver && this.randChar[1][0].die == false && this.randChar[1][2] == false && Math.floor(millis() / 100) * 100 - this.lastCalledTime > this.randChar[1][1] && this.randChar[1][1] > this.failureInterval){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = Math.floor(millis() / 100) * 100;
        this.randChar[1][2] = true;
        this.currentNumber++;
      }else if(this.randChar[1][0].die == false && this.randChar[1][2] == false && this.randChar[1][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = Math.floor(millis() / 100) * 100;
        this.randChar[1][2] = true;
        this.currentNumber++;
        this.npcLose();
        this.randChar[2][2] = true;
        this.randChar[3][2] = true;
        this.randChar[4][2] = true;
      }
  
      if(!this.gameOver && this.randChar[2][0].die == false && this.randChar[2][2] == false && Math.floor(millis() / 100) * 100 - this.lastCalledTime > this.randChar[2][1] && this.randChar[2][1] > this.failureInterval){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = Math.floor(millis() / 100) * 100;
        this.randChar[2][2] = true;
        this.currentNumber++;
      }else if(this.randChar[2][0].die == false && this.randChar[2][2] == false && this.randChar[2][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = Math.floor(millis() / 100) * 100;
        this.randChar[2][2] = true;
        this.currentNumber++;
        this.npcLose();
        this.randChar[3][2] = true;
        this.randChar[4][2] = true;
      }
    
      if(!this.gameOver && this.randChar[3][0].die == false && this.randChar[3][2] == false && Math.floor(millis() / 100) * 100 - this.lastCalledTime > this.randChar[3][1] && this.randChar[3][1] > this.failureInterval){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = Math.floor(millis() / 100) * 100;
        this.randChar[3][2] = true;
        this.currentNumber++;
      }else if(this.randChar[3][0].die == false && this.randChar[3][2] == false && this.randChar[3][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = Math.floor(millis() / 100) * 100;
        this.randChar[3][2] = true;
        this.currentNumber++;
        this.npcLose();
        this.randChar[4][2] = true;
      }
    
    
      if(!this.gameOver && this.randChar[4][0].die == false && this.randChar[4][2] == false && Math.floor(millis() / 100) * 100 - this.lastCalledTime > this.randChar[4][1] && this.randChar[4][1] > this.failureInterval){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = Math.floor(millis() / 100) * 100;
        this.randChar[4][2] = true;
        this.currentNumber++;
        this.playerLose();
      }else if(this.randChar[4][0].die == false && this.randChar[4][2] == false && this.randChar[4][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = Math.floor(millis() / 100) * 100;
        this.randChar[4][2] = true;
        this.currentNumber++;
        this.npcLose();
      }
    }
  }

  npcLose() {
    console.log("YOU WIN!"); // should be changed with display
    this.gameOver = true;
    // npc 별 alcholblood++ 하는 기능 추가해야 함 & 틀린 NPC의 index를 지정.
  }

  playerLose() {
    console.log("GAME OVER!"); // should be changed with display
    this.gameOver = true;
    this.player.alcholblood++;
    this.idx = 3;
  }
  
  round() {
    this.gameSetup();
    this.gamePlay();
  }
}