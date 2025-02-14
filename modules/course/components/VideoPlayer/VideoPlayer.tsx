import ReactPlayer from "react-player";
import styles from './VideoPlayer.module.scss'

type VideoPlayerProps = {
  url: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return <div className={styles['video-player']}>
    <ReactPlayer url={url} controls width='100%' height="100%" />
    </div>;
};

export default VideoPlayer;
