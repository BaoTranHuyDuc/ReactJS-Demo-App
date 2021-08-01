import React, {useState} from 'react';

const my_style={height:40,width:300, fontSize: 20}    

function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }


  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = () => {
    if (email == "demo@gmail.com" && password == "demo12345") {
      alert("Successful")
    } else{
      alert("Fail")
    }
  }



  return (
    <center>
        <h1 style={{color: '#000000', backgroundColor: 'rgb(255, 255, 255)'}}>Login Page</h1>
        <br/>
        <hr/>
        <br/>
        <input type="text" placeholder="Username" style={my_style} value={email} onChange={ (e) => handleEmail(e)}/><br/><br/>
        <input type="password" placeholder="Password" style={my_style} value={password} onChange={handlePassword}/><br/><br/>
        <label style={{fontSize: 15}} ><input type="checkbox" /> Remember Me</label>
        <a style={{fontSize: 15, color: "blue"}} href="">Forgot Your Password? </a><br/>
        <br/>
        <a onClick = {props.action} style={{fontSize: 15, color: "blue"}}>Don't have an account? Sign up</a><br/><br/>
        <input type="submit" style={{height: 35, width: 300, fontSize: 20, backgroundColor: "rgb(143, 134, 134)", color: "white"}} value="Login" onClick={handleSubmit}/>
    </center>
    );
  }
export default Login;
