import { useEffect, useState } from 'react'
import type { IPost } from './types'
import { PostCard } from './components/PostCard/PostCard';
import styles from './app.module.css'
import { BASE_URL } from './constants';
import { CreatePost as CreatPostType } from './components/CreatePost/CreatePost'

function App() {

  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(()=> {
    const getPosts = async() => {
      try{
        const response = await fetch(`${BASE_URL}/posts`);
        if (!response.ok) {
          throw new Error('Error on getting posts!');
        }
        const postData = await response.json();
        setPosts(postData)  
      } catch (e) {
          console.error('error ->', e)
      }
    }
    getPosts()
  },[])

  return (
    <div className={styles.wrapper}>
      <CreatPostType/>
      {posts.map((post)=> (
        <PostCard post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default App
