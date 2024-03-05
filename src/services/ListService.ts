// type
import { getCourseArgsType } from "../types/data/courseData.types";
// Axios
import axios from "axios";
import instance from "./api";

const COURSE_URL = process.env.REACT_APP_COURSE_URL;

export const getCourseList = async (args: getCourseArgsType) => {
  try {
    const response = await instance.get(
      `${COURSE_URL}${
        args.filter_conditions
          ? `?filter_conditions=${args.filter_conditions}&`
          : `?`
      }offset=${args.offset}&count=20`
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios 에러 : ${error.message}`);
    }
  }
};
