import React from 'react'
import { VariableSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import Spinner from '@/components/Spinner'
import Container from '@/components/Container'
import VideoFilterContainer from './components/VideoFilter'
import CourseVideoRow from './components/CourseVideoRow'
import { Video } from './types'

export interface CoursePageProps {
  title: string
  loading: boolean
  error: string
  playlistVideos: Video[]
}

class CoursePage extends React.PureComponent<CoursePageProps> {
  listRef = React.createRef<List>()


  getItemSize = (index: number) => {
    const { playlistVideos } = this.props
    return playlistVideos[index].open === true ? 540 : 140
  }

  toggleOpenCallback = (index: number) => {
    this.listRef.current?.resetAfterIndex(index)
  }

  render() {
    const { title, loading, error, playlistVideos } = this.props

    return (
      <>
        {/*this.renderMeta()*/}
        <article>
          <Container>
            <VideoFilterContainer />
            <h1>{title}</h1>
            {!loading && playlistVideos.length > 0 && (
              <div style={{ height: '60vh' }}>
                <AutoSizer>
                  {({ height, width }) => (
                    <List
                      ref={this.listRef}
                      height={height}
                      itemCount={playlistVideos.length}
                      itemSize={this.getItemSize}
                      width={width}
                    >
                      {({ index, style }) => (
                        <CourseVideoRow
                          index={index}
                          style={style}
                          video={playlistVideos[index]}
                          toggleOpenCallback={this.toggleOpenCallback}
                        />
                      )}
                    </List>
                  )}
                </AutoSizer>
              </div>
            )}
            {loading && <Spinner />}
            {error && 'Error loading playlist'}
          </Container>
        </article>
      </>
    )
  }
}

export default CoursePage
