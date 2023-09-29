import { Unit } from '../_common/type';
import { unitToMillis } from '../_common/util';
import BackBoard from './BackBoard';
import Dial from './Dial';
import Numbers from './numbers';

interface TimerParams {
  x: number;
  y: number;
  radius: number;
  maxNum?: number;
  step?: number;
  timeScale?: Unit;
  onResume: () => void;
  onPause: () => void;
  onComplete: () => void;
}

export class Timer {
  private _isEnabled: boolean;
  private x: number;
  private y: number;
  private radius: number;
  private maxNum: number;
  private step: number;
  private onResume: () => void;
  private onPause: () => void;
  private onComplete: () => void;
  private scale: number;
  private backBoard: BackBoard;
  private dial: Dial;
  private numbers: Numbers;

  private isRunning: boolean = false;
  private targetNum: number = 0;
  private startTimestamp: number = 0;
  private pauseTimestamp: number = 0;

  public isStarted: boolean;

  constructor({
    x,
    y,
    radius,
    maxNum = 60,
    step = 5,
    timeScale = 'minute',
    onResume = () => { },
    onPause = () => { },
    onComplete = () => { },
  }: TimerParams) {
    this._isEnabled = true;

    this.x = x;
    this.y = y;

    this.radius = radius;
    this.maxNum = maxNum;
    this.step = step;
    this.onResume = onResume;
    this.onPause = onPause;
    this.onComplete = onComplete;

    this.scale = unitToMillis(timeScale);
    this.backBoard = new BackBoard(this.x, this.y, this.radius);
    this.dial = new Dial(this.x, this.y, this.radius * 0.1);
    this.numbers = new Numbers(this.x, this.y, this.radius);

    this.isStarted = false;
  }

  draw(ctx: CanvasRenderingContext2D) {
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

  start(targetNum: number) {
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

  resize(x: number, y: number, radius: number) {
    this.radius = radius;

    this.backBoard.resize(x, y, this.radius);
    this.dial.resize(x, y, this.radius * 0.1);
    this.numbers.resize(x, y, this.radius);
  }
}
