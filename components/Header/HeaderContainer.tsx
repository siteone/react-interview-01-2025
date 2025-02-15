'use client'

import { connect } from 'react-redux'
import Header from './Header'
import { coursesSelector } from '@/modules/courses/selectors'

const mapStateToProps = (state: any) => ({
  courses: coursesSelector(state),
})

export default connect(mapStateToProps)(Header) 