import { atom } from "jotai";
import { courseAtomType } from "../types/data/courseData.types";
import { filterDataType } from "../types/data/filterData.types";

export const offsetAtom = atom(0);

export const courseAtom = atom<courseAtomType | null>(null);

export const filterAtom = atom<filterDataType[] | null>(null);

/**
[
  { label: "무료", isSelected: false, enroll_type: 0, is_free: true },
  { label: "유료", isSelected: false, enroll_type: 0, is_free: false },
  { label: "구독", isSelected: false, enroll_type: 4, is_free: null },
]
 */
