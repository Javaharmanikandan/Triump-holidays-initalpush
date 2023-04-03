import React, { useEffect, useRef, useState } from 'react'

function TimerElement(props) {
    const[time, setTime] = useState(props.seconds);
    const[linkState, setLink] = useState(false);
    const TimerId = useRef();

    useEffect(()=>{

        if(time ===  0)  return(setLink(true));
        TimerId.current = setTimeout(()=>{
            var t = time - 1;
            setTime(t);

        },1000)
        return ()=> clearInterval(TimerId.current)

    },[time])

  return (
    <>
      {linkState ? 
      <p className='text-sm text-black/40'>Resend OTP</p>
      :
      <p className='text-sm text-black/40'>00:{time}</p>
      }
    </>
  )
}

export default TimerElement