import * as yup from 'yup';
import './addclient.css'
import { useState } from 'react';
export default function AddClient(props){
  const [addname, setname] = useState("");
  const [addemail, setemail] = useState("");
  const [addpassword, setpassword] = useState("");
  const [error, seterror] = useState("");
  
  
  let schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
const ClickHandler = async () =>{  
   let data = {
    username: addname,
    email: addemail,
    password: addpassword,
   }
  try {
   let result = await schema.validateSync(data);
  props.AddNewUser(data) 
setname("");
setemail(""); 
setpassword("");
seterror("" );
  }
  
  catch (error) {
  
    seterror(error.toString());}
  }

    return(
         <div>
          <div style={{color:"red"}}>{error}</div>
                  <input onChange={(e)=>setname(e.target.value)} type="text" id="addusername" placeholder='username'/>
                  <input onChange={(e)=>setemail(e.target.value)} type="text" id="addemail" placeholder='email'/>
                  <input onChange={(e)=>setpassword(e.target.value)} type="text" id="addpassword" placeholder='password'/>
                <button onClick={()=>ClickHandler()} style={{backgroundColor: "green", fontWeight: "bold"} }>Add New User</button>
                </div>
    )
}
