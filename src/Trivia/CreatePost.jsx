import React, {useState } from 'react'

function CreatePost() {

const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [posts, setPosts] = useState([])

const addPost = fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
    userId: Math.random().toString(36).slice(3),
  }),
    headers: { 'Content-Type': 'application/json' },
}).then(response => response.json())
.then(data => {
    setPosts((posts) => [data, ...posts])
    setTitle('')
    setBody('')
}).catch(err => {
    console.log(err)
})





function handleSummit(e){
  e.preventDefault()
 addPost(title, body)
}

  return (
    <div>
       <form onSubmit={handleSummit()}>
           <input value={title}
            onChange={e => setTitle(e.target.value)}
           > </input>
        <textarea
           name="" className="form-control" id="" cols="10" rows="8" 
           value={body} 
           onChange={e => setBody(e.target.value)}
           >
        </textarea>
           <button type='submit'>Add</button>
       </form>
    </div>
  )
}

export default CreatePost