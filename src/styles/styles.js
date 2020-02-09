import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  padding: 10% 10% 5% 10%;

  background: #252d38;
  background: linear-gradient(180deg, #252d38, #3d4958);

  border-radius: 5px;
  border: 0;

  p {
    color: #bb5252;
    font-weight: 400;
    padding-bottom: 5px;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  }

  form {
    .display {
      margin: 40px 0;
      display: flex;
      input {
        width: 100%;
        border: 0;
        border-bottom: 0.5px solid #bb5252;
        font-size: 14px;
        font-weight: 300;
        text-transform: uppercase;
        background: none;
        color: rgba(255, 255, 255, 0.7);
        cursor: pointer;

        &:placeholder-shown {
          font-size: 12px;
          text-transform: none;
        }
        &:hover {
          border-bottom: 0.5px solid #c5464b;
        }
        &:focus {
          border-bottom: 0;
        }
      }

      span {
        font-size: 24px;
        font-weight: 400;
        color: #bb5252;
        margin: 0 5px;
      }
    }
    h1 {
      height: 85px;
      font-size: 30px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.9);
      text-align: right;
      align-self: flex-end;
      padding-bottom: 10px;
      margin-bottom: 30px;
      border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);

      &.total {
        color: rgba(255, 255, 255, 0.2);
      }
    }

    .keys {
      display: grid;
      grid-template-columns: 2fr 1fr;
      .keyNumbers {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        button:nth-child(even) {
          margin: 0 auto;
        }
      }
      .keySymbol {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
      }
      button {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        padding: 5px;
        margin-bottom: 15px;

        color: rgba(255, 255, 255, 0.7);
        font-size: 20px;
        font-weight: 300;

        &:active {
          box-shadow: 0px 0px 7px 2px rgba(255, 255, 255, 0.3);
        }

        &[type="button"] {
          background: none;
          border: 0.5px solid rgba(255, 255, 255, 0.07);
          transition: border 0.3s;
          &:hover {
            border: 0.5px solid rgba(255, 255, 255, 0.3);
          }
        }

        &[name="Clear"] {
          color: #bb5252;
          &:hover {
            color: #c5464b;
          }
        }

        &[type="submit"] {
          border: none;
          background: #bb5252;
          transition: background 0.3s;
          &:hover {
            background: #c5464b;
          }
        }
      }
    }
  }
`;
