import { put, takeLatest, call, delay } from 'redux-saga/effects'
import { fetchCoursesError, fetchCoursesSuccess, fetchCoursesRequest, addCourseSuccess, addCourseError, addCourseRequest } from './slice'
import { Course } from '@/modules/shared/types'
import { SagaIterator } from 'redux-saga'
import { PayloadAction } from '@reduxjs/toolkit'
import ApiService from '@/services/ApiService'

export function* fetchCoursesSaga(): SagaIterator {
  try {
    const mockCourses: Course[] = [
      {
        id: 'PLYPjPMiw3_YsVockWfuuhoP86YPDUXp4f',
        title: 'Java Programming',
        description: 'Learn Java programming from basics to advanced',
        thumbnail: 'https://i.ytimg.com/vi/Dxpdo9BUGss/mqdefault.jpg'
      },
      {
        id: 'PLpcSpRrAaOaoIqHQddZOdbRrzr5dJtgSs', 
        title: '10 Days of JavaScript',
        description: 'Complete JavaScript course in 10 days',
        thumbnail: 'https://i.ytimg.com/vi/dc-2t26Vuhs/mqdefault.jpg'
      }
    ]
    yield delay(1000)

    yield put(fetchCoursesSuccess({ courses: mockCourses }))
  } catch (err) {
    console.error(err)
    yield put(fetchCoursesError())
  }
}

export function* addCourseSaga(action: PayloadAction<{ playlistId: string }>): SagaIterator {
  try {
    const { playlistId } = action.payload
    const api = new ApiService()
    const response = yield call([api, 'getPlaylist'], playlistId)
    const data = yield call([response, 'json'])
    const { playlist, playlistVideos } = data


    yield put(addCourseSuccess({ course: {
      id: playlistId,
      title: playlist.localized.title,
      description: playlist.description,
      thumbnail: playlistVideos[0].thumbnails.medium.url
    } }))
  } catch (err) {
    console.error(err)
    yield put(addCourseError())
  }
}


export default function* coursesSaga(): SagaIterator {
  yield takeLatest(fetchCoursesRequest, fetchCoursesSaga)
  yield takeLatest(addCourseRequest, addCourseSaga)
} 