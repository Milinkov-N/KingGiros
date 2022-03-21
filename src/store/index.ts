import { combineReducers, createStore } from 'redux'
import reducers from './reducers'

// function saveToLocalStorage(state: object) {
//   if (typeof window !== 'undefined') {
//     try {
//       const serializedState = JSON.stringify(state)
//       localStorage.setItem('persistantState', serializedState)
//     } catch (e) {
//       console.warn(e)
//     }
//   } 
// }

// function loadFromLocalStorage() {
//   if (typeof window !== 'undefined') {
//     try {
//       const serializedState = localStorage.getItem('persistantState')
//       if (serializedState === null) return undefined

//       return JSON.parse(serializedState)
//     } catch (e) {
//       console.warn(e)

//       return undefined
//     }
//   }
// }

const rootReducer = combineReducers(reducers)
const appStore = createStore(rootReducer)
// appStore.subscribe(() => saveToLocalStorage(appStore.getState()))

export default appStore

export type RootState   = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch