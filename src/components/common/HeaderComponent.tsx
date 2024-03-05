// style
import * as S from "../../styles/common/header.style";

const HeaderComponent = () => {
  return (
    <S.HeaderLayout>
      <S.LogoLink>
        <img src={process.env.REACT_APP_LOGO_URL} alt="Elice Logo" />
      </S.LogoLink>
    </S.HeaderLayout>
  );
};

export default HeaderComponent;
