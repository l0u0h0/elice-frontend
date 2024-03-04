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
  discount,
  discount_rate,
}) => {
  const totalPrice = parseInt(discount) > 0 ? discount : price;

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
        {discount_rate === null || Number(price) === Number(discount) ? (
          totalPrice === "0" ? (
            <p className="free">무료</p>
          ) : (
            <p className="paid">
              ₩{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          )
        ) : (
          <div className="wrapper">
            <p className="paid">
              ₩{discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p className="origin-paid">
              ₩{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p className="rate">{Number(discount_rate) * 100}%</p>
          </div>
        )}
      </div>
    </S.ListCardView>
  );
};

export default ListCardComponent;
