import ReactPlayer from "react-player";
import styles from './VideoPlayer.module.scss'

type VideoPlayerProps = {
  url: string;
  onCompleted: () => void;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, onCompleted }) => {
  return <div className={styles['video-player']}>
    <ReactPlayer url={url} controls width='100%' height="100%" onEnded={onCompleted} />
    </div>;
};

export default VideoPlayer;
