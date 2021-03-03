import { unitToMillis } from "../../_common/util.js";
import BackBoard from "./backboard.js";
import Dial from "./dial.js";
import Numbers from "./numbers.js";

export class Timer {
  constructor({
    x,
    y,
    radius,
    maxNum = 60,
    step = 5,
    timeScale = "minute",
    onComplete = () => {},
  }) {
    this.x = x;
    this.y = y;

    this.radius = radius;
    this.maxNum = maxNum;
    this.step = step;
    this.timeScale = timeScale;
    this.onComplete = onComplete;

    this.scale = unitToMillis(timeScale);
    this.backBoard = new BackBoard(this.x, this.y, this.radius);
    this.dial = new Dial(this.x, this.y, this.radius * 0.1);
    this.numbers = new Numbers(this.x, this.y, this.radius);
  }

  draw(ctx) {
    if (this.isRunning) {
      const elapsedTime = Date.now() - this.startTimestamp;
      const totalTime = this.maxNum * this.scale;

      const possession =
        (this.targetNum * this.scale - (elapsedTime % totalTime)) / totalTime;

      if (possession <= 0) {
        this.stop();
      }

      this.numbers.draw(ctx, this.maxNum, this.step);
      this.backBoard.draw(ctx, possession);
      this.dial.draw(ctx, possession);
    }
  }

  start(targetNum) {
    this.targetNum = targetNum;
    this.isRunning = true;
    this.startTimestamp = Date.now();
  }

  stop() {
    this.isRunning = false;

    this.onComplete();
  }

  resize(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.backBoard.resize(this.x, this.y, this.radius);
    this.dial.resize(this.x, this.y, this.radius * 0.1);
    this.numbers.resize(this.x, this.y, this.radius);
  }
}
