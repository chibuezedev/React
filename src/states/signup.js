import React from 'react'

function Signup() {
  return (
    <form onSubmit={e => {
        e.preventDefault()
        alert("Submitted")
    }}>
         <input />
        <button>Send</button>
    </form>
  )
}

export default Signup