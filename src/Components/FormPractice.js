import React, { useState } from "react";

export default function FormPractice() {
  //     const [name, setname] = useState("")
  //     console.log(name)

  //     function HandleEvent(event){
  //         setname(event.target.value)
  //     }
  //   return (
  //     <div>
  //         <form>
  //             <input type="text" placeholder='Enetr your Name' onChange={HandleEvent}/>
  //         </form>
  //     </div>
  //   )

  const [fullname, setname] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  console.log(fullname);

  //   function HandleEvent(event) {
  //     setname({[event.target.name]: event.target.value });
  //   }

  function HandleEvent(event) {
    setname((prevdata) => {
      return { ...prevdata, [event.target.name]: event.target.value };
    });
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={HandleEvent}
          name="firstname"
        />
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={HandleEvent}
          name="lastname"
        />
        <input
          type="email"
          placeholder="Enter your Name"
          onChange={HandleEvent}
          name="email"
        />
      </form>
    </div>
  );
}
