import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Course } from '@/modules/shared/types'

export interface CoursesState {
  loading: boolean;
  courses: Course[];
  fetchCoursesError: boolean;
  addCourseError: boolean;
}

export const initialState: CoursesState = {
  loading: false,
  fetchCoursesError: false,
  addCourseError: false,
  courses: [],
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    fetchCoursesRequest: (state) => {
      state.loading = true
      state.fetchCoursesError = false
    },
    fetchCoursesSuccess: (state, action: PayloadAction<{ courses: Course[] }>) => {
      state.loading = false
      state.fetchCoursesError = false
      state.courses = action.payload.courses
    },
    fetchCoursesError: (state) => {
      state.loading = false
      state.fetchCoursesError = true
    },
    removeCourse: (state, action: PayloadAction<{ id: string }>) => {
      state.courses = [...state.courses.filter(course => course.id !== action.payload.id)]
    },
    addCourseRequest: (state, action: PayloadAction<{ playlistId: string }>) => {
        state.loading = true
        state.addCourseError = false
    },
    addCourseSuccess: (state, action: PayloadAction<{ course: Course }>) => {
        state.loading = false
        state.addCourseError = false
        state.courses = [...state.courses, action.payload.course]
    },
    addCourseError: (state) => {
        state.loading = false
        state.addCourseError = true
    },
  },
})

export const {
  fetchCoursesRequest,
  fetchCoursesSuccess,
  fetchCoursesError,
  removeCourse,
  addCourseRequest,
  addCourseSuccess,
  addCourseError,
} = coursesSlice.actions

export default coursesSlice.reducer 