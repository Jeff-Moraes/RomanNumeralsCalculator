import React, { Component } from "react";

import { Container } from "../styles/styles";

import numbers from "../util/numbers";
import isRomanValid from "../util/isRomanValid";
import convertToInteger from "../util/convertToInteger";
import convertToRoman from "../util/convertToRoman";

export default class Calculator extends Component {
  state = {
    firstValue: "",
    secondValue: "",
    firstResult: "",
    secondResult: "",
    result: "",
    invalidNumber: false,
    symbol: "+"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name === "symbol") return;

    const valueToArray = event.target.value.toUpperCase().split("");

    if (valueToArray.length > 0) {
      this.getInteger(valueToArray, event);
    } else {
      this.handleResult(event, event.target.value);
    }
  };

  getInteger = (romanArray, event) => {
    let isValid = isRomanValid(romanArray, numbers);
    let result;
    if (isValid) {
      this.setState({
        invalidNumber: false
      });
      result = convertToInteger(romanArray, numbers);
      console.log(result);
    } else {
      this.setState({
        invalidNumber: true
      });
    }
    this.handleResult(event, result);
  };

  handleResult = (event, value) => {
    this.setState({
      [event.target.id]: value
    });
  };

  getResult = () => {
    if (this.state.symbol === "+") {
      return this.state.firstResult + this.state.secondResult;
    } else if (this.state.symbol === "-") {
      return this.state.firstResult - this.state.secondResult;
    } else {
      return this.state.firstResult * this.state.secondResult;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.invalidNumber) {
      this.setState({
        result: "Invalid number"
      });
    } else {
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
    }
  };

  render() {
    return (
      <Container>
        <p>Roman Calculator</p>
        <form onSubmit={this.handleSubmit}>
          <div className="values">
            <input
              type="text"
              name="firstValue"
              id="firstResult"
              placeholder="Insert number"
              value={this.state.firstValue}
              onChange={this.handleChange}
            />
            <span>{this.state.symbol}</span>
            <input
              type="text"
              name="secondValue"
              id="secondResult"
              placeholder="Insert number"
              value={this.state.secondValue}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex-row">
            <div className="buttons">
              <button
                type="button"
                onClick={this.handleChange}
                name="symbol"
                value="+"
              >
                +
              </button>
              <button
                type="button"
                onClick={this.handleChange}
                name="symbol"
                value="-"
              >
                -
              </button>
              <button
                type="button"
                onClick={this.handleChange}
                name="symbol"
                value="X"
              >
                +
              </button>
              <button type="submit">=</button>
            </div>
            {this.state.result ? (
              <h1>{this.state.result}</h1>
            ) : (
              <h1 className="total">Total</h1>
            )}
          </div>
        </form>
      </Container>
    );
  }
}
