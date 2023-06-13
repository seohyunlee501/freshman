class berryGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "딸기당근수박참외메론";
    this.turn = 0;
    this.buttons = [1,2,3,4,5];
    this.startTime = millis();
    this.bgmOn = true;
    this.userPlayed = false;
    this.infoStarted = false;
    this.infoTime = 0;
    this.currentTime = 0;
    this.endStarted = false;
    this.endTime = 0;
    this.loseIssue = 0;
    this.whatBerry = 0;
    this.berryCall = true;
    this.berryCallTime = 0;
  }
  round() {
    this.gameOver = false;
    this.berryBGM();
    while(!this.gameOver){
      if(this.idx == 3){
        this.playerTurn();
      } else{
        this.npcTurn();
      }
    }
  }

  berryBgm(){
    textSize(32);
    textAlign(CENTER);
    rectMode(CENTER);
    if (this.bgmOn) {
      if (millis() - this.startTime < 2000) {
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("딸기 당근 수박 참외 메론~ 게임!", w / 2, h / 2);
      } else {
        this.bgmOn = false;
        this.turn++;
      }
    }
  }

  playerTurn(){
    displayButtons();
    if(this.whatBerry == 1){
      if (this.beryyCall) {
        if (millis() - this.startTime < 400) {
          text("딸기!", 0.2 * w + 0.51 * h , 0.3 * h);
        }
    }

    
    this.turn++;

  }
}

  npcTurn(){
    fill(0);
    let x = 0.2 * w + 0.17 * h * this.idx;
    fill(255);

        if(this.turn % 14 == 1){
      if (this.beryyCall) {
        if (millis() - this.berryCallTime < 400) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 800) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1200) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1600) {
          text("딸기!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turn++;
          this.idx++;
        }
      }

    } else if(this.turn % 14 == 2 || this.turn % 14 == 0 && this.turn != 0){
      if (this.beryyCall) {
        if (millis() - this.berryCallTime < 400) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 800) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1200) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1600) {
          text("당근!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turn++;
          this.idx++;
        }
      }
      
    } else if(this.turn % 14 == 3 || this.turn % 14 == 13){
      if (this.beryyCall) {
        if (millis() - this.berryCallTime < 400) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 800) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1200) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1600) {
          text("수박!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turn++;
          this.idx++;
        }
      }
      
    } else if(this.turn % 14 == 4 || this.turn % 14 == 12){
      if (this.beryyCall) {
        if (millis() - this.berryCallTime < 400) {
          text("딸기", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 800) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1200) {
          text("수박!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1600) {
          text("참외!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turn++;
          this.idx++;
        }
      }
      
    } else if(this.turn % 14 == 5 || this.turn % 14 == 11){
      if (this.beryyCall) {
        if (millis() - this.berryCallTime < 400) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 800) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1200) {
          text("수박!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1600) {
          text("참외!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2000) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2400) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2800) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 3200) {
          text("메론!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turn++;
          this.idx++;
        }
      }
      
    } else if(this.turn % 14 == 6 || this.turn % 14 == 10){
      if (this.beryyCall) {
        if (millis() - this.berryCallTime < 400) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 800) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1200) {
          text("수박!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1600) {
          text("참외!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2000) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2400) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2800) {
          text("메론!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 3200) {
          text("딸기!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turn++;
          this.idx++;
        }
      }
      
    } else if(this.turn % 14 == 7 || this.turn % 14 == 9){
      if (this.beryyCall) {
        if (millis() - this.berryCallTime < 400) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 800) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1200) {
          text("수박!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1600) {
          text("참외!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2000) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2400) {
          text("메론!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2800) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 3200) {
          text("당근!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turn++;
          this.idx++;
        }
      }
      
    } else if(this.turn % 14 == 8){
      if (this.beryyCall) {
        if (millis() - this.berryCallTime < 400) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 800) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1200) {
          text("수박!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1600) {
          text("참외!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2000) {
          text("메론!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2400) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2800) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 3200) {
          text("수박!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turn++;
          this.idx++;
        }
      }
    } 
  }

  


  displayButtons(){
    this.shuffleArray();
    //buttons[] 순서대로 이미지 가져와서 배치 
    imageMode(CENTER);
    image(strawberry, w*0.1, h*0.8, w*0.16, h*0.2);
    image(carrot, w*0.25, h*0.8, w*0.16, h*0.2);
    image(watermelon, w*0.4, h*0.8, w*0.16, h*0.2);
    image(k_melon, w*0.55, h*0.8, w*0.16, h*0.2);
    image(melon, w*0.7, h*0.8, w*0.16, h*0.2);
  }

  shuffleArray() {
    for (let i = 4; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.buttons[i], this.buttons[j]] = [this.buttons[j], this.buttons[i]]; // 배열의 두 원소를 랜덤하게 교환
    }
  }

  rhythmIsLife() {
    console.log("rhythmislife");
    textSize(32);
    textAlign(CENTER);
    rectMode(CENTER);
    //if (this.rhythmIsLifeOn) {
    if (millis() - this.endTime < 1200) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("박자는 생명!", w / 2, h / 2);
    } else if (millis() - this.endTime < 2400) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("박자는 생명!", w / 2, h / 2);
    } else if (millis() - this.endTime < 3600) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("생명! 생명!!", w / 2, h / 2);
    } else if (millis() - this.endTime < 4800) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("생명! 생명! 생명!", w / 2, h / 2);
    }
  }

  focusIsLife() {
    console.log("focusislife");
    textSize(32);
    textAlign(CENTER);
    rectMode(CENTER);
    if (millis() - this.endTime < 1200) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("집중은 생명!", w / 2, h / 2);
    } else if (millis() - this.endTime < 2400) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("집중은 생명!", w / 2, h / 2);
    } else if (millis() - this.endTime < 3600) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("생명! 생명!!", w / 2, h / 2);
    } else if (millis() - this.endTime < 4800) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("생명! 생명! 생명!", w / 2, h / 2);
    }
  }


  gameend() {
    if (!this.endStarted) {
      this.endStarted = true;
      this.endTime = millis();
    } else {
      if (millis() - this.endTime < 4800) {
        if (this.loseIssue == 1) {
          this.focusIsLife();
        } else if (this.loseIssue == 2) {
          this.rhythmIsLife();
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
    this.berryBgm();
  } else {
    if (this.idx == 3) {
      this.playerTurn();
    } else {
      this.npcTurn();
    }

    this.displayButtons();
  }
}
}


/*
  round() {
    turn = 0;
    while(gameIsOn){
      berryBGM();
      if(idx == 4){
        //timer
        if(mouseIsClicked){
          mousePressed();
          
          if (???){
            //player fail
            gameIsOn = false;
          } else {
            //player success
          }
        } else if (??){
          //time is over
          //bgm
          gameIsOn = false;
        }
      } else{
        if(turn >= 12){
          //npc fail
          //npc success
          } else {
          //npc success
          }
       turn++;
    }

  }*/