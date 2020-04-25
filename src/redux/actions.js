import {
  CREATE_POST,
  ERROR_HIDE,
  ERROR_SHOW,
  HIDE_LOADER,
  REQUEST_POSTS,
  SHOW_LOADER,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: ERROR_SHOW,
      payload: text,
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert() {
  return {
    type: ERROR_HIDE
  }
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS
  }
}
