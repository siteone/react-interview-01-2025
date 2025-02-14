import get from 'lodash/fp/get'

export const coursesSelector = get('courses.courses')
export const coursesLoadingSelector = get('courses.loading')
export const fetchCoursesErrorSelector = get('courses.fetchCoursesError') 
export const addCourseErrorSelector = get('courses.addCourseError') 