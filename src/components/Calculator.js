import React, { Component } from "react";

import { Container } from "../styles/styles";

import Keyboard from "./Keyboard";

import numbers from "../util/numbers";
import isRomanValid from "../util/isRomanValid";
import convertToInteger from "../util/convertToInteger";
import convertToRoman from "../util/convertToRoman";

const symbols = ["+", "−", "×"];

export default class Calculator extends Component {
  state = {
    firstValue: "",
    secondValue: "",
    result: "",
    symbol: "+",
    selectedInput: "firstValue"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleKeyNumberClick = event => {
    const { selectedInput } = this.state;
    const newValue = this.state[selectedInput] + event.target.value;
    this.setState({
      [selectedInput]: newValue
    });
  };

  handleClear = () => {
    this.setState({
      firstValue: "",
      secondValue: "",
      result: ""
    });
  };

  getInput = event => {
    this.setState({
      selectedInput: [event.target.name]
    });
  };

  getInteger = (romanArray, event) => {
    let isValid = isRomanValid(romanArray, numbers);
    this.setState({
      invalidNumber: isValid
    });
  };

  getResult = () => {
    const firstResult = convertToInteger(this.state.firstValue, numbers);
    const secondResult = convertToInteger(this.state.secondValue, numbers);
    if (this.state.symbol === "+") {
      return firstResult + secondResult;
    } else if (this.state.symbol === "−") {
      return firstResult - secondResult;
    } else {
      return firstResult * secondResult;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      isRomanValid(this.state.firstValue, numbers) &&
      isRomanValid(this.state.secondValue, numbers)
    ) {
      let result = this.getResult();
      if (result < 0) {
        this.setState({
          result: `- ${convertToRoman(-result)}`
        });
      } else if (result <= 3999) {
        this.setState({
          result: convertToRoman(result)
        });
      } else {
        this.setState({
          result: "Greater than 3999"
        });
      }
    } else {
      this.setState({
        result: "Invalid number"
      });
    }
  };

  render() {
    return (
      <Container>
        <p>Roman Calculator</p>
        <form onSubmit={this.handleSubmit}>
          <div className="display">
            <input
              type="text"
              name="firstValue"
              placeholder="Insert number"
              value={this.state.firstValue}
              onChange={this.handleChange}
              onClick={this.getInput}
            />
            <span>{this.state.symbol}</span>
            <input
              type="text"
              name="secondValue"
              placeholder="Insert number"
              value={this.state.secondValue}
              onChange={this.handleChange}
              onClick={this.getInput}
            />
          </div>
          {this.state.result ? (
            <h1>{this.state.result}</h1>
          ) : (
            <h1 className="total">Total</h1>
          )}
          <div className="keys">
            <Keyboard
              numbersKey={Object.keys(numbers)}
              handleClick={this.handleKeyNumberClick}
              symbolsKey={symbols}
              handleChange={this.handleChange}
              handleClear={this.handleClear}
            />
          </div>
        </form>
      </Container>
    );
  }
}
