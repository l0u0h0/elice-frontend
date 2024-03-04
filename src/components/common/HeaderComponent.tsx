// style
import * as S from "../../styles/common/header.style";

const HeaderComponent = () => {
  const logo = process.env.REACT_APP_LOGO_URL;
  return (
    <S.HeaderLayout>
      <S.LogoLink>
        <img src={logo} alt="Elice Logo" />
      </S.LogoLink>
    </S.HeaderLayout>
  );
};

export default HeaderComponent;
