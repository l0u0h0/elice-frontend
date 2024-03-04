// type
import axios from "axios";
import { getCourseArgsType } from "../types/data/courseData.types";
// Axios
import instance from "./api";

const COURSE_URL = process.env.REACT_APP_COURSE_URL;

export const getCourseList = async (args: getCourseArgsType) => {
  try {
    // const response = await instance.get(
    //   `${COURSE_URL}${
    //     args.filter_conditions
    //       ? `?filter_conditions=${args.filter_conditions}&`
    //       : `?`
    //   }offset=${args.offset}&count=20`
    // );
    const response = await instance.get(
      `https://api-rest.elice.io/org/academy/course/list/?filter_conditions=%7B%22%24and%22%3A%5B%7B%22title%22%3A%22%25%25%22%7D%2C%7B%22%24or%22%3A%5B%7B%22status%22%3A2%7D%2C%7B%22status%22%3A3%7D%2C%7B%22status%22%3A4%7D%5D%7D%2C%7B%22%24or%22%3A%5B%7B%22enroll_type%22%3A0%2C%22is_free%22%3Atrue%7D%2C%7B%22enroll_type%22%3A0%2C%22is_free%22%3Afalse%7D%5D%7D%2C%7B%22is_datetime_enrollable%22%3Atrue%7D%5D%7D&sort_by=created_datetime.desc&offset=0&count=12`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    }
  }
};
