import React, { useState } from 'react'


function Form() {
    
const [firstName, setFirstName] = useState('')

const [lastName, setLastName] = useState('')


    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    
    function handleLastName(e){
        setLastName(e.target.value);
    }
    
    
    function handleRest(){
        setFirstName('');
        setLastName('')
    }


  return (
    <form  onSubmit={e => {
        e.preventDefault()
    }}>
        <input 
          placeholder='First Name'
          value={firstName}
          onChange={handleFirstName}
        />

       <input 
          placeholder='Last Name'
          value={lastName}
          onChange={handleLastName}
        />

        <h1>Hi {firstName} {lastName}</h1>
        <button 
          onClick={handleRest}
        >Reset</button>
    </form>
  )
}

export default Form