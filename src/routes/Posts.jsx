import classes from './Posts.module.css';
import AddPost from '../components/Post/AddPost';
import Modal from '../components/Modal/Modal';
import PostList from '../components/Post/PostList';
import { useState, useEffect } from 'react';
function Posts() {
  const arrayData = [
    { author: "Author 1", description: "First post description" },
    { author: "Author 2", description: "Second post description" }
  ];

  const [posts, setPosts] = useState(arrayData);
  return (
    <main className={classes.main}>
      <PostList postsList={posts} />
    </main>
  )
}

export default Posts
