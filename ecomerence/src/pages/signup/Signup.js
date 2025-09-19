import { Link,  } from "react-router-dom"
import {  use, useState } from "react"
import Styles from './signup.module.css'
import Button from "../../components/button/Button"
import { signup } from "../../features/slices/authslice"
import { useDispatch, useSelector } from "react-redux"
export default function Signup() {
    const loadiing = useSelector((state) => state.auth.Loading);
    const disptach=useDispatch()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const clickhandler=()=>{
        console.log("signup button clicked")
        let userDetails={
            name,email,password
        }
        console.log(userDetails)
        disptach(signup(userDetails))
        setName('')
        setEmail('')
        setPassword('')
    }
    return (
<div className={Styles.Signup}>
    <div className={Styles.leftCover}>
       <img src={require("../../assests/signup-page-cover.png")} alt="Signup Cover" />
    </div>
 
    <div className={Styles.container}>
    

     
           <h1>Signup</h1>
        <div className={Styles.loginLink}>
        <p>Already have an account?</p>
       
         <p>  <Link className={Styles.link} to="/login">Sign in</Link> </p>
        </div>
           {(loadiing) ? <h2>Loading...</h2> :
        <div className={Styles.form}>
            <input value={name} type="text" placeholder='Your Name' onChange={(e)=>setName(e.target.value)} />
            <input value={email} type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
            <input value={password} type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}  />
          <Button className={Styles.Button} label="Signup" onClick={clickhandler} />
        </div>
          
    }
    </div>
  
</div>
    )}