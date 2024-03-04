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
import NoResultComponent from "../components/common/NoResultComponent";
// type
import { courseListType } from "../types/data/courseData.types";

const ListContainer = () => {
  const [prev, setPrev] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);
  const [pageList, setPageList] = useState<number[] | null>(null);
  const [current, setCurrent] = useAtom<number>(offsetAtom);
  const courseList = useAtomValue(courseAtom);

  const changePage = useCallback(
    (offset: number) => {
      setCurrent(offset);
    },
    [setCurrent]
  );

  const setPage = useCallback(() => {
    const list: number[] | null = [];

    // 20개 이하일 경우 페이지네이션이 필요 없음.
    if (courseList && courseList.count > 20) {
      // 5 페이지까지 나올 경우 => cur 값이 중앙에 위치할 필요 없음.
      if (courseList.count <= 100) {
        let cnt = 1;
        for (let i = 0; i < courseList.count; i += 20) {
          list.push(cnt++);
        }
      } else {
        let start = 0;
        let end = 0;

        if (current <= 2) {
          start = 1;
          end = 5;
        } else if (current + 3 >= Math.floor(courseList.count / 20)) {
          start = Math.floor(courseList.count / 20) - 3;
          end = Math.floor(courseList.count / 20) + 1;
        } else {
          start = current - 1;
          end = current + 3;
        }

        for (let i = start; i <= end; i++) {
          list.push(i);
        }
      }
      setPrev(current > 0 ? true : false);
      setNext(current < Math.floor(courseList.count / 20) - 1 ? true : false);
    }

    setPageList(list.length > 1 ? list : null);
  }, [courseList, current]);

  useEffect(() => {
    setPage();
  }, [setPage]);

  const listCount = courseList?.count;

  return courseList && courseList.count > 0 ? (
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
              discount={e.discount}
              discount_rate={e.discount_rate}
              key={`course-list-${i}`}
            />
          ))}
      </S.ListContainer>
      <PaginationComponent
        cur={current}
        prev={prev}
        next={next}
        pageList={pageList}
        changePage={changePage}
      />
    </S.ListLayout>
  ) : (
    <NoResultComponent />
  );
};

export default ListContainer;
