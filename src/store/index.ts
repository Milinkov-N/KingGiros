import { combineReducers, createStore } from 'redux'
import reducers from './reducers'

const rootReducer = combineReducers(reducers)
const appStore = createStore(rootReducer)
// appStore.subscribe(() => setCartCookie(appStore.getState()))

export default appStore

export type RootState   = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch

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

// function setCartCookie(rootState: RootState) {
//   function setCartCookie(value: 'true' | 'false') {
//     try {
//       // document.cookie = `cartIsSet=${value}; Secure; Max-Age=3600; SameSite=strict;`
//         Cookies.set('cartIsSet', value, {
//         secure: true,
//         maxAge: 3600,
//         sameSite: 'strict'
//       })
      
//     } catch (e) {
//       console.warn(e)
//       return undefined
//     }
//   }

//   function setOrderCookie(value: boolean) {
//     try {
//       // document.cookie = `cartIsSet=${value}; Secure; Max-Age=3600; SameSite=strict;`
//         Cookies.set('orderIsSubbmitted', value, {
//         secure: true,
//         maxAge: 3600,
//         sameSite: 'strict'
//       })
      
//     } catch (e) {
//       console.warn(e)
//       return undefined
//     }
//   }

//   if (typeof document !== 'undefined') {
//     if (rootState.cartReducer.items.length > 0) {
//       setCartCookie('true')
//     } else {
//       setCartCookie('false')
//     }

//     setOrderCookie(rootState.appReducer.orderSubmitted)
//   }
// }