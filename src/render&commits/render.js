 import React, { useState } from "react";


 export default function SecondForm() {
    const [isSent, setIsSent] = useState(false)
    const [message, setMessage] = useState('Hi!')
    const [number,setNumber] = useState(0)

    if (isSent){
        return <h1> Your message is on the way!</h1>
    }

    return(
      <><form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            setMessage(message);
        } }>

            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)} />
            <button type="submit">Send</button>


        </form>
        
        <button
            onClick={() => {
                setNumber(number + 5);
                setNumber(number + 1);
            } }
        >Increase the number
        </button></>
    )
 }