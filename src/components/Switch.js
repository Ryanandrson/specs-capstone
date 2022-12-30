import React, { state, useState } from "react";
import "./Switch.css";
import cx from "classnames";
import Song from "../assets/brownNoise.wav";
// import { Howl } from "howler";



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
            // Pause the song if it is playing
            audioObj.audio.pause();
          } else {
      
            // Play the song if it is paused
            audioObj.audio.play();
          }
      
        //   Change the state of song
        //   this.setState({ isPlaying: !isPlaying });
        audioObj.isPlaying = !isPlaying
    };
    
    // const [song, useSound] = useState(false);

    const slidercx = cx('slider' , {
        'rounded': rounded
    })
   
    return <label className="switch"  >
        <input type="checkbox" onChange={playPause}/>
        <span className={slidercx} />
    </label>;

    
    
}

export default Switch;