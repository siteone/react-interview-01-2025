import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  coursesSelector,
  coursesLoadingSelector,
  fetchCoursesErrorSelector,
  addCourseErrorSelector,
} from '../selectors'

const withCoursesData = connect(
  createStructuredSelector({
    courses: coursesSelector,
    loading: coursesLoadingSelector,
    fetchCoursesError: fetchCoursesErrorSelector,
    addCourseError: addCourseErrorSelector,
  }),
)

export default withCoursesData
