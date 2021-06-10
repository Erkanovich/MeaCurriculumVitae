export default class Player {

    speedX = 0;
    speedY = 0;
    speed = 10;

    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
    }

    updatePlayerPosition(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    moveX(direction) {
        this.speedX += direction * this.speed;
    }

    moveY(direction) {
        this.speedY += direction * this.speed;
    }

    isMoving() {
        if (this.speedX !== 0 || this.speedY !== 0) {
            return true;
        }
        return false;
    }

      willCrashWith(otherobj) {
        let myleft = this.x + this.speedX;
        let myright = this.x + this.width + this.speedX;
        let mytop = this.y + this.speedY;
        let mybottom = this.y + this.height + this.speedY;
        let otherleft = otherobj.x;
        let otherright = otherobj.x + (otherobj.width);
        let othertop = otherobj.y;
        let otherbottom = otherobj.y + (otherobj.height);
        let crash = true;
        if ((mybottom <= othertop) ||
        (mytop >= otherbottom) ||
        (myright <= otherleft) ||
        (myleft >= otherright)) {
          crash = false;
        }
        return crash;
      }
}