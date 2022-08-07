import styled from "styled-components";
import { Colors } from "./theme/color";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;

  background-color: ${Colors.blue3};
`;

export const Body = styled.div`
  color: ${Colors.white};
  font-size: 32px;
  font-family: "Roboto", sans-serif;
`;

export const Footer = styled.div`
  > p {
    margin-top: 20px;

    color: ${Colors.white};
    font-size: 10px;
    text-align: center;
    font-family: "Roboto", sans-serif;

    a {
      text-decoration: none;
      color: ${Colors.blue1};

      :hover {
        text-decoration: underline;
        transition: transform 0.25s ease-in-out;
      }
    }
  }
`;

export const Title = styled.h1`
  color: ${Colors.white};
  font-size: 32px;
  font-family: "Roboto", sans-serif;
`;
