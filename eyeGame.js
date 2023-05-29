let randChar = [[], [], [], [], []];
var gameButton;

class eyeGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "눈치게임";
    this.chars = Game.chars;
    this.turn = 0;
    this.gameOver = Game.gameOver;
    this.player = Game.player;
    this.failureInterval = 1000;
    this.lastCalledTime = 0;
    this.currentNumber = 1;
  }


  shuffleParticipants() {
    randChar.sort(() => Math.random() - 0.5);
  }

  gameSetup() {
    gameButton = createButton("번호 말하기!");
    this.shuffleParticipants();
    for (let i = 0; i < 5; i++) {
      randChar[i][1] = Math.random(800, 10000); //randChar[i][1]: callInterval
      randChar[i][2] = false; //randChar[i][2]: called
    }
  }
  interrupt() {
    gameButton.position(-999, -999)
    if(!gameOver && this.currentNumber + 1 < this.chars.length){
      if(millis() < randChar[0][1]){
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
    gameButton.position(w * 0.5, h * 0.9);
    gameButton.mousePressed(interrupt);

    //npcs' play
    while(!gameOver) {
      if(randChar[0][0].die == false && randChar[0][2] == false && millis() - this.lastCalledTime > randChar[0][1]){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        randChar[0][2] = true;
        this.currentNumber++;
      }else if(randChar[0][0].die == false && randChar[0][2] == false && randChar[0][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        randChar[0][2] = true;
        this.currentNumber++;
        this.npcLose();
      }

      if(randChar[1][0].die == false && randChar[1][2] == false && millis() - this.lastCalledTime > randChar[1][1]){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        randChar[1][2] = true;
        this.currentNumber++;
      }else if(randChar[1][0].die == false && randChar[1][2] == false && randChar[1][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        randChar[1][2] = true;
        this.currentNumber++;
        this.npcLose();
      }

      if(randChar[2][0].die == false && randChar[2][2] == false && millis() - this.lastCalledTime > randChar[2][1]){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        randChar[2][2] = true;
        this.currentNumber++;
      }else if(randChar[2][0].die == false && randChar[2][2] == false && randChar[2][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        randChar[2][2] = true;
        this.currentNumber++;
        this.npcLose();
      }

      if(randChar[3][0].die == false && randChar[3][2] == false && millis() - this.lastCalledTime > randChar[3][1]){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        randChar[3][2] = true;
        this.currentNumber++;
      }else if(randChar[3][0].die == false && randChar[3][2] == false && randChar[3][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        randChar[3][2] = true;
        this.currentNumber++;
        this.npcLose();
      }

      if(randChar[4][0].die == false && randChar[4][2] == false && millis() - this.lastCalledTime > randChar[4][1]){
        console.log(this.currentNumber); // should be changed with display
        this.lastCalledTime = millis();
        randChar[4][2] = true;
        this.currentNumber++;
        this.npcLose();
      }else if(randChar[4][0].die == false && randChar[4][2] == false && randChar[4][1] < this.failureInterval){
        console.log(this.currentNumber);
        this.lastCalledTime = millis();
        randChar[4][2] = true;
        this.currentNumber++;
        this.npcLose();
      }
    }
  }

  npcLose() {
    console.log("YOU WIN!"); // should be changed with display
    gameButton.position(-999, -999);
    this.gameOver = true;
    // npc 별 alcholblood++ 하는 기능 추가해야 함 & 틀린 NPC의 index를 지정.
  }

  playerLose() {
    console.log("GAME OVER!"); // should be changed with display
    gameButton.position(-999, -999);
    this.gameOver = true;
    this.player.alcholblood++;
    this.idx = 3;
  }
  
  round() {}
}