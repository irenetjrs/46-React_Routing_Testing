import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const SinglePost = () => {
      const {id} = useParams();
      const [posts, setPosts] = useState(null);

      useEffect(()=>{
         fetch(`https://dummyjson.com/posts/${id}`)
         .then(res => res.json())
         .then(data => setPosts(data))
      },[id])
   return (
      <div>
         {posts && (
               <>
               <h1>{posts.title}</h1>
               <p>{posts.body}</p>
               </>
         )}
      </div>)}
export default SinglePost;