import { HiOutlineLocationMarker } from "react-icons/hi";
import { Colors } from "../../theme/color";

import * as S from "./styles";

const Header = () => {
  return (
    <S.HeaderWrapped>
      <HiOutlineLocationMarker color={Colors.blue2} size={40} />
      <S.Input type="search" name="Input" id="input" />
    </S.HeaderWrapped>
  );
};

export default Header;
