
import './addclient.css'
import { useState } from 'react';
export default function AddClient(props){
  const [addname, setname] = useState("");
  const [addemail, setemail] = useState("");
  const [addpassword, setpassword ] = useState("");
  
   let data = {
    username: addname,
    email: addemail,
    password: addpassword,
   }
  

    return(
         <div>
                  <input onChange={(e)=>setname(e.target.value)} type="text" id="addusername" placeholder='username'/>
                  <input onChange={(e)=>setemail(e.target.value)} type="text" id="addemail" placeholder='email'/>
                  <input onChange={(e)=>setpassword(e.target.value)} type="text" id="addpassword" placeholder='password'/>
                <button onClick={()=>props.AddNewUser(data)} style={{backgroundColor: "green", fontWeight: "bold"} }>Add New User</button>
                </div>
    )
}