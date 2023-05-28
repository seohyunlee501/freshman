class doobooGame extends Game {
  constructor(_idx, _player, _chars) {
    super(_idx, _player, _chars);
    this.idx = _idx;
    this.player = _player;
    this.chars = _chars;
  }
  round() {
    let gameIsOn = true;
    turn = 0;
    let playerTurn = 0;

    while(gameIsOn){
      this.dbBgm();
      if(idx == 4){
        //timer
        if(keyIsPressed){
          keyPressed();
          this.dbCall(dbCount);
          if (dbCount != 1 && dbCount != 2 && dbCount != 4 && dbCount != 5){
            this.dbIsSquare();
            gameIsOn = false;
          } else {
            this.point(dbCount);
            playerTurn++;
          }
        } else if (){
          //time is over
          Text("박자는 생명!");
          Text("박자는 생명!");
          Text("생명! 생명! 생명!생명!생명!");
          gameIsOn = false;
        }
      } else{
        if(playerTurn >= 2){
          dbCount = int(random(0,10));
          this.dbCall(dbCount);
          if (dbCount != 1 && dbCount != 2 && dbCount != 4 && dbCount != 5){
            this.dbIsSquare();
            gameIsOn = false;
          } else {
            this.point(dbCount);
          }
        } else {
            dbCount = int(random(1,6));
            this.dbCall(dbCount);
            this.point(dbCount);
          }
       turn++;
      } 
    }
  }

  point(){
    if(dbCount == 1){
      idx -= 2;
      if(idx <= 0){
        idx += 6;
      }
    } else if(dbCount == 2){
      idx -= 1;
      if(idx <= 0){
        idx += 6;
      }
      }
     else if(dbCount == 4){
      idx += 1;
      if(idx > 6){
        idx -= 6;
      }
    } else if(dbCount == 5){
      idx += 2;
      if(idx > 6){
        idx -= 6;
      }
    }

  }

  dbCall(){
    if(dbCount == 1){
      Text("두부 한 모!");
    } else if(dbCount == 2){
      Text("두부 두 모!");
    } else if(dbCount == 4){
      Text("두부 네 모!");
    } else if(dbCount == 5){
      Text("두부 다섯 모!");
    } else if(dbCount == 3){
      Text("두부 세 모!");
    } else if(dbCount == 0){
      Text("두부 빵 모!");
    } else if(dbCount == 6){
      Text("두부 여섯 모!");
    } else if(dbCount == 7){
      Text("두부 일곱 모!");
    } else if(dbCount == 8){
      Text("두부 여덟 모!");
    } else if(dbCount == 9){
      Text("두부 아홉 모!");
    }
  }

  dbIsSquare(){
    Text("두부는 네 모!");
    Text("두부는 네 모!");
    Text("네모! 네모! 네모!네모!네모!");
  }

  dbBgm(){
    Text("두~부 두부 두부");
    Text("으쌰!으쌰!으쌰!으쌰!");
    Text("두~부 두부 두부");
    Text("으쌰!으쌰!으쌰!으쌰!");
  }


  

  keyPressed(){
    if (keyCode === Digit1){
      dbCount = 1;
    } else if (keyCode === Digit2){
      dbCount = 2;
    } else if (keyCode === Digit3){
      dbCount = 3;
    } else if (keyCode === Digit4){
      dbCount = 4;
    } else if (keyCode === Digit5){
      dbCount = 5;
    } else if (keyCode === Digit6){
      dbCount = 6;
    } else if (keyCode === Digit7){
      dbCount = 7;
    } else if (keyCode === Digit8){
      dbCount = 8;
    } else if (keyCode === Digit9){
      dbCount = 9;
    } else if (keyCode === Digit0){
      dbCount = 0;
    } else {
      return false;
    }
  }

}
