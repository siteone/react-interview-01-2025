import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchCoursesRequest } from '../slice'

interface FetchCoursesProps {
  fetchCoursesRequest: () => void;
}

const withFetchCoursesRequest = connect(
  null,
  (dispatch) => ({
    fetchCoursesRequest: () => {
      dispatch(fetchCoursesRequest())
    },
  }),
)

const fetchCoursesOnMount = lifecycle<FetchCoursesProps, FetchCoursesProps, {}>({
  componentDidMount() {
    this.props.fetchCoursesRequest()
  },
})

export default compose(
  withFetchCoursesRequest,
  fetchCoursesOnMount,
)
