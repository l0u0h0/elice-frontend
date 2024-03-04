// style
import * as S from "../../styles/common/noresult.style";

const NoResultComponent = () => {
  return (
    <S.NoResultLayout>
      <img
        src={`${process.env.PUBLIC_URL}/images/no-result.png`}
        alt="No Result Img"
      />
    </S.NoResultLayout>
  );
};

export default NoResultComponent;
