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
    invalidNumber: false
  };

  handleResult = (event, value) => {
    this.setState({
      [event.target.id]: value
    });
  };

  getInteger = (romanArray, numbers, event) => {
    let isValid = isRomanValid(romanArray, numbers);
    let result;
    if (isValid) {
      result = convertToInteger(romanArray, numbers);
    } else {
      this.setState({
        invalidNumber: true
      });
    }
    this.handleResult(event, result);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

    const valueToArray = event.target.value.toUpperCase().split("");

    if (valueToArray.length > 0) {
      this.getInteger(valueToArray, numbers, event);
    } else {
      this.handleResult(event, event.target.value);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.invalidNumber) {
      this.setState({
        result: "Insert a valid number"
      });
    } else {
      this.setState({
        result: convertToRoman(this.state.firstResult + this.state.secondResult)
      });
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
              value={this.state.firstValue}
              onChange={this.handleChange}
            />
            <span>+</span>
            <input
              type="text"
              name="secondValue"
              id="secondResult"
              value={this.state.secondValue}
              onChange={this.handleChange}
            />
          </div>
          <div className="buttons">
            <button type="button">+</button>
            <button type="button">-</button>
            <button type="button">+</button>
            <button type="submit">=</button>
          </div>
        </form>
        <h1>{this.state.result}</h1>
      </Container>
    );
  }
}
