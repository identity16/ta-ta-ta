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
    onResume = () => {},
    onPause = () => {},
    onComplete = () => {},
  }) {
    this._isEnabled = true;

    this.x = x;
    this.y = y;

    this.radius = radius;
    this.maxNum = maxNum;
    this.step = step;
    this.timeScale = timeScale;
    this.onResume = onResume;
    this.onPause = onPause;
    this.onComplete = onComplete;

    this.scale = unitToMillis(timeScale);
    this.backBoard = new BackBoard(this.x, this.y, this.radius);
    this.dial = new Dial(this.x, this.y, this.radius * 0.1);
    this.numbers = new Numbers(this.x, this.y, this.radius);

    this.isStarted = false;
  }

  draw(ctx) {
    const totalTime = this.maxNum * this.scale;

    let elapsedTime = 0;

    if (this.isRunning) {
      elapsedTime = Date.now() - this.startTimestamp;
    } else {
      elapsedTime = this.pauseTimestamp - this.startTimestamp;
    }

    const possession =
      (this.targetNum * this.scale - (elapsedTime % totalTime)) / totalTime;

    if (possession <= 0) {
      this.stop();
    }
    this.numbers.draw(ctx, this.maxNum, this.step);
    this.backBoard.draw(ctx, possession);
    this.dial.draw(ctx, possession);
  }

  start(targetNum) {
    this._isEnabled = true;
    this.targetNum = targetNum;
    this.isStarted = true;
    this.isRunning = true;
    this.startTimestamp = Date.now();
  }

  resume() {
    if (this._isEnabled) {
      this.isRunning = true;
      this.startTimestamp += Date.now() - this.pauseTimestamp;

      this.onResume();
    }
  }

  pause() {
    if (this._isEnabled) {
      this.isRunning = false;
      this.pauseTimestamp = Date.now();

      this.onPause();
    }
  }

  stop() {
    if (this._isEnabled) {
      this.isRunning = false;

      this.onComplete();
    }
  }

  disable() {
    this._isEnabled = false;
    this.isRunning = false;
    this.isStarted = false;
  }

  togglePause() {
    if (this.isRunning) {
      this.pause();
    } else {
      this.resume();
    }
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
