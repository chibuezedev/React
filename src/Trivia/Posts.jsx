import React, {useEffect, useState} from 'react'
// import CreatePost from './CreatePost'



function Posts() {

const [posts, setPosts] = useState([])
const [showBody, setShowBody] = useState(false)

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.json())
    .then((data) => {
        setPosts(data)
    })
    .catch((error) => console.log(error))
})

const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
     method: 'DELETE'
    })
    .then(response => {
     if(response.status === 200) {
         setPosts(
            posts.filter((post) => {
            console.log('Deleted')
            return post.id === id
         }))
     }else {
         return
     }
    })
    
 }
function handleShowBody(){
  setShowBody(true)
}



 return (
    <div>
     {posts.map((post) => {
    return (
     <div key={post.id}>
       <div>
            <h1>{post.title}</h1>
            <p onClick={() => handleShowBody()}>{post.body}</p>
            <div className="button">
            <div className="delete-btn" onClick={() => deletePost(post.id)}>Delete</div>
        </div> 
       </div>
    </div>
     )})}

     {/* <CreatePost/> */}

    </div>
  )
}

export default Posts