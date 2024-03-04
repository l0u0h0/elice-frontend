// components
import { useAtom } from "jotai";
import FilterComponent from "../components/search/FilterComponent";
// style
import * as S from "../styles/search/filter.style";
// Jotai
import { filterAtom } from "../jotai/course";

const FilterConatiner = () => {
  const [filter, setFilter] = useAtom(filterAtom);

  return (
    <S.FilterLayout>
      <div className="filter-row">
        <div className="row-title">
          <p>가격</p>
        </div>
        <div className="row-content">
          {filter.map((e, i) => (
            <FilterComponent
              name={e.label}
              isSelected={e.isSelected}
              onClick={() => {
                const temp = [...filter];
                temp[i].isSelected = !e.isSelected;
                setFilter(temp);
              }}
              key={`Filter-btn-${i}`}
            />
          ))}
        </div>
      </div>
    </S.FilterLayout>
  );
};

export default FilterConatiner;
