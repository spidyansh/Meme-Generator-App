import React, { useState } from "react";
import Imgdata from "./Imgdata";

export default function Hero() {
  const [state, setstate] = useState("");

  function handleclick() {
    const memeimg = Imgdata;
    const randomnumb = Math.floor(Math.random() * memeimg.length);
    setstate(memeimg[randomnumb].url)
    // console.log(randomnumb);
    // console.log(memeimg)
    // console.log(setstate)
    console.log(state)
  }

  return (
    <>
      <div>
        <input type="text" placeholder="Enter upper text"></input>
        <input type="text" placeholder="Enter lower text"></input>
        <button onClick={handleclick}>Get a random image</button><br></br>
        <img src={state} width="200px"></img>
      </div>
    </>
  );
}
