import { QuestionProps } from "@/types";
import classNames from "classnames";
import {
  NameInput,
  CourseInput,
  SchoolInput,
  Intro,
  PhoneInput,
  GradeInput,
  DayInput,
  TimeInput,
  Outro,
  KindInput,
  AddressInput
} from "./index";
import styles from "./Question.module.css";
import { TopicInput } from "./10-TopicInput";

export function Question({
  inView,
  inViewSlide,
  outView,
  outViewSlide,
  isRendered,
  type,
}: QuestionProps) {

  return (
    <div
      className={classNames(styles["question-box"], {
        [styles["slide-out"]]: outView,
        [styles["slide-in"]]: inView,
        [styles["out-view__up"]]: outViewSlide === "up",
        [styles["out-view__down"]]: outViewSlide === "down",
        [styles["in-view__up"]]: inViewSlide === "up",
        [styles["in-view__down"]]: inViewSlide === "down",
        [styles["rendered"]]: isRendered,
      })}
    >
      {type === "intro" && <Intro />}
      {type === "name" && <NameInput />}
      {type === "school" && <SchoolInput />}
      {type === "grade" && <GradeInput />}
      {type === "course" && <CourseInput />}
      {type === "day" && <DayInput />}
      {type === "time" && <TimeInput />}
      {type === "kind" && <KindInput />}
      {type === "phone" && <PhoneInput />}
      {type === "address" && <AddressInput />}
      {type === "topic" && <TopicInput />}
      {type == "outro"  && <Outro />}

    </div>
  );
}
