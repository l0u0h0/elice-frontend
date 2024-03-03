// styles
import * as S from "../../styles/common/header.style";

// TODO: 추후 기타 요소 구현
const HeaderComponent = () => {
  return (
    <S.HeaderLayout>
      <S.LogoLink>
        <img
          src="https://cdn-api.elice.io/api/file/58c7f7253d0c45b384e757953c1dcd55/%E1%84%8B%E1%85%A6%E1%86%AF%E1%84%8F%E1%85%A1%E1%84%83%E1%85%A6%E1%84%86%E1%85%B5_kr%404x.png?se=2100-12-31T00%3A00%3A00Z&sp=r&sv=2021-12-02&sr=b&sig=ambqFbUklwfxNCv8ohIXBGpyBwmE7AdZH9rKKTBg150%3D"
          alt="Elice Logo"
        />
      </S.LogoLink>
    </S.HeaderLayout>
  );
};

export default HeaderComponent;
