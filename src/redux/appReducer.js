import {HIDE_LOADER, SHOW_LOADER, ERROR_SHOW, ERROR_HIDE} from "./types";

const initialState = {
  loading: false,
  error: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {...state, loading: false}
    case ERROR_SHOW:
      return {...state, alert: action.payload}
    case ERROR_HIDE:
      return {...state, alert: null}
    default: return state
  }
}
