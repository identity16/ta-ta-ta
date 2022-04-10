import { degreeToRadian } from "../_common/util";

export default class BackBoard {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;

        this.radius = radius;
        this.color = "#e31936";
    }

    draw(ctx, possession) {
        ctx.save();

        const startAngle = degreeToRadian(270);
        const endAngle = startAngle - degreeToRadian(360 * possession);

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);

        // Draw Circle by possession
        if (possession < 1) {
            ctx.arc(this.x, this.y, this.radius, startAngle, endAngle, true);
        } else {
            ctx.arc(this.x, this.y, this.radius, 0, degreeToRadian(360));
        }

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.restore();
    }

    resize(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}
