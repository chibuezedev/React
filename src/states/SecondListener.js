import React from 'react'

function Button ({onClick, children}) {
    return (
        <button onClick={onClick}>
             {children}
        </button>
    )
}

function PlayButton({movieName}) {
    function handleClick(){
        alert(`Playing ${movieName}`)
    }

    return(
        <Button onClick={handleClick}>
           Play "{movieName}"
        </Button>
    )
}




function SecondListener() {
  return (
    <div>
      <PlayButton  movieName="Ed Sharren's Boat"/>
       <uploadMovie />
    </div>
  )
}

export default SecondListener