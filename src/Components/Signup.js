import React, { useState } from "react";

export default function Signup() {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    newsletter: true,
  });
  console.log(formdata);

  function handleclick(event) {
    setformdata((prevdata) => {
      return {
        ...prevdata,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Enter your Email"
          name="email"
          onChange={handleclick}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your Password"
          name="password"
          onChange={handleclick}
        /> <br />
        <input
          type="password"
          placeholder="ReEnter your Password"
          name="confirmpassword"
          onChange={handleclick}
        ></input><br />
        <input type="checkbox" name="newsletter" onChange={handleclick}>
        </input>
        <label htmlFor="newsletter">I want to join the newsletter</label>
        
      </form>
      <button>Submit</button>
    </div>
  );
}
