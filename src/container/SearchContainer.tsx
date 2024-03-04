// React
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// style
import * as S from "../styles/search/search.style";
// components
import SearchInputComponent from "../components/search/SearchInputComponent";
import FilterConatiner from "./FilterContainer";
// Jotai
import { courseAtom, filterAtom, offsetAtom } from "../jotai/course";
import { useAtomValue, useSetAtom } from "jotai";
// Service
import { getCourseList } from "../services/ListService";

const SearchContainer = () => {
  // 여기서 useSearchParams로 url query 관리
  const page = useAtomValue(offsetAtom);
  const filter = useAtomValue(filterAtom);
  const setCourses = useSetAtom(courseAtom);
  const [searchParams, setSearchParams] = useSearchParams();

  const setParams = useCallback(() => {
    const curPriceType = filter
      .filter((e) => e.isSelected)
      .map((e) => {
        return { enroll_type: e.enroll_type, is_free: e.is_free };
      });

    searchParams.forEach((_e, key) => searchParams.delete(key));

    curPriceType.forEach((e) => {
      if (e.enroll_type === 0) {
        if (e.is_free) {
          searchParams.append("price", "free");
        } else {
          searchParams.append("price", "paid");
        }
      } else {
        searchParams.append("price", "subscribe");
      }
    });

    setSearchParams(searchParams);
  }, [filter]);

  const getList = useCallback(() => {
    getCourseList({
      filter_conditions: JSON.stringify({
        $and: [
          { title: "%c언어%" },
          {
            $or: searchParams.getAll("price").map((e) => {
              if (e === "paid") {
                return { enroll_type: 0, is_free: false };
              } else if (e === "free") {
                return { enroll_type: 0, is_free: true };
              } else {
                return { enroll_type: 4 };
              }
            }),
          },
        ],
      }),
      offset: page * 20,
    })
      .then((res) => {
        if (res._result.status === "ok") {
          console.log(res.courses);
          setCourses({ courses: res.courses, count: res.course_count });
        }
      })
      .catch((error) => console.error(error));
  }, [page, searchParams]);

  useEffect(() => getList(), [getList]);

  useEffect(() => setParams(), [setParams]);

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
