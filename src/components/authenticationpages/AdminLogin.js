import React, {useState} from 'react'
import "../authenticationpages/loginStyle.css"
import backgroundImage from "../../assets/img/bg.png";
import adminImage from "../../assets/img/doctor2.svg";
import adminAvatar from "../../assets/img/avatar.svg"
//import {Link} from 'react-router-dom'

function AdminLogin() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(false);
    const [passError, setPassError] = useState("");
    const [emailError, setEmailError] = useState("");

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,16})");
    const emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$");

    const handleUsernameChange =(e) =>{
        const value = e.target.value;
        let error;
        setEmail(value)
        if( value && !emailRegex.test(value)) {
            setbtnDisabled(true)
            setEmailError("Invalid Email");
        }else {
            setEmailError('')
            setbtnDisabled(false)
        }
        console.log(emailError);
    }

    const handlePasswordChange = (e)=>{
        const value = e.target.value
            setPassword(value)
        if( value && !strongRegex.test(value)) {        
            setbtnDisabled(true)
            setPassError("Check your password");
        }else {
            setPassError('')
            setbtnDisabled(false)
        }
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
     
    }

    return (
        <div>
            <img className="wave" src={backgroundImage} alt='wave'/>
                <div className="container">
                    <div className="img">
                        <img src={adminImage} alt='logo' />
                    </div>
                    <div className="login-content">
                        <form onSubmit={handleSubmit}>
                            <img src={adminAvatar} alt='avatar'/>
                                <h3 className="title">Admin Login</h3>
                                <div className="input-div one">
                                    <div className="i">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="div">
                                        <input required type="email" className="input" placeholder='Enter Email' onChange={handleUsernameChange} value={email} />
                                    </div>
                                    {emailError && <small className='err'>{emailError}</small>} 
                                </div>
                                <div className="input-div pass">
                                    <div className="i">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <div className="div">
                                        <input required type="password" className="input" placeholder='Enter Password' onChange={handlePasswordChange} value={password}/>
                                    </div>
                                    {passError &&  <small className='err'>{passError}</small>} 
                                </div>
                                <p>Forgot password?</p>
                                
                                
                                <input type="submit" className="btn" value="Login" disabled={btnDisabled} />
                                
                            
                                                       
                        </form> 
                    </div>
                </div>
         </div>
                )
}

export default AdminLogin