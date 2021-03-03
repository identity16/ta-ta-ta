export default class Numbers {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;

    this.radius = radius;
    this.font = this.radius * 0.12 + "px arial";

    this.color = "#000";
  }

  draw(ctx, maxNum = 60, step = 5) {
    ctx.save();
    ctx.font = this.font;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for (var n = 0; n < maxNum; n++) {
      var theta = (n / maxNum) * (Math.PI * 2) + 1.5 * Math.PI;
      var x = -this.radius * 1.12 * Math.cos(theta);
      var y = this.radius * 1.12 * Math.sin(theta);

      let isStepNumber = n % step === 0;

      if (isStepNumber) {
        ctx.fillText(n, this.x + x, this.y + y);
      }

      ctx.save();

      ctx.translate(this.x, this.y);
      ctx.rotate(theta);

      let lineWidth = 2;
      let lineLength = Math.max(this.radius * 0.03, 6);
      if (isStepNumber) {
        lineWidth = 4;
        lineLength = Math.max(this.radius * 0.05, 10);
      }

      ctx.fillRect(
        this.radius - lineLength / 2,
        -lineWidth / 2,
        lineLength,
        lineWidth
      );
      ctx.translate(-this.x, -this.y);

      ctx.restore();
    }

    ctx.restore();
  }

  resize(x, y, radius) {
    this.x = x;
    this.y = y;

    this.radius = radius;
    this.font = this.radius * 0.12 + "px arial";
  }
}
