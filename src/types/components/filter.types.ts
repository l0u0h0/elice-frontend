export interface FilterComponentProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface SearchInputComponentProps {
  keyword: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
