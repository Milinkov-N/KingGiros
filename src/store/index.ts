import { combineReducers, createStore } from 'redux'
import reducers from './reducers'
import { CartState } from './reducers/cart'

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

function setCartCookie(cartState: CartState) {
  console.log(cartState)

  function setCookie(value: 'true' | 'false') {
    try {
      document.cookie = `cartIsSet=${value}; Secure; Max-Age=3600; SameSite=strict;`
    } catch (e) {
      console.warn(e)
      return undefined
    }
  }

  if (typeof document !== 'undefined') {
    if (cartState.items.length > 0) {
      setCookie('true')
    } else {
      setCookie('false')
    }
  }
}

const rootReducer = combineReducers(reducers)
const appStore = createStore(rootReducer)
appStore.subscribe(() => setCartCookie(appStore.getState().cartReducer))

export default appStore

export type RootState   = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch