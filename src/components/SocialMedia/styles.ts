import styled from "styled-components";
import { Colors } from "../../theme/color";

export const Wrapped = styled.div`
  width: 500px;
  height: 100px;

  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  background-color: ${Colors.blue5};
  filter: drop-shadow(14px 14px 10px rgb(0 0 0 / 0.2));

  border-radius: 10px;
`;

export const Icon = styled.div`
  width: 100px;
  height: 100px;
  display: grid;
  place-items: center;

  cursor: pointer;

  > svg {
    transition: 100ms;
    filter: drop-shadow(4px 4px 3px rgb(0 0 0 / 0.4));

    opacity: 0.7;
    :hover {
      opacity: 1;
    }
  }
`;
