// styles
import * as S from "../styles/search/search.style";
// components
import SearchInputComponent from "../components/search/SearchInputComponent";
import FilterConatiner from "./FilterContainer";

const SearchContainer = () => {
  return (
    <S.SearchLayout>
      <div className="title">
        <p>과목</p>
      </div>
      <div className="search-area">
        <SearchInputComponent />
        <FilterConatiner />
      </div>
    </S.SearchLayout>
  );
};

export default SearchContainer;
