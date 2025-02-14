"use client";
import CoursesPage, { CoursesPageProps } from "./CoursesPage";
import { compose } from "recompose";
import withCoursesData from './HOC/withCoursesData'
import fetchCoursesOnMount from './HOC/fetchCoursesOnMount'

interface ContainerProps {}

const CoursesPageWithData = compose<CoursesPageProps, ContainerProps>(
  withCoursesData,
  fetchCoursesOnMount,
)(CoursesPage);

export default CoursesPageWithData;
