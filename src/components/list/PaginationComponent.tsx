// style
import * as S from "../../styles/list/pagination.style";

const PaginationComponent = () => {
  const cur = 1 - 1;
  const pageList = [1, 2, 3, 4, 5];

  return (
    <S.PaginationLayout $prev={true} $next={false}>
      <div className="prev-arrow">
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </div>
      <div className="page-nums">
        {pageList.map((e, i) => (
          <S.PaginationButton
            $cur={i === cur ? true : false}
            className="num"
            key={`page-list-${i}`}
          >
            {e}
          </S.PaginationButton>
        ))}
      </div>
      <div className="next-arrow">
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </div>
    </S.PaginationLayout>
  );
};

export default PaginationComponent;
