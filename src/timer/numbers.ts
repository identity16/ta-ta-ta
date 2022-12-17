export default class Numbers {
  private x: number;
  private y: number;
  private radius: number;
  private font: string;
  private color: string;

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;

    this.radius = radius;
    this.font = 'bold ' + this.radius * 0.1246 + 'px Nanum Gothic';

    this.color = '#333';
  }

  draw(ctx: CanvasRenderingContext2D, maxNum = 60, step = 5) {
    ctx.save();
    ctx.font = this.font;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    for (var n = 0; n < maxNum; n++) {
      var theta = (n / maxNum) * (Math.PI * 2) + 1.5 * Math.PI;
      var x = -this.radius * 1.15 * Math.cos(theta);
      var y = this.radius * 1.15 * Math.sin(theta);

      let isStepNumber = n % step === 0;

      if (isStepNumber) {
        ctx.fillText(n.toString(), this.x + x, this.y + y);
      }

      ctx.save();

      ctx.translate(this.x, this.y);
      ctx.rotate(theta);

      let lineLength = this.radius * 0.025;
      let lineWidth = lineLength * 0.2;
      ctx.fillStyle = '#999';

      if (isStepNumber) {
        ctx.fillStyle = this.color;
        lineLength = this.radius * 0.05;
        lineWidth = lineLength * 0.3;
      }

      lineLength -= lineWidth; // Subtraction for border radius

      ctx.beginPath();
      ctx.arc(
        this.radius + lineLength / 2,
        0,
        lineWidth / 2,
        -0.5 * Math.PI,
        0.5 * Math.PI,
      );
      ctx.rect(
        this.radius - lineLength / 2,
        -lineWidth / 2,
        lineLength,
        lineWidth,
      );
      ctx.moveTo(this.radius - lineLength / 2, 0);
      ctx.arc(
        this.radius - lineLength / 2,
        0,
        lineWidth / 2,
        0.5 * Math.PI,
        1.5 * Math.PI,
      );
      ctx.fill();
      ctx.translate(-this.x, -this.y);

      ctx.restore();
    }

    ctx.restore();
  }

  resize(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;

    this.radius = radius;
    this.font = 'bold ' + this.radius * 0.1246 + 'px Nanum Gothic';
  }
}
