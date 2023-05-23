import React from 'react'


function handleClick(){

const changeStyle = document.body.style

if(changeStyle.backgroundColor === 'black'){
    changeStyle.backgroundColor ='black'
} else{
    changeStyle.backgroundColor = 'white'
}

}
function SwitchLights() {
  return (
    <button onClick={handleClick()}>
        Toggle Light
    </button>
  )
}

export default SwitchLights