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
import { useAtom, useSetAtom } from "jotai";
// Service
import { getCourseList } from "../services/ListService";
// type
import { courseInfoType } from "../types/data/courseData.types";
import {
  filterDataType,
  filterParamsType,
} from "../types/data/filterData.types";

const SearchContainer = () => {
  const [page, setPage] = useAtom(offsetAtom);
  const [filter, setFilter] = useAtom(filterAtom);
  const setCourses = useSetAtom(courseAtom);
  const [searchParams, setSearchParams] = useSearchParams();

  const setParams = useCallback(() => {
    if (filter === null) {
      const temp = [
        { label: "무료", isSelected: false, enroll_type: 0, is_free: true },
        { label: "유료", isSelected: false, enroll_type: 0, is_free: false },
        { label: "구독", isSelected: false, enroll_type: 4, is_free: null },
      ];
      searchParams.getAll("price").forEach((e) => {
        if (e === "paid") {
          temp[temp.findIndex((v) => v.label === "유료")].isSelected = true;
        } else if (e === "free") {
          temp[temp.findIndex((v) => v.label === "무료")].isSelected = true;
        } else {
          temp[temp.findIndex((v) => v.label === "구독")].isSelected = true;
        }
      });

      setFilter(temp.sort());
      return;
    }

    const curPriceType = filter
      .filter((e: filterDataType) => e.isSelected)
      .map((e: filterDataType) => {
        return { enroll_type: e.enroll_type, is_free: e.is_free };
      });

    searchParams.forEach((_e, key) => {
      if (key === "price") searchParams.delete(key);
    });

    curPriceType.forEach((e: filterParamsType) => {
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
          { title: `%${searchParams.get("keyword")}%` },
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
          setCourses({
            courses: res.courses.map((e: courseInfoType) => {
              return {
                title: e.title,
                type: e.class_type === 0 ? "미설정" : `${e.class_type}`,
                text: e.short_description,
                image: e.image_file_url,
                logo: e.logo_file_url,
                price: e.price,
                discount: e.discounted_price,
                discount_rate: e.discount_rate,
              };
            }),
            count: res.course_count,
          });
        } else {
          throw new Error("잘못된 응답 수신 오류");
        }

        if (res.courses.length === 0 && page > 0) {
          setPage(0);
        }

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        throw new Error("서버로부터 응답 오류");
      });
  }, [page, searchParams]);

  useEffect(() => getList(), [getList]);

  useEffect(() => setParams(), [setParams]);

  return (
    <S.SearchLayout>
      <div className="title">
        <p className="selected">과목</p>
        <p>패스</p>
      </div>
      <div className="search-area">
        <SearchInputComponent />
        <FilterConatiner />
      </div>
    </S.SearchLayout>
  );
};

export default SearchContainer;
