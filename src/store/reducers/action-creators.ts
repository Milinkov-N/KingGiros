import { CartActionCreators } from './cart'
import { AppActionCreators } from './app'

const ActionCreators = {
  ...AppActionCreators,
  ...CartActionCreators
}

export default ActionCreators