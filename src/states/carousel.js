import React, { useState } from 'react'
import { sculptureList } from '../components/data'



function Carousel() {
  
const [ index, setIndex] = useState(0)
const [showMore, setShowMore]  = useState(false)

let hasPrev = index > 0; 
let hasNext = index < sculptureList.length - 1


function handleClick(){
    if(hasNext){
        setIndex(index + 1)
    }
}

function handlePrev(){
    if (hasPrev){
        setIndex(index - 1)
    }
}

function handleShowDetails(){
    setShowMore(!showMore)
}

let sculpture = sculptureList[index]

  return (
    <>
      <button 
      onClick={handleClick}
      disabled={!hasNext}
      >
        Next
      </button>

      <button 
      onClick={handlePrev}
      disabled={!hasPrev}
      >
         Prev
      </button>

      <h2>
        <i>{sculpture.name} </i>
          by {sculpture.artist}
      </h2>

      <h3>
        ({index + 1 } of {sculptureList.length})
      </h3>
      <button onClick={handleShowDetails}>
         { showMore ? 'Hide' : 'Show'} Details
      </button>

      {showMore && <p>{sculpture.description}</p>}

      <img 
         src={sculpture.url}
         alt={sculpture.name}
      />
   
    </>
  )
}

export default Carousel