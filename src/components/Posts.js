import React from 'react'
import PropTypes from 'prop-types'
import Post from "./Post"
import { useGetPosts } from "../utils/useRequest"


const Posts = props => {
  const { posts, error } = useGetPosts("/posts")

  if (error) return <h1>Something went wrong!</h1>
  if (!posts) return <h1>Loading...</h1>

  return (
    <div className="container">
          <h1>My Posts</h1>
          {posts.slice(0, 5).map(post => (
            <Post post={post} key={post.id} />
          ))}
        </div>
  )
}

Posts.propTypes = {

}

export default Posts
