import styled from "styled-components";

export const Container = styled.div`
  width: 45vw;
  min-width: 300px;
  padding: 30px;

  background: #252d38;
  background: linear-gradient(180deg, #252d38, #3d4958);

  border-radius: 5px;
  border: 0;

  p {
    color: #e46263;
    font-weight: 400;
    padding-bottom: 5px;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  }

  form {
    .values {
      margin: 40px 0 30px;

      display: flex;
      input {
        width: 100%;
        background: none;
        border: 0;
        border-bottom: 1px solid #e46263;

        font-size: 20px;
        font-weight: 300;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.7);

        &:placeholder-shown {
          text-transform: none;
        }
        &:hover {
          border-bottom: 1px solid #fa4243;
        }
        &:focus {
          border-bottom: 0;
        }
      }

      span {
        font-size: 24px;
        font-weight: 400;
        color: #e46263;

        margin: 0 15px;
      }
    }
    .flex-row {
      display: flex;
      justify-content: space-between;
      padding-bottom: 15px;
      border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
    }
    .buttons {
      display: flex;

      button {
        width: 37px;
        height: 37px;
        border-radius: 50%;
        padding: 5px;
        margin-right: 10px;

        color: rgba(255, 255, 255, 0.8);
        font-size: 20px;
        font-weight: 300;

        &[type="button"] {
          background: none;
          border: 0.5px solid rgba(255, 255, 255, 0.2);
          transition: border 0.3s;
          &:hover {
            border: 0.5px solid rgba(255, 255, 255, 0.5);
          }
          &:nth-child(3) {
            transform: rotate(45deg);
          }
        }

        &[type="submit"] {
          border: none;
          background: #e46263;
          transition: background 0.3s;

          &:hover {
            background: #fa4243;
          }
        }
      }
    }
    h1 {
      font-size: 30px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.9);

      &.total {
        color: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;
