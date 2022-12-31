import React, { state, useState } from "react";
import "./Switch.css";
import cx from "classnames";
import Song from "../assets/brownNoise.wav";




const Switch = ({rounded = false}) => {

    let audioObj = {
        audio: new Audio(Song),
        isPlaying: false,
    };

    function playPause (){
        let isPlaying = audioObj.isPlaying;
        console.log(isPlaying)
        console.log("hit")

        if (isPlaying) {
            
            audioObj.audio.pause();
          } else {
      
            
            audioObj.audio.play();
          }
      
      
        audioObj.isPlaying = !isPlaying
    };
    


    const slidercx = cx('slider' , {
        'rounded': rounded
    })
   
    return <label className="switch"  >
        <input type="checkbox" onChange={playPause}/>
        <span className={slidercx} />
    </label>;

    
    
}

export default Switch;