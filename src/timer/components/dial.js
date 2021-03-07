import { degreeToRadian } from "../../_common/util";

export default class Dial {
  static PIN_WIDTH_MULTIPLE = 0.7;
  static PIN_LENGTH_MULTIPLE = 2.575;

  constructor(x, y, radius) {
    this.x = x;
    this.y = y;

    this.radius = radius;
    this.color = "#e8e8e8";

    this.pinWidth = radius * Dial.PIN_WIDTH_MULTIPLE;
    this.pinLength = radius * Dial.PIN_LENGTH_MULTIPLE;
  }

  draw(ctx, possession) {
    ctx.save();
    const angle = degreeToRadian(180) - degreeToRadian(360 * possession);

    ctx.beginPath();

    ctx.arc(this.x, this.y, this.radius, 0, degreeToRadian(360));
    this.drawPin(ctx, angle);

    // Style
    ctx.fillStyle = this.color;
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 8;

    ctx.fill();

    ctx.restore();
  }

  drawPin(ctx, angle) {
    ctx.moveTo(this.x, this.y);

    const pinLength = this.pinLength - this.pinWidth / 2;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(angle);
    ctx.translate(-this.x, -this.y);
    ctx.rect(this.x - this.pinWidth / 2, this.y, this.pinWidth, pinLength);
    ctx.arc(this.x, this.y + pinLength, this.pinWidth / 2, 0, Math.PI);
    ctx.restore();
  }

  resize(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.pinWidth = radius * Dial.PIN_WIDTH_MULTIPLE;
    this.pinLength = radius * Dial.PIN_LENGTH_MULTIPLE;
  }
}
