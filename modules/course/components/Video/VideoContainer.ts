import { connect } from 'react-redux'
import { compose } from 'recompose'
import Video, { VideoProps } from './Video'
import { Video as VideoType } from '@/modules/shared/types'
import { isCompletedSelector, isOpenSelector } from '../../selectors'
import { toggleVideoCompleted, toggleVideoOpen, setVideoCompleted } from '../../slice'

interface ContainerProps {
  index: number
  toggleOpenCallback: (index: number) => void
  video: VideoType
}

const withToggleCompleted = connect(
  (state, { video }: ContainerProps) => ({
    isCompleted: isCompletedSelector(state, video.id),
  }),
  (dispatch, { video, toggleOpenCallback, index }: ContainerProps) => ({
    toggleCompleted: () => {
      dispatch(toggleVideoCompleted({ id: video.id }))
      toggleOpenCallback(index)
    },
  })
)

const withCompleted = connect(
  (state, { video }: ContainerProps) => ({
    isCompleted: isCompletedSelector(state, video.id),
  }),
  (dispatch, { video, toggleOpenCallback, index }: ContainerProps) => ({    
    setCompleted: () => {
      dispatch(setVideoCompleted({ id: video.id }))
      toggleOpenCallback(index)
    },
  })
)

const withOpen = connect(
  (state, { video }: ContainerProps) => ({
    isOpen: isOpenSelector(state, video.id),
  }),
  (dispatch, { video, toggleOpenCallback, index }: ContainerProps) => ({
    toggleOpen: () => {
      dispatch(toggleVideoOpen({ id: video.id }))
      toggleOpenCallback(index)
    },
  })
)

export default compose<VideoProps, ContainerProps>(
  withToggleCompleted,
  withCompleted,
  withOpen
)(Video)
