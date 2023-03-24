import { createStore } from "redux"
import { ADD, ADD_TO_WISHLIST, REMOVE } from "./components/actions"

const INITIAL_STATE = { cart: 0, wishlist: [] }

//Reducer function
const storeReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ADD) {
    return { cart: state.cart + 1, wishlist: state.wishlist }
  }

  if (action.type === REMOVE) {
    return { cart: state.cart - 1, wishlist: state.wishlist }
  }

  if (action.type === ADD_TO_WISHLIST) {
    return { cart: state.cart, wishlist: [...state.wishlist, action.data] }
  }

  return state
}

const store = createStore(storeReducer)

export default store
