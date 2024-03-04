export interface ListCardComponentProps {
  title: string;
  type: string | null;
  text: string;
  price: string;
  image: string | null;
  logo: string | null;
}

export interface PaginationComponentProps {
  prev: boolean;
  next: boolean;
  cur: number;
  changePage: (offset: number) => void;
}
