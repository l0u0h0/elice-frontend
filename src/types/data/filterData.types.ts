export type getCourseArgsType = {
  filter_conditions: ReturnType<typeof JSON.stringify> | null;
  offset: number;
};
