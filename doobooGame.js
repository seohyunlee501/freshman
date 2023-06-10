class doobooGame extends Game {
  constructor(_idx, _gameList, _dbCount) {
    super(_idx, _gameList);
    this.gameName = "두부게임";
    this.dbCount = _dbCount;
    this.turn = 0;
    this.currentTime = millis();
    this.bgmOn = true;
  }
  round() {
    if(this.turn == 0){
      this.dbBgm();
    } else {
        if(this.this.idx == 3){
          this.playerTurn();
        } else {
          this.npcTurn();
        }
    }
  }

  dbBgm(){
    textSize(32);
    textAlign(CENTER);
    rectMode(CENTER);
    if(this.bgmOn){
      if(millis() - this.currentTime < 1200){
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("두~부 두부 두부", w / 2, h / 2);
      } else if(millis() - this.currentTime < 2400){
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("으쌰!으쌰!으쌰!으쌰!", w / 2, h / 2);
      } else if(millis() - this.currentTime < 3600){
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("두~부 두부 두부", w / 2, h / 2);
      } else if(millis() - this.currentTime < 4800){
        fill(255);
        rect(w / 2, h / 2, w / 3, h / 3);
        fill(0);
        text("으쌰!으쌰!으쌰!으쌰!", w / 2, h / 2);
      } else {
        this.bgmOn = false;
        this.turn++;
      }
    }
    
  }



  playerTurn(){
    //6초 안에 key input이 없다면 rhythmIsLife() 호출 후 gameOver = true;하는 메소드를 구현하고 싶습니다...
    if(keyIsPressed){
      this.keyPressed();
      this.dbCall(); //1.5초동안 텍스트 유지 후 사라지게 구현하고 싶습니다.
      if(this.dbCount != 1 && this.dbCount != 2 && this.dbCount != 4 && this.dbCount != 5){
        this.dbIsSquare();
        this.turn= 0;
        this.gameOver = true;
      } else {
        this.point(this.dbCount);
        this.turn++;
      }
    } else {
      //this.rhythmIsLife();
      //this.turn= 0;
      //this.gameOver=true;
    }
  }

  npcTurn(){
    if(this.turn > 10){
      this.dbCount = int(random(0,10));
      this.dbCall();
      if (this.dbCount == 1 || this.dbCount == 2 || this.dbCount == 4 || this.dbCount == 5){
        this.point();
        this.turn++;
      } else {
        this.dbIsSquare();
        this.turn = 0;
        this.gameOver = true;
      }
    } else {
      let dbNum = [1,2,4,5];
      this.dbCount = dbNum[int(random(0,5))];
      
        this.dbCall();
        this.point();
        this.turn++;
      }
    }
      

  

  point(){
    if(this.dbCount == 1){
      this.idx -= 2;
      if(this.idx < 0){
        this.idx += 6;
      }
    } else if(this.dbCount == 2){
      this.idx -= 1;
      if(this.idx < 0){
        this.idx += 6;
      }
      }
     else if(this.dbCount == 4){
      this.idx += 1;
      if(this.idx > 5){
        this.idx -= 6;
      }
    } else if(this.dbCount == 5){
      this.idx += 2;
      if(this.idx > 5){
        this.idx -= 6;
      }
    }

  }

  dbCall(){
    let x = (0.1)*w*(this.this.idx+1);


    //1.5초동안 텍스트 유지 후 사라지게 구현하고 싶습니다.
    if(this.dbCount == 1){
      text("두부 한 모!", x, 0.3*h);
      
    } else if(this.dbCount == 2){
      text("두부 두 모!", x, 0.3*h);
      
    } else if(this.dbCount == 4){
      text("두부 네 모!", x, 0.3*h);
      
    } else if(this.dbCount == 5){
      text("두부 다섯 모!", x, 0.3*h);
      
    } else if(this.dbCount == 3){
      text("두부 세 모!", x, 0.3*h);
      
    } else if(this.dbCount == 0){
      text("두부 빵 모!", x, 0.3*h);
      
    } else if(this.dbCount == 6){
      text("두부 여섯 모!", x, 0.3*h);
      
    } else if(this.dbCount == 7){
      text("두부 일곱 모!", x, 0.3*h);
      
    } else if(this.dbCount == 8){
      text("두부 여덟 모!", x, 0.3*h);
      
    } else if(this.dbCount == 9){
      text("두부 아홉 모!", x, 0.3*h);
      
    }
  }

  dbIsSquare(){
    //각 텍스트들이 한줄당 1.5초씩 나왔다 사라지게 하고 싶습니다.
    text("두부는 네모!", w/2, h/2);
    
    text("두부는 네모!", w/2, h/2);
    
    text("네모! 네모!", w/2, h/2);
    
    text("네모! 네모! 네모!", w/2, h/2);
    
  }




  

  keyPressed(){
    if (keyCode === Digit1){
      this.dbCount = 1;
    } else if (keyCode === Digit2){
      this.dbCount = 2;
    } else if (keyCode === Digit3){
      this.dbCount = 3;
    } else if (keyCode === Digit4){
      this.dbCount = 4;
    } else if (keyCode === Digit5){
      this.dbCount = 5;
    } else if (keyCode === Digit6){
      this.dbCount = 6;
    } else if (keyCode === Digit7){
      this.dbCount = 7;
    } else if (keyCode === Digit8){
      this.dbCount = 8;
    } else if (keyCode === Digit9){
      this.dbCount = 9;
    } else if (keyCode === Digit0){
      this.dbCount = 0;
    }
  }

  rhythmIsLife(){
    text("박자는 생명!", w/2, h/2);
    text("박자는 생명!", w/2, h/2);
    text("생명! 생명! 생명!생명!생명!", w/2, h/2);

    //각 텍스트들이 한줄당 1.5초씩 나왔다 사라지게 하고 싶습니다.

    
  }

}
