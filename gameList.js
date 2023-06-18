class gameList {
  constructor(_chars, _player) {
    this.chars = _chars;
    this.player = _player;
    this.gameNum = 1;
    this.everyone = this.chars;
    let temp = this.everyone[3];
    this.everyone[3] = this.player;
    this.everyone[5] = temp;
    this.x = [0.25 * w, 0.5 * w, 0.75 * w];
    this.y = [0.35 * h, 0.67 * h];
  }
  display() {
    //title
    rectMode(CORNER);
    fill(112, 173, 71);
    rect(0, 0, w, 0.1 * h);
    fill(0, 64, 0);
    textAlign(CENTER, CENTER);
    textSize(50);
    let choose = "게임" + this.gameNum + " 선택";
    text(choose, 0.5 * w, 0.05 * h);
    rectMode(CENTER);
    fill(255);

    //게임 선택창
    for (let j = 0; j < 6; j++) {
      image(
        gameButton[j],
        this.x[j % 3],
        this.y[int(j / 3)],
        w * 0.24,
        h * 0.3
      );
    }
    //info button
    infoButton1.show();
    infoButton1.position(
      this.x[0 % 3] + h * 0.135,
      this.y[int(0 / 3)] - h * 0.135
    );
    infoButton2.show();
    infoButton2.position(
      this.x[1 % 3] + h * 0.135,
      this.y[int(1 / 3)] - h * 0.135
    );
    infoButton3.show();
    infoButton3.position(
      this.x[2 % 3] + h * 0.135,
      this.y[int(2 / 3)] - h * 0.135
    );
    infoButton4.show();
    infoButton4.position(
      this.x[3 % 3] + h * 0.135,
      this.y[int(3 / 3)] - h * 0.135
    );
    infoButton5.show();
    infoButton5.position(
      this.x[4 % 3] + h * 0.135,
      this.y[int(4 / 3)] - h * 0.135
    );
    infoButton6.show();
    infoButton6.position(
      this.x[5 % 3] + h * 0.135,
      this.y[int(5 / 3)] - h * 0.135
    );
    //혈중알콜농도
    textAlign(LEFT, CENTER);
    textSize(30);
    text("혈중알콜농도(잔):", 0.13 * w, 0.9 * h);

    push();
    rectMode(CORNER);
    fill(255);
    translate(w * 0.27, h * 0.86);
    rect(0, 0, w * 0.6, h * 0.08);
    stroke(255);
    console.log("alcholblood", this.player.alcholblood);
    for (let i = 0; i < this.player.alcholblood; i++) {
      // switch (i) {
      //   //녹색
      //   case 0:
      //     fill(0, 128, 0);
      //   case 1:
      //     fill(0, 160, 0);
      //   case 2:
      //     fill(129, 193, 71);
      //   //라임
      //   case 3:
      //     fill(191, 255, 0);
      //   //개나리
      //   case 4:
      //     fill(247, 230, 0);
      //   //금색
      //   case 5:
      //     fill(247, 230, 0);
      //   //귤색
      //   case 6:
      //     fill(248, 155, 0);
      //   //다홍
      //   case 7:
      //     fill(248, 57, 0);
      // }
      fill(
        120 * (i == 2) + 200 * (i == 3) + 248 * (i >= 4),
        (120 + 40 * i) * (i < 4) + (240 - 40 * (i % 4)) * (i >= 4),
        0
      );
      rect(0.005 * h + 0.075 * w * i, 0.005 * h, 0.075 * w, 0.07 * h);
    }
    pop();

    //player
    this.player.displaybig(w * 0.87, 0.9 * h);
  }
}
