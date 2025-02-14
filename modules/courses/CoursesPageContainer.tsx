"use client";
import CoursesPage, { CoursesPageProps } from "./CoursesPage";
import { compose } from "recompose";
import withCoursesData from './HOC/withCoursesData'

interface ContainerProps {}

const CoursesPageWithData = compose<CoursesPageProps, ContainerProps>(
  withCoursesData,
)(CoursesPage);

export default CoursesPageWithData;
