import React, { Component } from "react";
import GameArea from '../game/GameArea';

export class Game extends Component {
  render() {
    return (
      <div>
        <h1>Game</h1>
        <GameArea></GameArea>
      </div>
    );
  }
}
