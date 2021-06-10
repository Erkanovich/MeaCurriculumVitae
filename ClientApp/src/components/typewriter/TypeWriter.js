import React, { Component } from "react";
import './TypeWriter.css';

export class TypeWriter extends Component {
  typeWriterTimeout;

  constructor(props) {
    super(props);
    this.state = {
      typeWriterText: ""
    };
    this.textsToType = props.textsToType;
    this.typeWriter = this.typeWriter.bind(this);
  }

  componentDidMount() {
    this.typeWriterTimeout = setTimeout(this.typeWriter, 800);
  }

  componentWillUnmount() {
    clearTimeout(this.typeWriterTimeout);
  }

  async typeWriter() {
    for (let i = 0; i < this.textsToType.length; i++) {
      await this.typeText(this.textsToType[i]);
      if (i !== this.textsToType.length - 1) {
        await this.eraseText(this.textsToType[i]);
      }
    }
  }

  typeText(someText) {
    return new Promise(async resolve => {
      for (let i = 0; i < someText.length; i++) {
        await this.typeChar(someText[i]);
      }
      setTimeout(resolve, Math.random() * 1500);
    });
  }

  async eraseText(someText) {
    for (let i = someText.length; i > 0; i--) {
      await this.eraseChar();
    }
  }

  typeChar(someChar) {
    return new Promise(resolve => {
      let updatedText = this.state.typeWriterText + someChar;
      this.setState({
        typeWriterText: updatedText
      });
      setTimeout(resolve, Math.random() * 200);
    });
  }

  eraseChar() {
    return new Promise(resolve => {
      this.setState({
        typeWriterText: this.state.typeWriterText.slice(0, -1)
      });
      setTimeout(resolve, 50);
    });
  }

  render() {
    return (
      <span className="typewriter">
        <span> {this.state.typeWriterText}</span>
        <span className="blink_me">|</span>
      </span>
    );
  }
}
