
import React from 'react'

function Button({ onClick, children}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

function Toolbar ({ onPlayMovie, onUploadMovie}){
    return (
        <><Button onClick={onPlayMovie}>
            Play Movie
        </Button>
        
        <Button onClick={onUploadMovie}>
           Upload Movie
        </Button></>
    )
}

export default function Listener() {
  return (
     <Toolbar 
          onPlayMovie={() => alert("Movie played") }
          onUploadMovie={() => alert("Movie Uploaded")}
     />
  )
}






