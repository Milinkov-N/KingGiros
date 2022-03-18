import { CartActionCreators } from './cart'
import { AppActionCreators } from './app'
import { UserActionCreators } from './user'

const ActionCreators = {
  ...AppActionCreators,
  ...CartActionCreators,
  ...UserActionCreators
}

export default ActionCreators