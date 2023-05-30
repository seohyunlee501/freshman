class baboGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "바보게임";
    this.recording = false;
    this.myRec = new p5.SpeechRec(); // new P5.SpeechRec object
    this.myRec.start();
    this.input = "";
    this.myRec.continuous = true;
    this.Rec.interimResults = true;
  }
  intro() {
    // instructions:
    textSize(32);
    textAlign(CENTER);
    text("say something", width / 2, height / 2);
    this.myRec.onResult = this.showResult;
  }
  showResult() {
    if (this.myRec.resultValue == true) {
      //background(192, 255, 192);
      text(this.myRec.resultString, width / 2, height / 2);
      console.log(this.myRec.resultString);
    }
  }
  round() {
    this.intro();
    this.showResult();
  }
}
