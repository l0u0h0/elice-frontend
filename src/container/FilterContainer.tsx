// styles
import FilterComponent from "../components/search/FilterComponent";
import * as S from "../styles/search/filter.style";

const FilterConatiner = () => {
  return (
    <S.FilterLayout>
      <div className="filter-row">
        <div className="row-title">
          <p>가격</p>
        </div>
        <div className="row-content">
          <FilterComponent name="무료" />
          <FilterComponent name="유료" />
        </div>
      </div>
    </S.FilterLayout>
  );
};

export default FilterConatiner;
