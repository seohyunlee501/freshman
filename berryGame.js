class berryGame extends Game {
  constructor(_idx, _gameList) {
    super(_idx, _gameList);
    this.gameName = "딸기당근수박참외메론";
    this.turn = 0;
    this.buttons = [strawberry, carrot, watermelon, k_melon, melon];
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

    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
    this.step6 = false;
    this.step7 = false;
    this.step8 = false;

    this.step1time = millis();
    this.step2time = millis();
    this.step3time = millis();
    this.step4time = millis();
    this.step5time = millis();
    this.step6time = millis();
    this.step7time = millis();
    this.step8time = millis();
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
    let fruit = ["딸기!", "당근!", "수박!", "참외!", "메론!"];

    if (!this.shuffleDone) {
      this.shuffleArray();
      this.shuffleDone = true;
    }
    this.displayButtons();

    if (!this.userPlayed) {
      this.infoStarted = true;
      this.infoTime = millis();
      this.userPlayed = true;
    } else if (this.infoStarted) {
      if (millis() - this.infoTime < 2000) {
        // instructions:
        console.log("info");
        textSize(32);
        fill(255);
        textAlign(CENTER);
        rectMode(CENTER);
        text(
          "제한 시간 내에 아래 버튼을 순서대로 클릭하세요.",
          0.2 * w + 0.17 * h * 3,
          0.3 * h
        );
      } else {
        this.infoStarted = false;
      }
    } else if (!this.turnStarted) {
      this.whatBerryCheck = 5;
      this.whatBerryCheck = this.whatBerry;
      if (this.whatBerryCheck != 5) {
        this.turnStarted = true;
        this.step1time = millis();
        this.whatBerry = 5;
      }
    } else if (this.turnStarted) {
      if (!this.step1) {
        if (millis() - this.step1time < 1500) {
          let berryCheck;
          if (this.buttons[this.whatBerryCheck] == strawberry) {
            berryCheck = "딸기!";
          } else if (this.buttons[this.whatBerryCheck] == carrot) {
            berryCheck = "당근!";
          } else if (this.buttons[this.whatBerryCheck] == watermelon) {
            berryCheck = "수박!";
          } else if (this.buttons[this.whatBerryCheck] == k_melon) {
            berryCheck = "참외!";
          } else if (this.buttons[this.whatBerryCheck] == melon) {
            berryCheck = "메론!";
          }

          text(berryCheck, 0.2 * w + 0.51 * h, 0.3 * h);
        } else {
          if (this.buttons[this.whatBerryCheck] != strawberry) {
            if (
              this.buttons[this.whatBerryCheck] == carrot ||
              this.buttons[this.whatBerryCheck] == watermelon ||
              this.buttons[this.whatBerryCheck] == k_melon ||
              this.buttons[this.whatBerryCheck] == melon
            ) {
              this.loseIssue = 1;
              this.gameend();
            } else {
              this.loseIssue = 2;
              this.gameend();
            }
          } else {
            if (this.turn % 14 == 1) {
              this.turnStarted = false;
              this.turn++;
              this.idx = 4;
              this.whatBerryCheck = 5;

              this.step1 = false;
              this.step2 = false;
              this.step3 = false;
              this.step4 = false;
              this.step5 = false;
              this.step6 = false;
              this.step7 = false;
              this.step8 = false;
            } else {
              this.whatBerryCheck = 5;
              this.whatBerryCheck = this.whatBerry;
              if (this.whatBerryCheck != 5) {
                this.step2time = millis();
                this.whatBerry = 5;
                this.step1 = true;
              }
            }
          }
        }
      } else if (this.step1) {
        if (!this.step2) {
          if (millis() - this.step2time < 1400) {
            let berryCheck;
            if (this.buttons[this.whatBerryCheck] == strawberry) {
              berryCheck = "딸기!";
            } else if (this.buttons[this.whatBerryCheck] == carrot) {
              berryCheck = "당근!";
            } else if (this.buttons[this.whatBerryCheck] == watermelon) {
              berryCheck = "수박!";
            } else if (this.buttons[this.whatBerryCheck] == k_melon) {
              berryCheck = "참외!";
            } else if (this.buttons[this.whatBerryCheck] == melon) {
              berryCheck = "메론!";
            }

            text(berryCheck, 0.2 * w + 0.51 * h, 0.3 * h);
          } else {
            if (this.buttons[this.whatBerryCheck] != carrot) {
              if (
                this.buttons[this.whatBerryCheck] == strawberry ||
                this.buttons[this.whatBerryCheck] == watermelon ||
                this.buttons[this.whatBerryCheck] == k_melon ||
                this.buttons[this.whatBerryCheck] == melon
              ) {
                this.loseIssue = 1;
                this.gameend();
              } else {
                this.loseIssue = 2;
                this.gameend();
              }
            } else {
              if (
                this.turn % 14 == 2 ||
                (this.turn % 14 == 0 && this.turn != 0)
              ) {
                this.turnStarted = false;
                this.turn++;
                this.idx = 4;
                this.whatBerryCheck = 5;

                this.step1 = false;
                this.step2 = false;
                this.step3 = false;
                this.step4 = false;
                this.step5 = false;
                this.step6 = false;
                this.step7 = false;
                this.step8 = false;
              } else {
                this.whatBerryCheck = 5;
                this.whatBerryCheck = this.whatBerry;
                if (this.whatBerryCheck != 5) {
                  this.step3time = millis();
                  this.whatBerry = 5;
                  this.step2 = true;
                }
              }
            }
          }
        } else if (this.step2) {
          if (!this.step3) {
            if (millis() - this.step3time < 1400) {
              let berryCheck;

              if (this.buttons[this.whatBerryCheck] == strawberry) {
                berryCheck = "딸기!";
              } else if (this.buttons[this.whatBerryCheck] == carrot) {
                berryCheck = "당근!";
              } else if (this.buttons[this.whatBerryCheck] == watermelon) {
                berryCheck = "수박!";
              } else if (this.buttons[this.whatBerryCheck] == k_melon) {
                berryCheck = "참외!";
              } else if (this.buttons[this.whatBerryCheck] == melon) {
                berryCheck = "메론!";
              }

              text(berryCheck, 0.2 * w + 0.51 * h, 0.3 * h);
            } else {
              if (this.buttons[this.whatBerryCheck] != watermelon) {
                if (
                  this.buttons[this.whatBerryCheck] == carrot ||
                  this.buttons[this.whatBerryCheck] == strawberry ||
                  this.buttons[this.whatBerryCheck] == k_melon ||
                  this.buttons[this.whatBerryCheck] == melon
                ) {
                  this.loseIssue = 1;
                  this.gameend();
                } else {
                  this.loseIssue = 2;
                  this.gameend();
                }
              } else {
                if (this.turn % 14 == 3 || this.turn % 14 == 13) {
                  this.turnStarted = false;
                  this.turn++;
                  this.idx = 4;
                  this.whatBerryCheck = 5;

                  this.step1 = false;
                  this.step2 = false;
                  this.step3 = false;
                  this.step4 = false;
                  this.step5 = false;
                  this.step6 = false;
                  this.step7 = false;
                  this.step8 = false;
                } else {
                  this.whatBerryCheck = 5;
                  this.whatBerryCheck = this.whatBerry;
                  if (this.whatBerryCheck != 5) {
                    this.step4time = millis();
                    this.whatBerry = 5;
                    this.step3 = true;
                  }
                }
              }
            }
          } else if (this.step3) {
            if (!this.step4) {
              if (millis() - this.step4time < 1400) {
                let berryCheck;

                if (this.buttons[this.whatBerryCheck] == strawberry) {
                  berryCheck = "딸기!";
                } else if (this.buttons[this.whatBerryCheck] == carrot) {
                  berryCheck = "당근!";
                } else if (this.buttons[this.whatBerryCheck] == watermelon) {
                  berryCheck = "수박!";
                } else if (this.buttons[this.whatBerryCheck] == k_melon) {
                  berryCheck = "참외!";
                } else if (this.buttons[this.whatBerryCheck] == melon) {
                  berryCheck = "메론!";
                }

                text(berryCheck, 0.2 * w + 0.51 * h, 0.3 * h);
              } else {
                if (this.buttons[this.whatBerryCheck] != k_melon) {
                  if (
                    this.buttons[this.whatBerryCheck] == carrot ||
                    this.buttons[this.whatBerryCheck] == watermelon ||
                    this.buttons[this.whatBerryCheck] == strawberry ||
                    this.buttons[this.whatBerryCheck] == melon
                  ) {
                    this.loseIssue = 1;
                    this.gameend();
                  } else {
                    this.loseIssue = 2;
                    this.gameend();
                  }
                } else {
                  if (this.turn % 14 == 4 || this.turn % 14 == 12) {
                    this.turnStarted = false;
                    this.turn++;
                    this.idx = 4;
                    this.whatBerryCheck = 5;

                    this.step1 = false;
                    this.step2 = false;
                    this.step3 = false;
                    this.step4 = false;
                    this.step5 = false;
                    this.step6 = false;
                    this.step7 = false;
                    this.step8 = false;
                  } else {
                    this.whatBerryCheck = 5;
                    this.whatBerryCheck = this.whatBerry;
                    if (this.whatBerryCheck != 5) {
                      this.step5time = millis();
                      this.whatBerry = 5;
                      this.step4 = true;
                    }
                  }
                }
              }
            } else if (this.step4) {
              if (!this.step5) {
                if (millis() - this.step5time < 1400) {
                  let berryCheck;

                  if (this.buttons[this.whatBerryCheck] == strawberry) {
                    berryCheck = "딸기!";
                  } else if (this.buttons[this.whatBerryCheck] == carrot) {
                    berryCheck = "당근!";
                  } else if (this.buttons[this.whatBerryCheck] == watermelon) {
                    berryCheck = "수박!";
                  } else if (this.buttons[this.whatBerryCheck] == k_melon) {
                    berryCheck = "참외!";
                  } else if (this.buttons[this.whatBerryCheck] == melon) {
                    berryCheck = "메론!";
                  }

                  text(berryCheck, 0.2 * w + 0.51 * h, 0.3 * h);
                } else {
                  if (this.buttons[this.whatBerryCheck] != melon) {
                    if (
                      this.buttons[this.whatBerryCheck] == carrot ||
                      this.buttons[this.whatBerryCheck] == watermelon ||
                      this.buttons[this.whatBerryCheck] == k_melon ||
                      this.buttons[this.whatBerryCheck] == strawberry
                    ) {
                      this.loseIssue = 1;
                      this.gameend();
                    } else {
                      this.loseIssue = 2;
                      this.gameend();
                    }
                  } else {
                    if (this.turn % 14 == 5 || this.turn % 14 == 11) {
                      this.turnStarted = false;
                      this.turn++;
                      this.idx = 4;
                      this.whatBerryCheck = 5;

                      this.step1 = false;
                      this.step2 = false;
                      this.step3 = false;
                      this.step4 = false;
                      this.step5 = false;
                      this.step6 = false;
                      this.step7 = false;
                      this.step8 = false;
                    } else {
                      this.whatBerryCheck = 5;
                      this.whatBerryCheck = this.whatBerry;
                      if (this.whatBerryCheck != 5) {
                        this.step6time = millis();
                        this.whatBerry = 5;
                        this.step5 = true;
                      }
                    }
                  }
                }
              } else if (this.step5) {
                if (!this.step6) {
                  if (millis() - this.step6time < 1400) {
                    let berryCheck;

                    if (this.buttons[this.whatBerryCheck] == strawberry) {
                      berryCheck = "딸기!";
                    } else if (this.buttons[this.whatBerryCheck] == carrot) {
                      berryCheck = "당근!";
                    } else if (
                      this.buttons[this.whatBerryCheck] == watermelon
                    ) {
                      berryCheck = "수박!";
                    } else if (this.buttons[this.whatBerryCheck] == k_melon) {
                      berryCheck = "참외!";
                    } else if (this.buttons[this.whatBerryCheck] == melon) {
                      berryCheck = "메론!";
                    }

                    text(berryCheck, 0.2 * w + 0.51 * h, 0.3 * h);
                  } else {
                    if (this.buttons[this.whatBerryCheck] != strawberry) {
                      if (
                        this.buttons[this.whatBerryCheck] == carrot ||
                        this.buttons[this.whatBerryCheck] == watermelon ||
                        this.buttons[this.whatBerryCheck] == k_melon ||
                        this.buttons[this.whatBerryCheck] == melon
                      ) {
                        this.loseIssue = 1;
                        this.gameend();
                      } else {
                        this.loseIssue = 2;
                        this.gameend();
                      }
                    } else {
                      if (this.turn % 14 == 6 || this.turn % 14 == 10) {
                        this.turnStarted = false;
                        this.turn++;
                        this.idx = 4;
                        this.whatBerryCheck = 5;

                        this.step1 = false;
                        this.step2 = false;
                        this.step3 = false;
                        this.step4 = false;
                        this.step5 = false;
                        this.step6 = false;
                        this.step7 = false;
                        this.step8 = false;
                      } else {
                        this.whatBerryCheck = 5;
                        this.whatBerryCheck = this.whatBerry;
                        if (this.whatBerryCheck != 5) {
                          this.step7time = millis();
                          this.whatBerry = 5;
                          this.step6 = true;
                        }
                      }
                    }
                  }
                } else if (this.step6) {
                  if (!this.step7) {
                    if (millis() - this.step7time < 1400) {
                      let berryCheck;

                      if (this.buttons[this.whatBerryCheck] == strawberry) {
                        berryCheck = "딸기!";
                      } else if (this.buttons[this.whatBerryCheck] == carrot) {
                        berryCheck = "당근!";
                      } else if (
                        this.buttons[this.whatBerryCheck] == watermelon
                      ) {
                        berryCheck = "수박!";
                      } else if (this.buttons[this.whatBerryCheck] == k_melon) {
                        berryCheck = "참외!";
                      } else if (this.buttons[this.whatBerryCheck] == melon) {
                        berryCheck = "메론!";
                      }

                      text(berryCheck, 0.2 * w + 0.51 * h, 0.3 * h);
                    } else {
                      if (this.buttons[this.whatBerryCheck] != carrot) {
                        if (
                          this.buttons[this.whatBerryCheck] == strawberry ||
                          this.buttons[this.whatBerryCheck] == watermelon ||
                          this.buttons[this.whatBerryCheck] == k_melon ||
                          this.buttons[this.whatBerryCheck] == melon
                        ) {
                          this.loseIssue = 1;
                          this.gameend();
                        } else {
                          this.loseIssue = 2;
                          this.gameend();
                        }
                      } else {
                        if (this.turn % 14 == 7 || this.turn % 14 == 9) {
                          this.turnStarted = false;
                          this.turn++;
                          this.idx = 4;
                          this.whatBerryCheck = 5;

                          this.step1 = false;
                          this.step2 = false;
                          this.step3 = false;
                          this.step4 = false;
                          this.step5 = false;
                          this.step6 = false;
                          this.step7 = false;
                          this.step8 = false;
                        } else {
                          this.whatBerryCheck = 5;
                          this.whatBerryCheck = this.whatBerry;
                          if (this.whatBerryCheck != 5) {
                            this.step8time = millis();
                            this.whatBerry = 5;
                            this.step7 = true;
                          }
                        }
                      }
                    }
                  } else if (this.step7) {
                    if (!this.step8) {
                      if (millis() - this.step8time < 1400) {
                        let berryCheck;

                        if (this.buttons[this.whatBerryCheck] == strawberry) {
                          berryCheck = "딸기!";
                        } else if (
                          this.buttons[this.whatBerryCheck] == carrot
                        ) {
                          berryCheck = "당근!";
                        } else if (
                          this.buttons[this.whatBerryCheck] == watermelon
                        ) {
                          berryCheck = "수박!";
                        } else if (
                          this.buttons[this.whatBerryCheck] == k_melon
                        ) {
                          berryCheck = "참외!";
                        } else if (this.buttons[this.whatBerryCheck] == melon) {
                          berryCheck = "메론!";
                        }

                        text(berryCheck, 0.2 * w + 0.51 * h, 0.3 * h);
                      } else {
                        if (this.buttons[this.whatBerryCheck] != watermelon) {
                          if (
                            this.buttons[this.whatBerryCheck] == carrot ||
                            this.buttons[this.whatBerryCheck] == strawberry ||
                            this.buttons[this.whatBerryCheck] == k_melon ||
                            this.buttons[this.whatBerryCheck] == melon
                          ) {
                            this.loseIssue = 1;
                            this.gameend();
                          } else {
                            this.loseIssue = 2;
                            this.gameend();
                          }
                        } else {
                          if (this.turn % 14 == 8) {
                            this.turnStarted = false;
                            this.turn++;
                            this.idx = 4;
                            this.whatBerryCheck = 5;
                            this.step8 = true;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    /*
    if (millis() - this.currentTime < 1200) {
      text(this.buttons[this.whatBerry]+'!', 0.2 * w + 0.51 * h, 0.3 * h);
    } else {
      if (this.whatBerry == 5) {
        this.loseIssue = 2;
        this.gameend();
      } else if (
        this.buttons[this.whatBerry] != strawberry
      ) {
        this.loseIssue = 1;
        this.gameend();
      } else {
        if (this.turn % 14 == 1){
          this.turnStarted = false;
          this.turn++;
          this.idx = 4;
        } else if (this.turn % 14 == 2 ||
          (this.turn % 14 == 0 && this.turn != 0)){
          this.turnStarted = false;
          this.turn++;
          this.idx = 4;
        }
      }*/

    /*

  if (!this.userPlayed) {
    this.infoStarted = true;
    this.infoTime = millis();
    this.whatBerry = 5;
    this.userPlayed = true;
  } else if (!this.turnStarted) {
    












    let temp = 0;
    if (this.turn % 14 <= 8) temp = this.turn % 14;
    else if (this.turn % 14 > 8) temp = 16 - (this.turn % 14);
    if (this.whatBerry.length == temp) {
      this.turnStarted = true;
      this.currentTime = millis();
    }
  } else if (this.turnStarted) {
    if (millis() - this.startTime < 400) {
      text(fruit[this.whatBerry[-1] - 1], 0.2 * w + 0.51 * h, 0.3 * h);
    } else {
      this.turn++;
      this.idx++;
      this.idx = this.idx % 6;
      this.whatBerry = [];
      this.shuffleDone = false;
    }
  }*/
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

      //this.displayButtons();
    }
  }
}
