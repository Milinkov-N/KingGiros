import { combineReducers, createStore } from 'redux'
import reducers from './reducers'

const rootReducer = combineReducers(reducers)
const appStore = createStore(rootReducer)

export default appStore

export type RootState   = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch