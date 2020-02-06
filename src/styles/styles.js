import styled from "styled-components";

export const Container = styled.div`
  height: 30vh;
  width: 40vw;
  min-width: 300px;

  padding: 30px;

  background: #252d38;
  background: linear-gradient(180deg, #252d38, #3d4958);

  border-radius: 5px;
  border: 0;

  p {
    color: #e46263;
    font-weight: 400;
  }
  h1 {
    font-size: 30px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 20px;
  }

  form {
    .values {
      margin: 20px 0;

      display: flex;
      input {
        width: 100%;
        background: none;
        border: 0;
        border-bottom: 1px solid #e46263;

        font-size: 20px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.7);

        &:hover {
          border-bottom: 1px solid #fa4243;
        }
        &:focus {
          border-bottom: 0;
        }
      }

      span {
        font-size: 20px;
        font-weight: 400;
        color: #e46263;

        margin: 0 15px;
      }
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
  }
`;
