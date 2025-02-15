import { memo } from 'react'
import Collapse from '@/components/Collapse'
import styles from './Video.module.scss'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import { Video as VideoType } from '@/modules/shared/types'

export interface VideoProps {
  video: VideoType;
  toggleCompleted: () => void;
  setCompleted: () => void;
  isCompleted: boolean;
  toggleOpen: () => void;
  isOpen: boolean;
  isDisplayed: boolean;
}

const Video: React.FC<VideoProps> = ({
  video,
  toggleCompleted,
  setCompleted,
  isCompleted,
  toggleOpen,
  isOpen,
}) => {
  return (
    <>
      {
        <div className={styles['video']}>
          <label className={styles['video__completed']}>
            <input
              className={styles['video__completed-checkbox']}
              type="checkbox"
              checked={isCompleted}
              onChange={toggleCompleted}
            />
          </label>
          <div className={styles['video__content']}>
            <h2 className={styles['video__title']}>{video.title}</h2>
            {isOpen && (
              <Collapse open={isOpen}>
                <VideoPlayer url={`https://www.youtube.com/watch?v=${video.id}`} onCompleted={setCompleted} />
                <p className={styles['video__description']}>{video.description}</p>
              </Collapse>
            )}
            <button onClick={toggleOpen} type="button">
              {isOpen ? 'show less' : 'show more'}
            </button>
          </div>
        </div>
      }
    </>
  )
}

export default memo(Video)
