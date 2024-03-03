// style
import * as S from "../../styles/list/list.style";
// type
import { ListCardComponentProps } from "../../types/components/list.types";

const ListCardComponent: React.FC<ListCardComponentProps> = ({
  title,
  type,
  text,
  price,
  thumbnail,
}) => {
  return (
    <S.ListCardView>
      <div className="thumbnail">
        <img
          src={thumbnail ? thumbnail : process.env.REACT_APP_LOGO_URL}
          alt="thumbnail-img"
        />
      </div>
      <div className="cardview-content">
        <div className="type">{type ? type : `미설정`}</div>
        <div className="title">{title}</div>
        <div className="content-text">{text}</div>
      </div>
      <div className="price">
        <p>{price}</p>
      </div>
    </S.ListCardView>
  );
};

export default ListCardComponent;