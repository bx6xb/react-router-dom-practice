import { combineReducers, legacy_createStore } from "redux"
import { brandsReducer } from "./brandsReducer"

const rootReducer = combineReducers({
  brands: brandsReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof store.getState>

// @ts-ignore
window.state = store.getState()
