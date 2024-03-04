// style
import * as S from "../../styles/list/list.style";
// type
import { ListCardComponentProps } from "../../types/components/list.types";

const ListCardComponent: React.FC<ListCardComponentProps> = ({
  title,
  type,
  text,
  price,
  image,
  logo,
}) => {
  return (
    <S.ListCardView>
      {image ? (
        <div className="thumbnail-image">
          <img src={image} alt="thumbnail-img" />
        </div>
      ) : logo ? (
        <div className="thumbnail-logo">
          <img src={logo} alt="thumbnail-img" />
        </div>
      ) : (
        <div className="thumbnail-logo"></div>
      )}
      <div className="cardview-content">
        <div className="type">{type ? type : `미설정`}</div>
        <div className="title">{title}</div>
        <div className="content-text">{text}</div>
      </div>
      <div className="price">
        <p>
          {price === "0"
            ? "무료"
            : `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}
        </p>
      </div>
    </S.ListCardView>
  );
};

export default ListCardComponent;
