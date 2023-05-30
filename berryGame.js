class berryGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "딸기당근수박참외메론";
    this.turn = 0;
    //버튼이미지로드 (1 딸기, 2 당근, 3 수박, 4 참외, 5 메론)
    this.buttons = [1,2,3,4,5];
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

  berryBGM(){
    text("딸기 당근 수박 참외 메론~게임!", w/2, h/2);
    text("딸기 당근 수박 참외 메론~게임!", w/2, h/2);
    //1.5초씩
  }

  playerTurn(){
    displayButtons();
    
    this.turn++;

  }

  npcTurn(){
    if(this.turn % 14 == 0){
      text("딸기", w/3, h/3);

    } else if(this.turn % 14 == 1 || this.turn % 14 == 13){
      text("딸기", w/3, h/3);
      text("당근", w/3, h/3);

    } else if(this.turn % 14 == 2 || this.turn % 14 == 12){
      text("딸기", w/3, h/3);
      text("당근", w/3, h/3);
      text("수박", w/3, h/3);
      
    } else if(this.turn % 14 == 3 || this.turn % 14 == 11){
      text("딸기", w/3, h/3);
      text("당근", w/3, h/3);
      text("수박", w/3, h/3);
      text("참외", w/3, h/3);
      
    } else if(this.turn % 14 == 4 || this.turn % 14 == 10){
      text("딸기", w/3, h/3);
      text("당근", w/3, h/3);
      text("수박", w/3, h/3);
      text("참외", w/3, h/3);
      text("메론", w/3, h/3);
      
    } else if(this.turn % 14 == 5 || this.turn % 14 == 9){
      text("딸기", w/3, h/3);
      text("당근", w/3, h/3);
      text("수박", w/3, h/3);
      text("참외", w/3, h/3);
      text("메론", w/3, h/3);
      text("딸기", w/3, h/3);
      
    } else if(this.turn % 14 == 6 || this.turn % 14 == 8){
      text("딸기", w/3, h/3);
      text("당근", w/3, h/3);
      text("수박", w/3, h/3);
      text("참외", w/3, h/3);
      text("메론", w/3, h/3);
      text("딸기", w/3, h/3);
      text("당근", w/3, h/3);
      
    } else if(this.turn % 14 == 7){
      text("딸기", w/3, h/3);
      text("당근", w/3, h/3);
      text("수박", w/3, h/3);
      text("참외", w/3, h/3);
      text("메론", w/3, h/3);
      text("딸기", w/3, h/3);
      text("당근", w/3, h/3);
      text("수박", w/3, h/3);
      
    } 



    this.turn++;
  }

  displayButtons(){
    shuffleArray();
    //buttons[] 순서대로 이미지 가져와서 배치 
  }

  shuffleArray() {
    for (let i = 4; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.buttons[i], this.buttons[j]] = [this.buttons[j], this.buttons[i]]; // 배열의 두 원소를 랜덤하게 교환
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

  }
  


  mousePressed(){
    if (mouseX mouseY~~~){
      selectedButton = 1;
    } else if (mouseX mouseY~~~){
      selectedButton = 2;
    } else if (mouseX mouseY~~~){
      selectedButton = 3;
    } else if (mouseX mouseY~~~){
      selectedButton = 4;
    } else if (mouseX mouseY~~~){
      selectedButton = 5;
    }
  }
}*/
