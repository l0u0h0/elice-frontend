export interface ListCardComponentProps {
  title: string;
  type: string | null;
  text: string;
  price: string;
  image: string | null;
  logo: string | null;
  discount: string;
  discount_rate: string | null;
}

export interface PaginationComponentProps {
  prev: boolean;
  next: boolean;
  cur: number;
  pageList: number[] | null;
  changePage: (offset: number) => void;
}
