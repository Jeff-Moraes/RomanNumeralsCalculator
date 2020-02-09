import React from "react";

// import { Container } from './styles';

export default function Keyboard({
  numbersKey,
  symbolsKey,
  handleClick,
  handleChange,
  handleClear
}) {
  return (
    <>
      <div className="keyNumbers">
        {numbersKey.map(key => (
          <button
            key={key}
            type="button"
            name={key}
            value={key}
            onClick={handleClick}
          >
            {key}
          </button>
        ))}
        <button type="submit">=</button>
      </div>
      <div className="keySymbol">
        <button type="button" name="Clear" onClick={handleClear}>
          &#1017;
        </button>
        {symbolsKey.map(key => (
          <button
            key={key}
            type="button"
            name="symbol"
            value={key}
            onClick={handleChange}
          >
            {key}
          </button>
        ))}
      </div>
    </>
  );
}
