"use client";
import { compose } from "recompose";
import CoursesListItem, { CoursesListItemProps } from "./CoursesListItem";
import withCoursesData from "../../HOC/withCoursesData";
import { removeCourse } from "../../slice";
import { connect } from "react-redux";
import { Course } from "@/modules/shared/types";

interface ContainerProps {
  id: string;
  course: Course;
}

const withRemoveItem = connect(
  () => ({}),
  (dispatch, { id }: ContainerProps) => ({
    onRemoveCourse: () => dispatch(removeCourse({ id })),
  })
)

const CoursesListItemWithData = compose<CoursesListItemProps, ContainerProps>(
  withCoursesData,
  withRemoveItem
)(CoursesListItem);

export default CoursesListItemWithData;