import { combineReducers, legacy_createStore } from "redux"
import { brandsReducer } from "./brandsReducer"
import { TypedUseSelectorHook } from "react-redux"
import { useSelector } from "react-redux"

const rootReducer = combineReducers({
  brands: brandsReducer,
})

export const store = legacy_createStore(rootReducer)
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// types
export type AppRootStateType = ReturnType<typeof store.getState>
