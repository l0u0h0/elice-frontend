// style
import * as S from "../../styles/list/pagination.style";
import { PaginationComponentProps } from "../../types/components/list.types";

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  prev,
  next,
  cur,
  changePage,
}) => {
  const pageList = [1, 2, 3, 4, 5];

  return (
    <S.PaginationLayout $prev={prev} $next={next}>
      <div className="prev-arrow">
        <button
          className="arrow-btn"
          disabled={!prev}
          onClick={() => changePage(cur - 1)}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
      </div>
      <div className="page-nums">
        {pageList.map((e, i) => (
          <S.PaginationButton
            $cur={i === cur ? true : false}
            className="num"
            key={`page-list-${i}`}
            onClick={() => changePage(i)}
          >
            {e}
          </S.PaginationButton>
        ))}
      </div>
      <div className="next-arrow">
        <button
          className="arrow-btn"
          disabled={!next}
          onClick={() => changePage(cur + 1)}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </S.PaginationLayout>
  );
};

export default PaginationComponent;
