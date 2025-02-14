import { connect } from 'react-redux'
import { compose } from 'recompose'
import Video, { VideoProps } from './Video'
import { Video as VideoType } from '../../types'
import { isCompletedSelector, isOpenSelector } from '../../selectors'
import { toggleVideoCompleted, toggleVideoOpen } from '../../slice'

interface ContainerProps {
  index: number
  toggleOpenCallback: (index: number) => void
  video: VideoType
}

const withCompleted = connect(
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

const withOpen = connect(
  (state, { video }: ContainerProps) => ({
    isOpen: isOpenSelector(state, video.id),
  }),
  (dispatch, { video, toggleOpenCallback, index }: ContainerProps) => ({
    toggleOpen: () => {
      console.log('Toggle video:', video.id)
      dispatch(toggleVideoOpen({ id: video.id }))
      toggleOpenCallback(index)
    },
  })
)

export default compose<VideoProps, ContainerProps>(
  withCompleted,
  withOpen
)(Video)
