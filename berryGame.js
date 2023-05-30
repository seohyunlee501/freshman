class berryGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "딸기당근수박참외메론";
  }
  round() {}
}



class berryGame extends Game {
  constructor(_idx, _player, _chars) {
    super(_idx, _player, _chars);
    this.idx = _idx;
    this.player = _player;
    this.chars = _chars;
  }
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
  
  berryBGM(){
    Text("딸기 당근 수박 참외 메론~게임!");
    Text("딸기 당근 수박 참외 메론~게임!");
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
}
}
