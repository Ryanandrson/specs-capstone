import React, { useState } from "react";

const Timer = ({}) => {
    const [seconds, setSeconds] = useState(0)
    const [paused, setPaused] = useState(false)


    const startTimer = () => {

        setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)

        document.querySelector('.start-button').setAttribute("disabled", "true")
        document.querySelector('.stop-button').removeAttribute("disabled")



    }

    const stopTimer = () => {
        clearInterval(setSeconds(0))

        if (!!document.querySelector('#counter')){
            document.querySelector('#counter').remove()
        }
        document.querySelector('.stop-button').setAttribute("disabled", "true")
        document.querySelector('.start-button').removeAttribute("disabled")
        
    }

    const currentCount = seconds

    return (

        <div className="timer">
            <button className="start-button" onClick={startTimer}>start</button>
            <button className="stop-button" onClick={stopTimer}>stop</button>
            <p id="counter">{currentCount}</p>
        </div>
    )


}



export default Timer;