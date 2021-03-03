import { degreeToRadian } from "../../_common/util";

export default class Dial {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;

    this.radius = radius;
    this.color = "rgb(214, 218, 225)";

    this.pinWidth = radius * 0.4;
    this.pinLength = radius * 2.5;
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

    this.pinWidth = radius * 0.4;
    this.pinLength = radius * 2.5;
  }
}
