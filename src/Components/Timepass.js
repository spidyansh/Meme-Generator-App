import React, { useState } from "react";

export default function Timepass(props) {
  const [state, setstate] = useState("");

  function displayimg() {
    // console.log("hello")
    setstate(props.srcurl);
  }
  return (
    <>
      <div>
        <img src={props.srcurl} width="100px" onClick={displayimg}></img>
      </div>
      <div>
        <img src={state} width="300px"></img>
      </div>
    </>
  );
}
