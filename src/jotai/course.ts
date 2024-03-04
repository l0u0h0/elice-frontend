import { atom } from "jotai";
import { courseAtomType } from "../types/data/courseData.types";

export const offsetAtom = atom(0);

export const courseAtom = atom<courseAtomType | null>(null);

export const filterAtom = atom([
  { name: "무료", isSelected: false },
  { name: "유료", isSelected: false },
]);
