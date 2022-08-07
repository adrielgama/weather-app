import { BsLinkedin, BsGithub, BsHouseFill } from "react-icons/bs";

import * as S from "./styles";

const SocialMedia = () => {
  return (
    <S.Wrapped>
      <S.Icon>
        <BsGithub color="#f8f8f8" size={32} />
      </S.Icon>
      <S.Icon>
        <BsHouseFill color="#f08ef7" size={32} />
      </S.Icon>
      <S.Icon>
        <BsLinkedin color="#28a1e7" size={32} />
      </S.Icon>
    </S.Wrapped>
  );
};

export default SocialMedia;
