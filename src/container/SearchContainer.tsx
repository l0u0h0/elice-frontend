// styles
import * as S from "../styles/search/search.style";
import SearchInputComponent from "../components/search/SearchInputComponent";

const SearchContainer = () => {
  return (
    <S.SearchLayout>
      <div className="title">
        <p>과목</p>
      </div>
      <div className="search-area">
        <SearchInputComponent />
      </div>
    </S.SearchLayout>
  );
};

export default SearchContainer;
