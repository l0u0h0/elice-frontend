// styles
import { useCallback, useState } from "react";
import * as S from "../../styles/search/search.style";

const SearchInputComponent = () => {
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
        type="text"
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        onFocus={() => focusEvent(true)}
        onBlur={() => focusEvent(false)}
      />
    </S.SearchInputLayout>
  );
};

export default SearchInputComponent;
