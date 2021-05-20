import React, { Component } from 'react';
import { Promise } from 'q';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {
      typeWriterText: ''
    }
  }

  componentDidMount() {
    this.typeWriter();
  }

  async typeWriter() {
    let textsToType = ['developer', 'teacher', 'philosopher', 'crypto enthusiast.'];
    for (let i = 0; i < textsToType.length; i++) {
      await this.typeText(textsToType[i]);
      if (i !== textsToType.length -1) {
        await this.eraseText(textsToType[i]);
      }
    }
  }

  typeText(someText) {
    return new Promise(async resolve => {
      for (let i = 0; i < someText.length; i++) {
        await this.typeChar(someText[i]);
      }
      setTimeout(resolve, Math.random() * 1000)
    });
  }

  async eraseText(someText) {
    for (let i = someText.length; i > 0; i--) {
        await this.eraseChar();
    }
  }

  typeChar(someChar) {
    return new Promise(resolve => {
      let updatedText = this.state.typeWriterText + someChar
      this.setState({
        typeWriterText: updatedText
      });
      setTimeout(resolve, Math.random() * 200)
    });
  }

  eraseChar() {
    return new Promise(resolve => {
      this.setState({
        typeWriterText: this.state.typeWriterText.slice(0,-1)
      });
      setTimeout(resolve, 50)
    });
  }

  render() {
    return (
      <div>
        <h1>My name is Erik Niklasson.</h1>
        <h1 className="typewriter">I'm a
          <span> {this.state.typeWriterText}</span><span className="blink_me">|</span>
        </h1>
      </div>
    );
  }
}
