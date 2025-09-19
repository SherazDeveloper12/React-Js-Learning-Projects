import Styles from './login.module.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import Button from "../../components/button/Button"
export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const clickhandler=()=>{
        console.log("signup button clicked")
    }
    return (
    <div className={Styles.Login}>
         <div className={Styles.leftCover}>
       <img src={require("../../assests/signup-page-cover.png")} alt="Signup Cover" />
    </div>
    <div className={Styles.container}>
        <h1>Sign in</h1>
        <div className={Styles.loginLink}>
        <p>Don’t have an accout yet? </p>
       
         <p>  <Link className={Styles.link} to="/signup">Sign Up</Link> </p>
        </div>
        <div className={Styles.form}>
            <input value={email} type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
            <input value={password} type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}  />
      <div className={Styles.rememberMeandForgot}>
         <div className={Styles.rememberMe}>
            <input type="checkbox" id="rememberMe" />
            <div className={Styles.rememberMeText}> <label htmlFor="rememberMe">Remember me</label>  </div>
         </div>
          <div className={Styles.forgotPassword}><Link to="/forgot-password">Forgot Password?</Link></div>
           </div>
          <Button className={Styles.Button} label="Sign in" onClick={clickhandler} />
        </div>
    </div>
    </div>
    )}
