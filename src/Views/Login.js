import React, {useState} from 'react'

const Login = () => {

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  function loginBtn(){
    console.log('Hey', username, password);
  }

  return (
    <div>
      <input type="text" 
        id="loginUser" 
        name="" 
        placeholder='Username'
        onChange={(e)=>setUsername(e.target.value)}  
      />
      <input type="password" 
        id="loginPsw" name="" 
        placeholder='Password'
        onChange={(e)=>setPassword(e.target.value)}  
      />
      <input type="button" 
        id="loginBtn" 
        value="Enter" 
        onClick={loginBtn}
      />                
    </div>
  )
}

export default Login;
