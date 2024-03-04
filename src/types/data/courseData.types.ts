export type courseAtomType = {
  count: number;
  courses: [];
};

export type getCourseArgsType = {
  filter_conditions: ReturnType<typeof JSON.stringify> | null;
  offset: number;
};

export type courseInfoType = {
  title: string;
  class_type: number;
  short_description: string;
  image_file_url: string;
  logo_file_url: string;
  price: string;
};

export type courseListType = {
  title: string;
  type: string;
  text: string;
  image: string;
  logo: string;
  price: string;
};
