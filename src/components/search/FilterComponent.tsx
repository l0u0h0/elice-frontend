// style
import * as S from "../../styles/search/filter.style";
// type
import { FilterComponentProps } from "../../types/components/filter.types";

const FilterComponent: React.FC<FilterComponentProps> = ({
  name,
  isSelected,
  onClick,
}) => {
  return (
    <S.FilterButton $isSelected={isSelected} onClick={onClick}>
      {name}
    </S.FilterButton>
  );
};

export default FilterComponent;
