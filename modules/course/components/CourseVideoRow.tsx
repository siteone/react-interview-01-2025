import React from 'react';
import VideoContainer from './Video/VideoContainer';
import { Video } from '../types';

interface CourseVideoRowProps {
  index: number;
  style: React.CSSProperties;
  video: Video;
  toggleOpenCallback: (index: number) => void;
}

const CourseVideoRow: React.FC<CourseVideoRowProps> = ({ index, style, video, toggleOpenCallback }) => (
  <div style={style}>
    <VideoContainer
      key={video.id}
      index={index}
      video={video}
      toggleOpenCallback={toggleOpenCallback}
    />
  </div>
);

export default CourseVideoRow; 