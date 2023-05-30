class doobooGame extends Game {
  constructor(_idx, _gameList, _dbCount) {
    super(_idx, _gameList);
    this.gameName = "두부게임";
    this.dbCount = _dbCount;
    this.turn = 0;
    this.x1 = w/2;
    this.y1 = h/2;
    this.x2 = w/2;
    this.y2 = h/2;
    this.x3 = w/2;
    this.y3 = h/2;
    this.x4 = w/2;
    this.y4 = h/2;
  }
  round() {
    this.gameOver=false;
    //this.dbBgm();
    while(!this.gameOver){
      if(this.idx == 3){
        this.playerTurn();
      } else {
        this.npcTurn();
      }
    }
  }

  dbBgm(){
    let startTime = millis();
    let bgmOn = true;
  
    while(bgmOn){
      let elapsedTime = millis() - startTime;

  
      if(elapsedTime < 600){
        text("두~부 두부 두부", this.x1, this.y1);
      }
  
      if(elapsedTime > 1200 && elapsedTime < 1800){
        this.x1 = -999;
        this.y1 = -999;
        text("으쌰!으쌰!으쌰!으쌰!", this.x2, this.y2);
      }
  
      if(elapsedTime > 1800 && elapsedTime < 2400){
        this.x2 = -999;
        this.y2 = -999;
        text("두~부 두부 두부", this.x3, this.y3);
      }
  
      if(elapsedTime > 2400 && elapsedTime < 3000){
        this.x3 = -999;
        this.y3 = -999;
        text("으쌰!으쌰!으쌰!으쌰!", this.x4, this.y4);
      }
  
      if(elapsedTime > 3000){
        this.x4 = -999;
        this.y4 = -999;
        bgmOn = false;
        
      }
    }
  }
  
    
  

  playerTurn(){
    //timer
    if(keyIsPressed){
      this.keyPressed();
      this.dbCall();
      if(this.dbCount != 1 && this.dbCount != 2 && this.dbCount != 4 && this.dbCount != 5){
        this.dbIsSquare();
        this.gameOver = true;
      } else {
        this.point(this.dbCount);
        this.turn++;
      }
    }
    //time is over
    //text("박자는 생명!", w/2, h/2);
    //text("박자는 생명!", w/2, h/2);
    //text("생명! 생명! 생명!생명!생명!", w/2, h/2);
    //gameOver = true;
  }

  npcTurn(){
    if(this.turn >= 10){
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
      this.dbCount = int(random(1,6));
      while(this.dbCount == 3){
        this.dbCount = int(random(1,6));
      }
        this.dbCall();
        this.point();
        this.turn++;
      }
    }
      

  

  point(){
    if(this.dbCount == 1){
      idx -= 2;
      if(idx < 0){
        idx += 6;
      }
    } else if(this.dbCount == 2){
      idx -= 1;
      if(idx < 0){
        idx += 6;
      }
      }
     else if(this.dbCount == 4){
      idx += 1;
      if(idx > 5){
        idx -= 6;
      }
    } else if(this.dbCount == 5){
      idx += 2;
      if(idx > 5){
        idx -= 6;
      }
    }

  }

  dbCall(){
    if(this.dbCount == 1){
      text("두부 한 모!", w/3, h/3);
      
    } else if(this.dbCount == 2){
      text("두부 두 모!", w/3, h/3);
      
    } else if(this.dbCount == 4){
      text("두부 네 모!", w/3, h/3);
      
    } else if(this.dbCount == 5){
      text("두부 다섯 모!", w/3, h/3);
      
    } else if(this.dbCount == 3){
      text("두부 세 모!", w/3, h/3);
      
    } else if(this.dbCount == 0){
      text("두부 빵 모!", w/3, h/3);
      
    } else if(this.dbCount == 6){
      text("두부 여섯 모!", w/3, h/3);
      
    } else if(this.dbCount == 7){
      text("두부 일곱 모!", w/3, h/3);
      
    } else if(this.dbCount == 8){
      text("두부 여덟 모!", w/3, h/3);
      
    } else if(this.dbCount == 9){
      text("두부 아홉 모!", w/3, h/3);
      
    }
  }

  dbIsSquare(){
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

}
