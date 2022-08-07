import styled from "styled-components";
import { Colors } from "../../theme/color";

export const HeaderWrapped = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px;

  > svg {
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 35px;
  padding: 10px;
  background-color: ${Colors.blue5};

  border-radius: 30px;
  border: 2px solid ${Colors.blue1};

  color: ${Colors.white};
`;
