import React from 'react'

function Item ({name, isPacked}){
   return (
    <li>
        {isPacked ? name +  '✔'  : name}
    </li>
   )
    
}


function PackingList() {
  return (
    <div>
        <h2> Sally Ride's Packing List</h2>
        <ul>
            <Item
              isPacked={true}
              name="Helmet Salver"
            />
            <Item
              isPacked={true}
              name="Helmet Salver"
            />
            <Item
              isPacked={false}
              name="Photo of Tom"
            />
        </ul>
    </div>
  )
}

export default PackingList