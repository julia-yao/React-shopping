import { useState } from "react";
import Bloglist from "./BlogList";


const ContactList = () => { 
    
    const [name,setName] = useState('molly')
    const [age,setAge] = useState('20')

  const handleClick = ()=>{
     setName ('loot')
     setAge ('30')
  }
 
  return (
    <div className="ContactList">
      <p> my fri 
          {name} is {age} years older.</p>

      <button onClick={handleClick}>click me</button>
      <Bloglist />
    </div>
  );
}
 
export default ContactList;