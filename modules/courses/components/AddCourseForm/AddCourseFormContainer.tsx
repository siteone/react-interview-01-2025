"use client";
import { compose } from "recompose";
import AddCourseForm, { AddCourseFormProps } from "./AddCourseForm";
import withCoursesData from "../../HOC/withCoursesData";
import { addCourseRequest, CoursesState } from "../../slice";
import { connect } from "react-redux";
import { addCourseErrorSelector } from "../../selectors";



const withAddCourse = connect(
  (state) => ({}),
  (dispatch) => ({
    onAddCourse: (playlistId: string) => dispatch(addCourseRequest({ playlistId })),
  })
)

const withAddCourseError = connect(
  (state: CoursesState) => ({
    error: addCourseErrorSelector(state)
  })
)

const AddCourseFormWithData = compose<AddCourseFormProps, {}>(
  withCoursesData,
  withAddCourse,
  withAddCourseError
)(AddCourseForm);

export default AddCourseFormWithData;