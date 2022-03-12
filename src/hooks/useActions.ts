import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { AppDispatch } from 'src/store'
import { ActionCreators } from 'src/store/reducers'

export default function useActions() {
  const dispatch = useDispatch<AppDispatch>()

  return bindActionCreators(ActionCreators, dispatch)
}