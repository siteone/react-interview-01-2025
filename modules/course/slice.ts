import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Video } from './types'

export interface CoursePageState {
  loading: boolean;
  error: boolean;
  playlistVideos: Video[];
  title: string;
  filterValue: 'all' | 'completed' | 'not-completed';
}

export const initialState: CoursePageState = {
  loading: false,
  error: false,
  playlistVideos: [],
  title: '',
  filterValue: 'all',
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    fetchPlaylistRequest: (state, action: PayloadAction<{ playlistId: string }>) => {
      state.loading = true
      state.error = false
    },
    fetchPlaylistSuccess: (state, action: PayloadAction<{ playlistVideos: Video[]; title: string }>) => {
      const { playlistVideos, title } = action.payload
      state.loading = false
      state.error = false
      state.playlistVideos = playlistVideos
      state.title = title
    },
    fetchPlaylistError: (state) => {
      state.loading = false
      state.error = true
    },
    toggleVideoCompleted: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload
      state.playlistVideos = state.playlistVideos.map(video => {
        if (video.id === id) {
          return { ...video, completed: !video.completed }
        }
        return video
      })
    },
    toggleVideoOpen: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload
      state.playlistVideos = state.playlistVideos.map(video => {
        if (video.id === id) {
          return { ...video, open: !video.open }
        }
        return video
      })
    },
    setVideoFilter: (state, action: PayloadAction<{ filterValue: CoursePageState['filterValue'] }>) => {
      const { filterValue } = action.payload
      state.filterValue = filterValue
    },
  },
})

export const {
  fetchPlaylistRequest,
  fetchPlaylistSuccess,
  fetchPlaylistError,
  toggleVideoCompleted,
  toggleVideoOpen,
  setVideoFilter,
} = playlistSlice.actions

export default playlistSlice.reducer
