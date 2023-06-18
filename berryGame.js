class berryGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "딸기당근수박참외메론";
    this.buttons = [strawberry, carrot, watermelon, k_melon, melon];
    this.buttons2 = ["딸기!", "당근!", "수박!", "참외!", "메론!"];
    this.startTime = millis();
    this.bgmOn = true;
    this.userPlayed = false;
    this.infoStarted = false;
    this.infoTime = 0;

    this.endStarted = false;
    this.endTime = 0;
    this.loseIssue = 0;
    this.whatBerry = 5;
    this.whatBerryCheck = 5;
    this.berryCall = true;
    this.berryCallTime = 0;
    this.turnStarted = false;
    this.shuffleDone = false;

    this.step = 0;
    this.stepTime = 0;
    this.stepStarted = false;
    this.stepO = false;
  }

  berryBgm() {
    textSize(32);
    textAlign(CENTER);
    rectMode(CENTER);
    if (this.bgmOn) {
      if (millis() - this.startTime < 2000) {
        fill(255);
        rect(w / 2, h / 2, w / 2, h / 4);
        fill(0);
        text("딸기 당근 수박 참외 메론~ 게임!", w / 2, h / 2);
      } else {
        this.bgmOn = false;
        this.turn++;
      }
    }
  }

  playerTurn() {
    //make answer array
    let fruit = ["딸기!", "당근!", "수박!", "참외!", "메론!"];
    let fruitNum = [0, 1, 2, 3, 4];
    let answer = [];
    let temp = this.turn;
    temp = ((temp - 1) % 14) + 1;
    if (temp > 8) {
      temp = 16 - temp;
    }
    for (let i = 0; i < temp; i++) {
      answer[i] = fruitNum[i % 5];
    }

    //info
    if (!this.userPlayed) {
      if (this.turn < 6) this.infoStarted = true;
      this.infoTime = millis();
      this.userPlayed = true;
      this.step = 0;
      if (!this.shuffleDone) {
        this.shuffleArray();
        this.shuffleDone = true;
        console.log("suffled 1");
      }
    } else if (this.infoStarted) {
      if (millis() - this.infoTime < 2000) {
        // instructions:
        console.log("info");
        textSize(32);
        fill(255);
        textAlign(CENTER);
        rectMode(CENTER);
        text(
          "아래 버튼을 순서대로 클릭하세요.",
          0.2 * w + 0.17 * h * 3,
          0.3 * h
        );
      } else {
        this.infoStarted = false;
      }
    } else if (!this.turnStarted) {
      this.whatBerryCheck = 5;
      //shuffle button
      this.turnStarted = true;
    } else if (this.turnStarted) {
      this.displayButtons();
      if (!this.stepStarted) {
        this.whatBerryCheck = this.whatBerry;
        if (this.whatBerryCheck != 5) {
          this.stepStarted = true;
          this.stepTime = millis();
          this.whatBerry = 5;
          this.step++;
        }
      } else if (this.stepStarted) {
        if (millis() - this.stepTime < 400) {
          let berryCheck = this.buttons2[this.whatBerryCheck];
          text(berryCheck, 0.2 * w + 0.51 * h, 0.3 * h);
        } else {
          if (this.step <= answer.length) {
            if (
              this.buttons2[this.whatBerryCheck] == fruit[answer[this.step - 1]]
            ) {
              this.stepStarted = false;
              this.shuffleDone = false;
              if (!this.shuffleDone) {
                this.shuffleArray();
                this.shuffleDone = true;
                console.log("suffled");
              }
            } else {
              console.log("틀렸음", fruit[answer[this.step - 1]]);
              this.stepO = false;
              this.loseIssue = 1;
              this.gameend();
            }
          }
          if (this.step >= answer.length) {
            this.berryCall = false;
            this.turnStarted = false;
            this.turn++;
            this.idx++;
            this.idx = this.idx % 6;
            this.buttons = [strawberry, carrot, watermelon, k_melon, melon];
            this.buttons2 = ["딸기!", "당근!", "수박!", "참외!", "메론!"];
            this.userPlayed = false;
          }
        }
      }
    }
  }
  npcTurn() {
    fill(0);
    let x = 0.2 * w + 0.17 * h * this.idx;
    fill(255);
    if (!this.turnStarted) {
      this.turnStarted = true;
      this.berryCallTime = millis();
    } else if (this.turnStarted) {
      if (this.turn % 14 == 1) {
        if (millis() - this.berryCallTime < 500) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1000) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1500) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2000) {
          text("딸기!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turnStarted = false;
          this.turn++;
          this.idx++;
          this.idx = this.idx % 6;
        }
      } else if (
        this.turn % 14 == 2 ||
        (this.turn % 14 == 0 && this.turn != 0)
      ) {
        if (millis() - this.berryCallTime < 500) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1000) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1500) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2000) {
          text("당근!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turnStarted = false;
          this.turn++;
          this.idx++;
          this.idx = this.idx % 6;
        }
      } else if (this.turn % 14 == 3 || this.turn % 14 == 13) {
        if (millis() - this.berryCallTime < 500) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1000) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1500) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2000) {
          text("수박!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turnStarted = false;
          this.turn++;
          this.idx++;
          this.idx = this.idx % 6;
        }
      } else if (this.turn % 14 == 4 || this.turn % 14 == 12) {
        if (millis() - this.berryCallTime < 500) {
          text("딸기", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1000) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1500) {
          text("수박!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2000) {
          text("참외!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turnStarted = false;
          this.turn++;
          this.idx++;
          this.idx = this.idx % 6;
        }
      } else if (this.turn % 14 == 5 || this.turn % 14 == 11) {
        if (millis() - this.berryCallTime < 500) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1000) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1500) {
          text("수박!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2000) {
          text("참외!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2500) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 3000) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 3500) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 4000) {
          text("메론!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turnStarted = false;
          this.turn++;
          this.idx++;
          this.idx = this.idx % 6;
        }
      } else if (this.turn % 14 == 6 || this.turn % 14 == 10) {
        if (millis() - this.berryCallTime < 500) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1000) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1500) {
          text("수박!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2000) {
          text("참외!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2500) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 3000) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 3500) {
          text("메론!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 4000) {
          text("딸기!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turnStarted = false;
          this.turn++;
          this.idx++;
          this.idx = this.idx % 6;
        }
      } else if (this.turn % 14 == 7 || this.turn % 14 == 9) {
        if (millis() - this.berryCallTime < 500) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1000) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1500) {
          text("수박!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2000) {
          text("참외!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2500) {
          text("...", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 3000) {
          text("메론!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 3500) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 4000) {
          text("당근!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turnStarted = false;
          this.turn++;
          this.idx++;
          this.idx = this.idx % 6;
        }
      } else if (this.turn % 14 == 8) {
        if (millis() - this.berryCallTime < 500) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1000) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 1500) {
          text("수박!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2000) {
          text("참외!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 2500) {
          text("메론!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 3000) {
          text("딸기!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 3500) {
          text("당근!", x, 0.3 * h);
        } else if (millis() - this.berryCallTime < 4000) {
          text("수박!", x, 0.3 * h);
        } else {
          this.berryCall = false;
          this.turnStarted = false;
          this.turn++;
          this.idx++;
          this.idx = this.idx % 6;
        }
      }
    }
  }
  displayButtons() {
    //buttons[] 순서대로 이미지 가져와서 배치

    imageMode(CENTER);
    image(this.buttons[0], w * 0.1, h * 0.8, w * 0.16, h * 0.2);
    image(this.buttons[1], w * 0.25, h * 0.8, w * 0.16, h * 0.2);
    image(this.buttons[2], w * 0.4, h * 0.8, w * 0.16, h * 0.2);
    image(this.buttons[3], w * 0.55, h * 0.8, w * 0.16, h * 0.2);
    image(this.buttons[4], w * 0.7, h * 0.8, w * 0.16, h * 0.2);
  }

  shuffleArray() {
    for (let i = 4; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.buttons[i], this.buttons[j]] = [this.buttons[j], this.buttons[i]]; // 배열의 두 원소를 랜덤하게 교환
      [this.buttons2[i], this.buttons2[j]] = [
        this.buttons2[j],
        this.buttons2[i],
      ];
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
    } else {
      this.gameOver = true;
      this.everyone[this.idx].lose();
      this.gameList.gameNum++;
    }
  }

  focusIsLife() {
    console.log("focusislife");
    textSize(32);
    textAlign(CENTER);
    rectMode(CENTER);
    if (millis() - this.endTime < 2000) {
      if (this.idx == 3) {
        super.playerDrinkDisplay();
      } else {
        super.npcDrinkDisplay();
      }
    } else if (millis() - this.endTime < 3200) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("집중은 생명!", w / 2, h / 2);
    } else if (millis() - this.endTime < 4400) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("집중은 생명!", w / 2, h / 2);
    } else if (millis() - this.endTime < 3600) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("생명! 생명!!", w / 2, h / 2);
    } else if (millis() - this.endTime < 6800) {
      fill(255);
      rect(w / 2, h / 2, w / 3, h / 3);
      fill(0);
      text("생명! 생명! 생명!", w / 2, h / 2);
    }
  }

  // gameend() {
  //   if (!this.endStarted) {
  //     console.log("endstart now");
  //     this.endStarted = true;
  //     this.endTime = millis();
  //   } else {
  //     if (millis() - this.endTime < 4800) {
  //       if (this.loseIssue == 1) {
  //         this.focusIsLife();
  //       } else if (this.loseIssue == 2) {
  //         this.rhythmIsLife();
  //       }
  //     } else {
  //       this.gameOver = true;
  //       this.everyone[this.idx].lose();
  //       this.gameList.gameNum++;
  //     }
  //   }
  // }

  gameend() {
    if (!this.endStarted) {
      this.endStarted = true;
      this.endTime = millis();
      console.log("end started");
    } else {
      if (millis() - this.endTime < 4800) {
        if (this.loseIssue == 1) {
          this.focusIsLife();
        } else if (this.loseIssue == 2) {
          this.rhythmIsLife();
        }
      } else {
        this.gameOver = true;
        console.log("gameOver", this.gameOver);
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
    }
  }
}
