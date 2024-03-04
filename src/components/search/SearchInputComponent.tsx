// React
import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
// style
import * as S from "../../styles/search/search.style";
// hook
import useDebounce from "../../hooks/useDebounce";

const SearchInputComponent = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const focusEvent = useCallback((onFocus: boolean) => {
    setFocus(onFocus);
  }, []);

  const debouncedKeyword = useDebounce((value: string) => {
    if (value === "") searchParams.delete("keyword");
    else searchParams.set("keyword", value);
    setSearchParams(searchParams);
  }, 1000);

  const handleSearchKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedKeyword(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current && searchParams) {
      const keyword = searchParams.get("keyword");
      inputRef.current.value = keyword !== null ? keyword : "";
    }
  }, [inputRef]);

  return (
    <S.SearchInputLayout $focus={focus}>
      <img
        src={`${process.env.PUBLIC_URL}/images/search.svg`}
        alt="Search Img"
      />
      <input
        name="search-input"
        type="text"
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        ref={inputRef}
        onChange={handleSearchKeyword}
        onFocus={() => focusEvent(true)}
        onBlur={() => focusEvent(false)}
      />
    </S.SearchInputLayout>
  );
};

export default SearchInputComponent;
