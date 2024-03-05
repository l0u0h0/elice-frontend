// Jotai
import { atom } from "jotai";
// type
import { courseAtomType } from "../types/data/courseData.types";
import { filterDataType } from "../types/data/filterData.types";

export const offsetAtom = atom(0);

export const courseAtom = atom<courseAtomType | null>(null);

export const filterAtom = atom<filterDataType[] | null>(null);
