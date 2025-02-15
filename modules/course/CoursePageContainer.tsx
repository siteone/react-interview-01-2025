"use client";
import CoursePage, { CoursePageProps } from "./CoursePage";
import withPlaylistData from "./HOC/withPlaylistData";
import fetchPlaylistOnMount from "./HOC/fetchPlaylistOnMount";
import { compose } from "recompose";

interface ContainerProps {
  playlistId: string;
}

const CoursePageWithData = compose<CoursePageProps, ContainerProps>(
  fetchPlaylistOnMount,
  withPlaylistData
)(CoursePage);

export default CoursePageWithData;
