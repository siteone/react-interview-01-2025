import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchCoursesRequest } from '@/modules/courses/slice'

interface InitProps {
  initialize: () => void;
}

const withInitialize = connect(
  null,
  (dispatch) => ({
    initialize: () => dispatch(fetchCoursesRequest()),
  })
)

const initializeOnMount = lifecycle<InitProps, {}, {}>({
  componentDidMount() {
    this.props.initialize()
  },
})

export default compose(
  withInitialize,
  initializeOnMount,
) 