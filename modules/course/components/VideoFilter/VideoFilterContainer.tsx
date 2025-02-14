import VideoFilter from './VideoFilter'
import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'
import { videoFilterSelector } from '../../selectors.js'
import { setVideoFilter } from '../../slice'
import { FilterValue } from '@/modules/shared/types'

type FilterProps = {
  filters: Array<{
    onFilterSet: () => void;
    name: string;
    active: boolean;
  }>;
}

type FilterContainerProps = {
  videoFilter: string;
  setVideoFilter: (value: { filterValue: FilterValue }) => void;
}

const withFilterState = connect(
  state => ({
    videoFilter: videoFilterSelector(state),
  }),
  dispatch => ({
    setVideoFilter: (filterValue: { filterValue: FilterValue }) => {
      dispatch(setVideoFilter(filterValue))
    },
  }),
)

const withFilters = withProps<FilterProps, FilterContainerProps>(({ setVideoFilter, videoFilter }: FilterContainerProps) => {
  return {
    filters: [
      {
        onFilterSet: () => {
          setVideoFilter({ filterValue: 'all' })
        },
        name: 'All',
        active: videoFilter === 'all',
      },
      {
        onFilterSet: () => {
          setVideoFilter({ filterValue: 'completed' })
        },
        name: 'Completed',
        active: videoFilter === 'completed',
      },
      {
        onFilterSet: () => {
          setVideoFilter({ filterValue: 'not-completed' })
        },
        name: 'Not completed',
        active: videoFilter === 'not-completed',
      },
    ],
  }
})

export default compose<FilterProps, {}>(
  withFilterState,
  withFilters,
)(VideoFilter)
