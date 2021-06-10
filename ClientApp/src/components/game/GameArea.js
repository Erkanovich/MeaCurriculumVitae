import React, { Component } from "react";
import Player from "./Player";

export default class GameArea extends Component {
  WIDTH = 300;
  HEIGHT = 300;
  context = null;
  canvasRef = null;
  player = null;
  interval = null;

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.updateGameArea = this.updateGameArea.bind(this);
  }

  componentDidMount() {
    this.context = this.canvasRef.current.getContext("2d");
    this.startgame();
  }

  render() {
    console.log("render");
    return (
      <canvas
        width={this.WIDTH}
        height={this.HEIGHT}
        ref={this.canvasRef}
        style={{ border: "1px solid black" }}
      ></canvas>
    );
  }

  startgame() {
    this.player = new Player(50, 50, "red", 0, 0);
    this.player2 = new Player(50, 50, "blue", 200, 0);
    this.player.updatePlayerPosition(this.context);
    this.setupKeyListeners();
    this.interval = setInterval(this.updateGameArea, 10);
  }

  setupKeyListeners() {
    document.addEventListener("keydown", (event) => {
      if (this.player.isMoving()) {
        return;
      }
      switch (event.key) {
        case "ArrowLeft":
          this.player.moveX(-1);
          break;
        case "ArrowUp":
          this.player.moveY(-1);
          break;
        case "ArrowRight":
          this.player.moveX(1);
          break;
        case "ArrowDown":
          this.player.moveY(1);
          break;

        default:
          break;
      }
    });
  }

  clear() {
    this.context.clearRect(
      0,
      0,
      this.canvasRef.current.width,
      this.canvasRef.current.height
    );
  }

  updateGameArea() {
    this.clear();

    if (this.player.willCrashWith(this.player2)) {
      this.player.speedX = 0;
      this.player.speedY = 0;
    }



    //is my next position outside of area?
    //stop at bounds
    this.player.newPos();
    if (this.wallCollisionX()) {
      if (this.player.speedX < 0) {
        this.player.x = 0;
      }
      if (this.player.speedX > 0) {
        this.player.x = this.WIDTH - this.player.width;
      }
      this.player.speedX = 0;
    }

    if (this.wallCollisionY()) {
      if (this.player.speedY < 0) {
        this.player.y = 0;
      }
      if (this.player.speedY > 0) {
        this.player.y = this.HEIGHT - this.player.height;
      }
      this.player.speedY = 0;
    }

    
    this.player.updatePlayerPosition(this.context);
    this.player2.updatePlayerPosition(this.context);
  }

  isOutsideOfBounds(x, y) {
    if (x <= 0 || x >= this.WIDTH - this.player.width) {
      return true;
    }
    if (y <= 0 || y >= this.HEIGHT - this.player.height) {
      return true;
    }
  }

  wallCollisionX() {
    if (this.player.x <= 0 || this.player.x >= this.WIDTH - this.player.width) {
      return true;
    }
  }
  wallCollisionY() {
    if (this.player.y <= 0 || this.player.y >= this.HEIGHT - this.player.height) {
      return true;
    }
  }
}
