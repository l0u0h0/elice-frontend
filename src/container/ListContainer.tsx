// React
import { useCallback, useEffect, useState } from "react";
// Jotai
import { useAtom, useAtomValue } from "jotai";
import { courseAtom, offsetAtom } from "../jotai/course";
// style
import * as S from "../styles/list/list.style";
// components
import ListCardComponent from "../components/list/ListCardComponent";
import PaginationComponent from "../components/list/PaginationComponent";
// type
import { courseListType } from "../types/data/courseData.types";

const ListContainer = () => {
  const [prev, setPrev] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);
  const [current, setCurrent] = useAtom<number>(offsetAtom);
  const courseList = useAtomValue(courseAtom);

  const changePage = useCallback(
    (offset: number) => {
      setCurrent(offset);
    },
    [setCurrent]
  );

  useEffect(() => {
    setPrev(current > 0 ? true : false);
    setNext(current < 4 ? true : false);
  }, [current]);

  const listCount = 284;

  return (
    <S.ListLayout>
      <div className="total-count">
        <p>전체 {listCount}개</p>
      </div>
      <S.ListContainer>
        {courseList?.courses &&
          courseList.courses.map((e: courseListType, i) => (
            <ListCardComponent
              title={e.title}
              type={e.type}
              text={e.text}
              image={e.image}
              logo={e.logo}
              price={e.price}
              key={`course-list-${i}`}
            />
          ))}
      </S.ListContainer>
      <PaginationComponent
        cur={current}
        prev={prev}
        next={next}
        changePage={changePage}
      />
    </S.ListLayout>
  );
};

export default ListContainer;
