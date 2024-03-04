// React
import { useCallback, useEffect } from "react";
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

  const getList = useCallback(() => {
    getCourseList({
      filter_conditions: JSON.stringify({
        $and: [
          { title: "%c언어%" },
          { $or: [{ enroll_type: 0, is_free: true }] },
        ],
      }),
      offset: page * 20,
    })
      .then((res) => {
        if (res._result.status === "ok") {
          setCourses({ courses: res.courses, count: res.course_count });
        }
      })
      .catch((error) => console.error(error));
  }, [page, filter]);

  useEffect(() => getList(), [getList]);

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
