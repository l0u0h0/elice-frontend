// style
import * as S from "../../styles/search/filter.style";
// type
import { FilterComponentProps } from "../../types/components/filter.types";

const FilterComponent: React.FC<FilterComponentProps> = ({ name }) => {
  return (
    <S.FilterButton onClick={() => console.log(name)}>{name}</S.FilterButton>
  );
};

export default FilterComponent;
