import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Post from "./Post";
import {fetchPosts} from "../redux/actions";
import {Loader} from "./Loader";

export default () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.fetchedPosts)
  const appLoader = useSelector(state => state.app.loading)

  if (appLoader) {
    return (
      <Loader />
    )
  }

  if (!posts.length) {
    return <button
      className="btn btn-primary"
      onClick={() => dispatch(fetchPosts())}
    >Load posts</button>
  }

  return posts.map(post => <Post post={post} key={post.id}/>)
}
