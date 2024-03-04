export type courseAtomType = {
  count: number;
  courses: [];
};

export type getCourseArgsType = {
  filter_conditions: ReturnType<typeof JSON.stringify> | null;
  offset: number;
};
