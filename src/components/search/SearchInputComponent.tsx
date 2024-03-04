// React
import { useCallback, useState } from "react";
// style
import * as S from "../../styles/search/search.style";
import { SearchInputComponentProps } from "../../types/components/filter.types";

const SearchInputComponent: React.FC<SearchInputComponentProps> = ({
  keyword,
  onChange,
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  const focusEvent = useCallback((onFocus: boolean) => {
    setFocus(onFocus);
  }, []);

  return (
    <S.SearchInputLayout $focus={focus}>
      <img
        src={`${process.env.PUBLIC_URL}/images/search.svg`}
        onClick={() => console.log("Searching !!!")}
        alt="Search Img"
      />
      <input
        name="search-input"
        type="text"
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        value={keyword ? keyword : ""}
        onChange={onChange}
        onFocus={() => focusEvent(true)}
        onBlur={() => focusEvent(false)}
      />
    </S.SearchInputLayout>
  );
};

export default SearchInputComponent;
