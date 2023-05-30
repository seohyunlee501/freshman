var gameButton;

class eyeGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "눈치게임";
    this.turn = 0;
    this.failureInterval = 1000;
    this.lastCalledTime = 0;
    this.currentNumber = 1;
    this.randChar = [[],[],[],[],[]];
  }


  shuffleParticipants() {
    for (let i = 0; i < 5; i++){
      this.randChar[i][0] = this.chars[i];
    }
    this.randChar.sort(() => Math.random() - 0.5);
  }

  gameSetup() {
    this.gameButton = createButton("번호 말하기!");
    this.shuffleParticipants();
    for (let i = 0; i < 5; i++) {
      this.randChar[i][1] = Math.random(800, 10000); //this.randChar[i][1]: callInterval
      this.randChar[i][2] = false; //this.randChar[i][2]: called
    }
    this.lastCalledTime = millis();
  }
  static interrupt() {
    this.gameButton.position(w * -0.5, h * -0.5);
    if(!this.gameOver && this.currentNumber + 1 < this.chars.length){
      if(millis() < this.randChar[0][1]){
        console.log(this.currentNumber); //should be displayed later
        this.currentNumber++;
        this.lastCalledTime = millis();
      }else{
        if(millis() - this.lastCalledTime < this.failureInterval){
          console.log(this.currentNumber); //should be displayed later
          this.lastCalledTime = millis();
          this.currentNumber++;
          this.playerLose();
        }else if(millis() - this.lastCalledTime > this.failureInterval){
          console.log(this.currentNumber); //should be displayed later
          this.lastCalledTime = millis();
          this.currentNumber++;
        }
      }
    }
  }

  gamePlay() {
    //player's play
    this.gameButton.position(w * 0.5, h * 0.9);
    this.gameButton.mousePressed(this.interrupt);

    //npcs' play
    while(!this.gameOver) {
      console.log(this.randChar[0][0]);
      if(!this.gameOver && this.randChar[0][0].die == false && this.randChar[0][2] == false && millis() - this.lastCalledTime > this.randChar[0][1]){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[0][2] = true;
        this.currentNumber++;
      }else if(this.randChar[0][0].die == false && this.randChar[0][2] == false && this.randChar[0][1] < this.failureInterval){
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

      if(!this.gameOver && this.randChar[1][0].die == false && this.randChar[1][2] == false && millis() - this.lastCalledTime > this.randChar[1][1]){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[1][2] = true;
        this.currentNumber++;
      }else if(this.randChar[1][0].die == false && this.randChar[1][2] == false && this.randChar[1][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[1][2] = true;
        this.currentNumber++;
        this.npcLose();
        this.randChar[2][2] = true;
        this.randChar[3][2] = true;
        this.randChar[4][2] = true;
      }
  
      if(!this.gameOver && this.randChar[2][0].die == false && this.randChar[2][2] == false && millis() - this.lastCalledTime > this.randChar[2][1]){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[2][2] = true;
        this.currentNumber++;
      }else if(this.randChar[2][0].die == false && this.randChar[2][2] == false && this.randChar[2][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[2][2] = true;
        this.currentNumber++;
        this.npcLose();
        this.randChar[3][2] = true;
        this.randChar[4][2] = true;
      }
    
      if(!this.gameOver && this.randChar[3][0].die == false && this.randChar[3][2] == false && millis() - this.lastCalledTime > this.randChar[3][1]){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[3][2] = true;
        this.currentNumber++;
      }else if(this.randChar[3][0].die == false && this.randChar[3][2] == false && this.randChar[3][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[3][2] = true;
        this.currentNumber++;
        this.npcLose();
        this.randChar[4][2] = true;
      }
    
    
      if(!this.gameOver && this.randChar[4][0].die == false && this.randChar[4][2] == false && millis() - this.lastCalledTime > this.randChar[4][1]){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        this.randChar[4][2] = true;
        this.currentNumber++;
        this.npcLose();
      }else if(this.randChar[4][0].die == false && this.randChar[4][2] == false && this.randChar[4][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        this.randChar[4][2] = true;
        this.currentNumber++;
        this.npcLose();
      }
    }
  }

  npcLose() {
    console.log("YOU WIN!"); // should be changed with display
    this.gameButton.position(-999, -999);
    this.gameOver = true;
    // npc 별 alcholblood++ 하는 기능 추가해야 함 & 틀린 NPC의 index를 지정.
  }

  playerLose() {
    console.log("GAME OVER!"); // should be changed with display
    this.gameButton.position(-999, -999);
    this.gameOver = true;
    this.player.alcholblood++;
    this.idx = 3;
  }
  
  round() {
    this.gameSetup();
    this.gamePlay();
  }
}