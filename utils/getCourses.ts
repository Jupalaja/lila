import { FOUNDER_COURSES, NON_FOUNDER_COURSES } from "@/constants";

export function getCourses(grade: "FOUNDER" | "NON_FOUNDER") {
  switch (grade) {
    case "FOUNDER":
      return FOUNDER_COURSES;
    case "NON_FOUNDER":
    default:
      return NON_FOUNDER_COURSES;
  }
}
